"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function PricingPage() {
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

      {/* Pricing Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-custom">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your event photography needs. All plans include our core features.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 100 guests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic photo editing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>24-hour support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 transform scale-105">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600">/event</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 300 guests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced photo editing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom branding</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited guests</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Premium photo editing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom solutions</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 mb-6 font-custom">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What's included in each plan?</h3>
              <p className="text-gray-600">Each plan includes our core features like QR code generation, instant photo sharing, and basic analytics. Higher tiers include more advanced features and support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining duration of your subscription.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll refund your purchase.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I get started?</h3>
              <p className="text-gray-600">Simply choose a plan and click "Get Started". You'll be guided through the setup process and can start using SnapShack right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Event Photography?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of event organizers who are already using SnapShack to capture and share unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
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