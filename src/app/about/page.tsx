"use client";

import Image from "next/image";
import { Camera, Scan, Share2, Images, ArrowRight, Star, Users, Download, CheckCircle, QrCode, Smartphone, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function AboutPage() {
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
            <div className="flex items-center justify-end space-x-12" >
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

      {/* About Us Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-custom">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe the best moments at any event aren't staged — they're spontaneous. 
              That's why we built a tool that helps brands, organizers, and communities capture those real, 
              unfiltered memories with zero fuss. No fancy equipment. No expensive photographers. 
              Just one scan, and you are instantly part of the story.           
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-custom">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-12">Our mission is to make capturing and sharing memories at events effortless, fun, and accessible for everyone. We believe every moment matters, and everyone should be able to relive their favorite experiences with ease.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm flex flex-col items-center">
              <div className="bg-blue-50 rounded-xl p-4 mb-4"><Camera className="w-8 h-8 text-blue-600" /></div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Capture Authenticity</h3>
              <p className="text-gray-600">We believe in the power of real, unfiltered moments captured by the people who experience them.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm flex flex-col items-center">
              <div className="bg-purple-50 rounded-xl p-4 mb-4"><Users className="w-8 h-8 text-purple-600" /></div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Empower Community</h3>
              <p className="text-gray-600">We're building tools that bring event attendees together through shared memories and experiences.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm flex flex-col items-center">
              <div className="bg-pink-50 rounded-xl p-4 mb-4"><Heart className="w-8 h-8 text-pink-600" /></div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Preserve Memories</h3>
              <p className="text-gray-600">We're committed to helping you create and preserve digital memories that last a lifetime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-custom">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12">We are a passionate group of creators, technologists, and event enthusiasts dedicated to building the best platform for user-generated content at events. Our diverse backgrounds help us understand the needs of both organizers and guests.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <Image src="/assets/team1.jpg" alt="Alex Rivera" width={180} height={180} className="rounded-xl mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg text-gray-900">Alex Rivera</h3>
              <a href="#" className="text-blue-600 font-medium text-sm mb-2">Founder & CEO</a>
              <p className="text-gray-600 text-sm">Former photographer with a passion for making memories accessible to everyone.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <Image src="/assets/team2.jpg" alt="Jamie Chen" width={180} height={180} className="rounded-xl mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg text-gray-900">Jamie Chen</h3>
              <a href="#" className="text-purple-600 font-medium text-sm mb-2">CTO</a>
              <p className="text-gray-600 text-sm">Tech innovator who built our QR-powered platform from the ground up.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <Image src="/assets/team3.jpg" alt="Morgan Williams" width={180} height={180} className="rounded-xl mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg text-gray-900">Morgan Williams</h3>
              <a href="#" className="text-pink-600 font-medium text-sm mb-2">Head of Design</a>
              <p className="text-gray-600 text-sm">UX expert ensuring our platform is intuitive for event guests of all ages.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <Image src="/assets/team4.jpg" alt="Jordan Taylor" width={180} height={180} className="rounded-xl mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg text-gray-900">Jordan Taylor</h3>
              <a href="#" className="text-blue-600 font-medium text-sm mb-2">Lead Developer</a>
              <p className="text-gray-600 text-sm">Coding wizard who makes sure our platform works flawlessly at every event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SnapShack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-custom">Why SnapShack?</h2>
            <p className="text-xl text-gray-600">We saw a need for a modern, digital solution to replace expensive photographers and disposable cameras. SnapShack empowers everyone at your event to become a memory maker, ensuring no moment is missed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="rounded-2xl border border-gray-100 bg-blue-50 p-6 flex flex-col items-center">
              <QrCode className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-bold text-lg text-gray-900 mb-1">QR-Powered Simplicity</h3>
              <p className="text-gray-600 text-sm">One quick scan allows guests to instantly upload photos and videos to your event gallery.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-purple-50 p-6 flex flex-col items-center">
              <Share2 className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-bold text-lg text-gray-900 mb-1">Instant Sharing</h3>
              <p className="text-gray-600 text-sm">Real-time content sharing keeps everyone connected during and after your event.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-pink-50 p-6 flex flex-col items-center">
              <Images className="w-8 h-8 text-pink-600 mb-2" />
              <h3 className="font-bold text-lg text-gray-900 mb-1">Unified Gallery</h3>
              <p className="text-gray-600 text-sm">All guest content automatically organized in one beautiful, shareable collection.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 flex flex-col justify-center">
              <h4 className="font-bold text-lg text-blue-700 mb-4">The SnapShack Difference</h4>
              <ul className="text-blue-900 text-base space-y-2">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />No expensive equipment or professional photographers needed</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />All content automatically collected in one place</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />Real-time updates as guests add photos and videos</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-600 mr-2" />Seamless sharing with all attendees during and after the event</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 flex flex-col items-center">
              <Smartphone className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-bold text-lg text-gray-900 mb-1">Time Efficient</h3>
              <p className="text-gray-600 text-sm">Save hours sorting through emails and messages trying to collect photos after your event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 font-custom">What Our Customers Say</h2>
          {/* Carousel logic */}
          {(() => {
            const testimonials = [
              {
                quote: "Our music festival used SnapShack last year and the results were incredible. Thousands of authentic moments captured by our attendees!",
                name: "Leila Washington",
                title: "Festival Director, SoundWave",
              },
              {
                quote: "SnapShack made it so easy to collect and share photos from our company retreat. Everyone loved how simple it was!",
                name: "Carlos Mendez",
                title: "HR Manager, TechNova",
              },
              {
                quote: "We saved so much time and money by letting our guests be the photographers. The gallery was full of genuine, joyful moments.",
                name: "Priya Patel",
                title: "Event Planner, CelebrateMore",
              },
            ];
            const [current, setCurrent] = React.useState(0);
            const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
            const next = () => setCurrent((current + 1) % testimonials.length);
            return (
              <>
                <div className="flex items-center justify-center gap-4 w-full">
                  <button
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-gray-500 hover:text-blue-600 transition shadow"
                    style={{ flex: 'none' }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="bg-white rounded-2xl shadow p-10 mx-auto max-w-2xl flex-1">
                    <span className="text-5xl text-blue-100 mb-4 block">“</span>
                    <p className="text-xl text-gray-700 mb-6">{testimonials[current].quote}</p>
                    <div>
                      <span className="font-bold text-gray-900">{testimonials[current].name}</span>
                      <span className="block text-gray-500 text-sm">{testimonials[current].title}</span>
                    </div>
                  </div>
                  <button
                    aria-label="Next testimonial"
                    onClick={next}
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-gray-500 hover:text-blue-600 transition shadow"
                    style={{ flex: 'none' }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${current === idx ? "bg-blue-400" : "bg-gray-300"}`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Create Amazing Memories?
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