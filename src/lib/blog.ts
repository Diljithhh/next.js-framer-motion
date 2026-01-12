// export interface BlogPost {
//   slug: string;
//   title: string;
//   description: string;
//   date: string;
//   author: string;
//   category: string;
//   tags: string[];
//   readTime: number;
//   image?: string;
//   content: string;
//   published: boolean;
//   seoKeywords?: string[];
// }

// // Example posts data (you can move to MDX/Markdown later)
// export const blogPosts: BlogPost[] = [
//   {
//     slug: "getting-started-with-flutter",
//     title: "Getting Started with Flutter: A Complete Guide for Beginners",
//     description: "Learn how to build beautiful, cross-platform mobile apps with Flutter. From installation to your first app deployment.",
//     date: "2025-01-15",
//     author: "Diljith V D",
//     category: "Flutter",
//     tags: ["Flutter", "Mobile Development", "Dart", "Cross-Platform"],
//     readTime: 8,
//     image: "/blog/flutter-intro.jpg",
//     published: true,
//     seoKeywords: ["flutter tutorial", "mobile app development", "dart programming", "flutter for beginners"],
//     content: `<h2>What is Flutter?</h2>
// <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-built widgets.</p>

// <h2>Why Choose Flutter?</h2>
// <ul>
//   <li><strong>Single Codebase:</strong> Write once, run everywhere</li>
//   <li><strong>Hot Reload:</strong> See changes instantly during development</li>
//   <li><strong>Performance:</strong> Compiled to native code for optimal speed</li>
//   <li><strong>Rich Widgets:</strong> Beautiful, customizable UI components</li>
// </ul>

// <h2>Installation Steps</h2>
// <p>To get started with Flutter, you need to install the Flutter SDK and set up your development environment. Visit the official Flutter website to download the SDK for your operating system.</p>

// <h2>Creating Your First App</h2>
// <p>After installation, you can create your first Flutter app using the command line:</p>
// <pre><code>flutter create my_first_app
// cd my_first_app
// flutter run
// </code></pre>

// <h2>Conclusion</h2>
// <p>Flutter is an excellent choice for building cross-platform mobile applications. Its fast development cycle, excellent performance, and growing ecosystem make it a top choice for developers worldwide.</p>`
//   },
//   {
//     slug: "fastapi-backend-development",
//     title: "Building Scalable Backends with FastAPI",
//     description: "Discover how to create high-performance REST APIs using FastAPI, Python's modern web framework for building APIs.",
//     date: "2025-01-10",
//     author: "Diljith V D",
//     category: "Backend",
//     tags: ["FastAPI", "Python", "REST API", "Backend Development"],
//     readTime: 6,
//     image: "/blog/fastapi-intro.jpg",
//     published: true,
//     seoKeywords: ["fastapi tutorial", "python api development", "rest api python", "fastapi best practices"],
//     content: `<h2>Introduction to FastAPI</h2>
// <p>FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use and learn, fast to code, ready for production.</p>

// <h2>Key Features</h2>
// <ul>
//   <li><strong>Fast:</strong> One of the fastest Python frameworks available</li>
//   <li><strong>Easy:</strong> Designed to be easy to use and learn</li>
//   <li><strong>Type Hints:</strong> Automatic validation and documentation</li>
//   <li><strong>Async Support:</strong> Built-in support for async/await</li>
// </ul>

// <h2>Creating Your First API</h2>
// <p>Here's a simple example of a FastAPI application:</p>
// <pre><code>from fastapi import FastAPI

// app = FastAPI()

// @app.get("/")
// def read_root():
//     return {"Hello": "World"}

// @app.get("/items/{item_id}")
// def read_item(item_id: int):
//     return {"item_id": item_id}
// </code></pre>

// <h2>Best Practices</h2>
// <p>When building production APIs with FastAPI, consider using dependency injection, proper error handling, and database connection pooling for optimal performance.</p>`
//   },
//   {
//     slug: "ai-integration-mobile-apps",
//     title: "Integrating AI into Mobile Apps: A Practical Guide",
//     description: "Learn how to leverage AI capabilities in Flutter apps, including TensorFlow Lite, custom models, and cloud AI services.",
//     date: "2025-01-05",
//     author: "Diljith V D",
//     category: "AI",
//     tags: ["AI", "Flutter", "Machine Learning", "Mobile Apps"],
//     readTime: 10,
//     image: "/blog/ai-mobile.jpg",
//     published: true,
//     seoKeywords: ["ai mobile apps", "flutter ai integration", "tensorflow lite", "machine learning mobile"],
//     content: `<h2>Why Integrate AI into Mobile Apps?</h2>
// <p>Artificial Intelligence is transforming mobile app development, enabling features like image recognition, natural language processing, and predictive analytics. Integrating AI can significantly enhance user experience and provide competitive advantages.</p>

// <h2>AI Integration Approaches</h2>
// <h3>1. Cloud-Based AI Services</h3>
// <p>Use APIs from providers like Google Cloud AI, AWS AI services, or OpenAI for complex AI features without heavy on-device processing.</p>

// <h3>2. On-Device AI</h3>
// <p>Deploy lightweight models using TensorFlow Lite or Core ML for real-time, offline AI capabilities.</p>

// <h3>3. Hybrid Approach</h3>
// <p>Combine cloud services for complex tasks with on-device models for common operations, balancing performance and functionality.</p>

// <h2>Implementation Example</h2>
// <p>For Flutter apps, you can use packages like <code>tflite_flutter</code> for TensorFlow Lite integration or make API calls to cloud AI services using HTTP clients.</p>

// <h2>Best Practices</h2>
// <ul>
//   <li>Optimize models for mobile devices</li>
//   <li>Handle network connectivity issues gracefully</li>
//   <li>Consider user privacy and data security</li>
//   <li>Cache results when appropriate</li>
// </ul>

// <h2>Conclusion</h2>
// <p>AI integration in mobile apps opens up endless possibilities for creating intelligent, user-friendly applications. Start with simple use cases and gradually incorporate more advanced AI features.</p>`
//   },
// ];

// export function getAllPosts(): BlogPost[] {
//   return blogPosts.filter(post => post.published).sort((a, b) =>
//     new Date(b.date).getTime() - new Date(a.date).getTime()
//   );
// }

// export function getPostBySlug(slug: string): BlogPost | undefined {
//   return blogPosts.find(post => post.slug === slug && post.published);
// }

// export function getPostsByCategory(category: string): BlogPost[] {
//   return getAllPosts().filter(post => post.category === category);
// }

// export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
//   const currentPost = getPostBySlug(currentSlug);
//   if (!currentPost) return [];

//   return getAllPosts()
//     .filter(post =>
//       post.slug !== currentSlug &&
//       (post.category === currentPost.category ||
//        post.tags.some(tag => currentPost.tags.includes(tag)))
//     )
//     .slice(0, limit);
// }

