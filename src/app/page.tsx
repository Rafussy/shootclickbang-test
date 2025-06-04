"use client";

import Image from "next/image";
import { Camera, Scan, Share2, Images, ArrowRight, Star, Users, Download, CheckCircle, QrCode, Smartphone, Heart, Shield } from "lucide-react";

export default function Home() {
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
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Feature</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blog</a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-65 items-center">
            {/* Left Content */}
            <div className="flex w-[655px] flex-col justify-center items-end gap-[42px]">
              {/* Bold Heading */}
              <div className="space-y-4 gap-8">

                <div className="h-[200px] w-full relative">
                  <div className="absolute top-0 right-0 w-[2010px] h-[200px]">
                    <Image
                      src="/assets/Group 25.svg"
                      alt="One Scan Instant Memories"
                      fill
                      className="h-full z-10 absolute top-0 right-0 object-fill"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end gap-4">
                  <div className="flex flex-row gap-2">
                    {/* Supporting Text */}
                    <div className="inline-block">
                      <p className="text-black font-semibold text-base leading-7 tracking-[-0.08px] font-inter">
                        Affordable, easy-to-use UGC for events, festivals and more.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-start gap-4">
                    <button
                      className="flex px-6 py-2 justify-center items-center gap-2.5 rounded-xl bg-[#F14E38] text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#F14E38' }}
                      onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E03E28'}
                      onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#F14E38'}
                    >
                      Start your free trial →
                    </button>
                    <button
                      className="flex px-6 py-2 justify-center items-center gap-2.5 rounded-xl bg-[#36A2DB] text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ backgroundColor: '#3EAEE4' }}
                      onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E9ED4'}
                      onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#3EAEE4'}
                    >
                      Watch Demo Reel
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[396px] h-[73.4177px] flex flex-col gap-3 items-end">
                <div className="text-black font-inter text-base font-semibold leading-7 tracking-[-0.08px]">
                  They've captured the fun!
                </div>
                <div className="flex w-[396px] justify-end items-center gap-[20.051px]">
                  <Image
                    src="/assets/logos_slack.svg"
                    alt="Slack Logo"
                    width={93.476}
                    height={33.418}
                    className="w-[93.476px] h-[33.418px] flex-shrink-0"
                    style={{ aspectRatio: '93.48/33.42' }}
                  />
                  <Image
                    src="/assets/airbnb.svg"
                    alt="Airbnb Logo"
                    width={93.476}
                    height={33.418}
                    className="w-[93.476px] h-[33.418px] flex-shrink-0"
                    style={{ aspectRatio: '93.48/33.42' }}
                  />
                  <Image
                    src="/assets/twitter.svg"
                    alt="X (Twitter) Logo"
                    width={93.476}
                    height={33.418}
                    className="w-[93.476px] h-[33.418px] flex-shrink-0"
                    style={{ aspectRatio: '93.48/33.42' }}
                  />
                  <Image
                    src="/assets/stripe.svg"
                    alt="Stripe Logo"
                    width={93.476}
                    height={33.418}
                    className="w-[93.476px] h-[33.418px] flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - 3D Polaroid Camera */}
            <div className="relative flex w-[600px] flex-col items-center">
              <div className="relative">
                <Image
                  src="/assets/Group 22.svg"
                  alt="3D Polaroid Camera with Phone Selfie"
                  width={600}
                  height={500}
                  className="w-full max-w-lg h-auto drop-shadow-2xl rounded-[40px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex h-[720px] p-[60px] justify-center items-center gap-[60px] self-stretch">
        <div className="absolute overflow-hidden z-10 left-[-1179.246px] top-[840.993px] w-[3781.928px] h-[68.751px] bg-gradient-to-b from-[#FF9F1C] to-[#FF9F1C] rotate-[4.677deg]"></div>
        <div className="w-[700.851px] absolute h-[410.492px] right-[800.149px] top-[840px] z-10 flex flex-row gap-[-100px]">

          <Image
            src="/assets/Group 28.svg"
            alt="picture"
            width={247.443}
            height={366.078}
            className="w-[247.443px] h-[366.078px] rotate-[7.655deg] flex-shrink-0 aspect-[247.44/366.08]"
          />
          <Image
            src="/assets/Group 30.svg"
            alt="picture"
            width={247.443}
            height={366.078}
            className="w-[247.443px] h-[366.078px] -rotate-[1deg] flex-shrink-0 aspect-[247.44/366.08]"
          />

          <Image
            src="/assets/Group 29.svg"
            alt="picture"
            width={247.443}
            height={366.078}
            className="w-[247.443px] h-[366.078px] -rotate-[-1deg] flex-shrink-0 aspect-[247.44/366.08]"
          />
        </div>

        <div className="flex w-[1200.4546px] h-[600px] gap-[55px] relative">
          <div className="rounded-3xl bg-[#E9F1F4] w-[572.727px] flex flex-col items-center z-0">
            <Image
              src="/assets/Frame 59.svg"
              alt="picture"
              width={572.727}
              height={572.727}
              className="w-full h-full "
            />
          </div>
          <div className="flex w-[572.727px] h-[600px] absolute right-[10px] justify-between items-end flex-shrink-0">
            <div className="flex flex-col items-start gap-6 flex-1">
              <h1 className="text-[#F14E38] text-center font-['FK_Screamer_Legacy_Trial'] text-[64px] font-bold leading-normal">
                INSTANT MEMORIES
              </h1>
              <h2 className="self-stretch text-[#464646] font-['Inter'] text-[20px] font-medium leading-[28px] tracking-[-0.1px]">
                Replace expensive photographers and disposable cameras with a modern, digital solution. Guests capture photos and videos via a QR code, and everything is collected in a beautiful event gallery.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-[60px] flex-col justify-center items-center gap-[10px] self-stretch">
        <div className="flex w-[1200px] p-[60px] justify-between items-center rounded-[24px] bg-[#36A2DB] relative">
          <Image
            src="/assets/image 9.svg"
            alt="picture"
            width={1275}
            height={725}
            className="w-auto h-auto object-cover mix-blend-soft-light absolute left-[-45px] bottom-[-356px] z-10"
          />
          <h1 className="text-white font-['Abominable'] text-[64px] font-bold leading-normal">
            HOW WE MADE THIS A REALITY
          </h1>
          <button className="flex px-6 py-3 justify-center items-center gap-2.5 rounded-full bg-white">
            <p className="text-[#0F172A] font-['Inter'] text-base font-medium leading-6">
              ABOUT US →
            </p>
          </button>

        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SnapShack?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of event photography with our innovative QR-based solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple QR Scanning</h3>
              <p className="text-gray-600 leading-relaxed">
                Guests simply scan a QR code to instantly share their photos and videos. No app downloads or complicated setup required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Images className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Collection</h3>
              <p className="text-gray-600 leading-relaxed">
                All photos and videos are automatically collected in a beautiful, shareable gallery that updates in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your memories are protected with enterprise-grade security. Control who can view and download your event photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo with Frame */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/assets/Frame 63.svg"
                  alt="Event Photo Gallery"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-xl transform rotate-12 animate-[float_3s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-2xl bg-white/20 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl shadow-xl transform -rotate-12 animate-[float_3s_ease-in-out_infinite]"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="w-full h-full rounded-2xl bg-white/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              <div
                className="absolute top-1/4 -left-10 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl shadow-xl transform rotate-45 animate-[float_3s_ease-in-out_infinite]"
                style={{ animationDelay: '1.2s' }}
              >
                <div className="w-full h-full rounded-2xl bg-white/20"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    CAPTURE EVERY MOMENT
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Replace expensive photographers and disposable cameras with our modern,
                  digital solution. Guests capture photos and videos via QR code scanning,
                  and everything is collected in a beautiful, real-time event gallery.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Unlimited Photos & Videos</h4>
                    <p className="text-gray-600">No limits on the number of photos or videos your guests can share</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time Gallery Updates</h4>
                    <p className="text-gray-600">Watch your gallery grow in real-time as guests share their memories</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy Download & Share</h4>
                    <p className="text-gray-600">Download all photos in high quality or share individual moments instantly</p>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                Start Creating Memories
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HOW IT WORKS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in just three simple steps and transform your events forever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-blue-300 to-transparent hidden md:block transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Event</h3>
              <p className="text-gray-600 leading-relaxed">
                Set up your event in minutes. Add event details, customize settings, and generate your unique QR code.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-purple-300 to-transparent hidden md:block transform -translate-y-1/2"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share QR Code</h3>
              <p className="text-gray-600 leading-relaxed">
                Display your QR code at the event. Guests scan it with their phones to instantly access the photo sharing portal.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collect Memories</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch as photos and videos pour in real-time. Download, share, and cherish every moment captured by your guests.
              </p>
            </div>
          </div>
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

          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/assets/Logo.svg.svg"
                  alt="SnapShack Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">SnapShack</span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing event photography with QR-based instant sharing. Capture every moment, share every memory.
              </p>
              <div className="text-sm text-gray-400">
                <p>1234 Innovation Drive</p>
                <p>San Francisco, CA 94102</p>
                <p>contact@snapshack.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 SnapShack. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.646 0-2.625-2.245-4.869-5.487-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
