// Run this script to create your initial admin user
// Usage: npx tsx scripts/init-admin.ts <username> <password>

import { userDb } from '../src/lib/db';
import { hashPassword } from '../src/lib/auth';

const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
  console.error('Usage: npx tsx scripts/init-admin.ts <username> <password>');
  process.exit(1);
}

async function initAdmin() {
  try {
    // Check if user already exists
    const existing = userDb.getByUsername(username);
    if (existing) {
      console.error(`User "${username}" already exists!`);
      process.exit(1);
    }

    const passwordHash = await hashPassword(password);
    userDb.create(username, passwordHash);

    console.log(`✅ Admin user "${username}" created successfully!`);
    console.log('You can now log in at /admin/login');
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

initAdmin();

