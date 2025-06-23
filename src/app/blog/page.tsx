"use client";

import Image from "next/image";
import { Calendar, Clock, User, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/assets/Layer_5.svg"
                alt="SNAPCLICKBANG Logo"
                width={180}
                height={24}
                className="h-6 w-auto"
                priority
              />
            </div>
            <div className="flex items-center justify-end space-x-12">
              <nav className="hidden md:flex items-right space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
                <a href="/features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
                <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blog</a>
              </nav>
              <div className="flex items-center">
                <button className="bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                  Snap Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-custom">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover tips, tricks, and stories about event photography and memory sharing.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1">
                  <Image
                    src="/assets/blog-featured.jpg"
                    alt="Featured Blog Post"
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:flex-1 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      March 15, 2024
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    The Future of Event Photography: How QR Codes are Changing the Game
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover how QR code technology is revolutionizing the way we capture and share memories at events. Learn about the latest trends and how to implement them in your next event.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="/assets/author.jpg"
                        alt="Author"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="ml-3 text-gray-700">John Doe</span>
                    </div>
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              All Posts
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Event Tips
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Photography
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
              Technology
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/assets/blog-1.jpg"
                alt="Blog Post 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    March 10, 2024
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  10 Tips for Perfect Event Photography
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the essential tips and tricks for capturing perfect moments at any event.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-gray-700">Sarah Smith</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/assets/blog-2.jpg"
                alt="Blog Post 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    March 5, 2024
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    8 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  The Rise of Instant Photo Sharing
                </h3>
                <p className="text-gray-600 mb-4">
                  How instant photo sharing is transforming the way we experience events.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-gray-700">Mike Johnson</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/assets/blog-3.jpg"
                alt="Blog Post 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    February 28, 2024
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    6 min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Maximizing Engagement at Corporate Events
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategies for keeping attendees engaged and creating memorable experiences.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-gray-700">Emma Wilson</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest tips, tricks, and insights about event photography and memory sharing delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex relative mx-auto w-[1440px] z-10 py-10 px-[10px] justify-center items-center gap-[10px] self-stretch bg-white">
        <div className="flex w-[1200px] flex-col items-start gap-6">
          <div className="flex w-[1200px] justify-between items-start">
            <div className="flex flex-col items-start gap-1 relative z-10">
              <Image
                src="/assets/snapclickbanglogo.svg" 
                alt="logo" 
                width={242.1657}
                height={23.015}
                className="flex h-[35.015px] p-[3px] flex-col items-start gap-[10px] z-10"
              />
              <h1 className="text-[#0A142F] font-inter text-2xl font-normal leading-9">
              5123 Market St. #22B 
              Charlottesville, California 44635
              </h1>
              <ul className="flex flex-col items-start gap-2 text-[#0A142F] font-inter text-base font-normal leading-[22px] underline">
              contact@lift.snapclickbang.com
              </ul>
              <h1 className="text-[#0A142F] font-inter text-base font-normal leading-[22px]">
              (434) 546-4356
              </h1>
            </div>  
            <div className="flex items-start gap-1">
              <div className="flex flex-col items-start gap-2">
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">About</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Growers</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Merchant</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Partners</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Contact</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Facebook</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Twitter</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Linkedin</p>
                <p className="w-[159.777px] text-[#0A142F] font-inter text-base font-normal leading-5">Instagram</p>
              </div>
              <div className="w-[50px] h-[50px] transition-all duration-300 transform hover:scale-105 overflow-hidden rounded-full">
                <Image
                  src="/assets/Up arrow.svg"
                  alt="picture"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black font-inter text-base font-bold leading-5 opacity-65">
              © 2025 SnapClickBang. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-black font-inter text-base font-bold leading-5 opacity-65">
                Privacy Policy
              </p>
              <p className="text-black font-inter text-base font-bold leading-5 opacity-65">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 