"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-10 md:h-16">
            <div className="flex items-center">
              <Image
                src="/assets/snapclickbanglogo.svg"
                alt="SNAPCLICKBANG Logo"
                width={180}
                height={24}
                className="h-6 w-auto sm:w-[150px] md:w-auto"
                priority
              />
            </div>
            <div className="flex items-center justify-end">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 mr-12">
                <a href="/" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 active:border-white focus:border-white">Home</a>
                <a href="/about" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-white hover:border-blue-600 active:border-white focus:border-white">About Us</a>
                <a href="/features" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 active:border-white focus:border-white">Features</a>
                <a href="#pricing" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 active:border-white focus:border-white">Pricing</a>
                <a href="#blog" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 active:border-white focus:border-white">Blog</a>
              </nav>

              {/* CTA Button */}
              <div className="flex items-center space-x-3">
                <button className="bg-red-500 text-white flex-shrink-0 sm:px-2 sm:py-2 md:px-6 md:py-2.5 rounded-full sm:text-xs md:text-base font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                  Snap Now
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-white/10 focus:outline-nonehost
                   focus:ring-white/20"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-10 left-0 right-0 bg-primary shadow-lg`} id="mobile-menu">
              <div className="px-4 py-4 space-y-1">
                <a
                  href="/"
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/features"
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#blog"
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Us Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F14E38]" 
              style={{ fontFamily: 'Abominable, sans-serif' }}>
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 leading-relaxed">
            We believe the best moments at any event aren't staged-they're spontaneous. That's why we built a tool that helps brands, organizers, and communities capture those real, unfiltered memories with zero fuss. No fancy equipment. No expensive photographers. Just one scan, and you are instantly part of the story.
          </p>
        </div>
      </section>
       
      {/* Our Mission Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20 px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#3696D2]"
              style={{ fontFamily: 'Abominable, sans-serif' }}>
            OUR MISSION
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 leading-relaxed">
            Our mission is to make capturing and sharing memories at events effortless, fun, and accessible for everyone. We believe every moment matters, and everyone should be able to relive their favorite experiences with ease.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FF9F1C]"
              style={{ fontFamily: 'Abominable, sans-serif' }}>
            OUR TEAM
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 leading-relaxed">
            We are a passionate group of creators, technologists, and event enthusiasts dedicated to building the best platform for user-generated content at events. Our diverse backgrounds help us understand the needs of both organizers and guests.
          </p>
        </div>
      </section>

            {/* Why SnapClickBang Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          <div className="flex max-w-4xl mx-auto text-center justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black font-[Abominable,sans-serif]">WHY</h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F14E38] font-[Abominable,sans-serif]">SNAP</h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#3696D2] font-[Abominable,sans-serif]">CLICK</h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FF9F1C] font-[Abominable,sans-serif]">BANG?</h2>
          </div>
          <p className="flex max-w-4xl mx-auto text-center text-lg sm:text-center md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 leading-relaxed">
            We saw a need for a modern, digital solution to replace expensive photographers and disposable cameras, SnapClickBang empowers everyone at your event to become a memory maker, ensuring no moment is missed.
          </p>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24 xl:px-28 xl:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-[#3696D2] mb-8 md:mb-12 lg:mb-16"
              style={{ fontFamily: 'Abominable, sans-serif' }}>
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Lorem culpa lorem. Deserim et adipisci, laboriosam dut officia. Dolores adipice totam et."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Leslie Alexander</p>
                  <p className="text-gray-500 text-xs">@leslieaadner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes mauris. Amet mauris nihil elit venenatis blandit vel et proin. Non hendrerit in vel et diam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Brenna Goyette</p>
                  <p className="text-gray-500 text-xs">@brennagoyette</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Molestiae incunt elit Et lore natus est nihism deserunt explicabo nihil. Quo corporis voluptas ea quist."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Leonard Krasner</p>
                  <p className="text-gray-500 text-xs">@leonardkrasner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Quis dectatur est. Atque quo aliquot sit officiis maiores quat. Dictem molestu quod aliquos. At sint dicta cum fugit laborium omnis qui exceptatur sit."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">SaryCat</p>
                  <p className="text-gray-500 text-xs">@sarygatt</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Aut reprehederit voluptatem sequi aspernatur et eum faut ut quam. excepturim laborem volutas cumique dolore et in. quam pellentesque doloram aliquid, ut aliquam inventore et accusantium posam conseque."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Michael Foster</p>
                  <p className="text-gray-500 text-xs">@mikeitsfoster</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Consectetur et est, Thique molestiae et venim cum fugit laborium aspernatur. Vel sunt dicta explicabo iste eum quas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Dries Vincent</p>
                  <p className="text-gray-500 text-xs">@driesvincent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 7 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Aut reprehederit sequi aspernatur inventore et est aliquam diam. Vel quas dicta consectetur aliquid excepturi voluptas et aspernatur. Vel laudo laborium elit."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Lindsay Walton</p>
                  <p className="text-gray-500 text-xs">@lindsaywalton</p>
                </div>
              </div>
            </div>

            {/* Testimonial 8 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Temporibus to molestias impedit adipisci portamque ab aliquet Nostrum explicitus delet et."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Tom Cook</p>
                  <p className="text-gray-500 text-xs">@tomcook</p>
                </div>
              </div>
            </div>

            {/* Testimonial 9 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Molestiae incum dicta odisser Quam pellentesque nohil aliqual, ut aliquam inventore et aspernatur."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Floyd Miles</p>
                  <p className="text-gray-500 text-xs">@floydmiles</p>
                </div>
              </div>
            </div>

            {/* Testimonial 10 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Molestia et et Atque qua aliquet sit officiis poussit aspentatur sequi aspernatur sunt laborium aspernatur. Vel sunt dicta explicabo incidunt est. Quid curnm explicitus delet et."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Courtney Henry</p>
                  <p className="text-gray-500 text-xs">@courtneyhenry</p>
                </div>
              </div>
            </div>

            {/* Testimonial 11 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Aliqad rerum reprehenderit adipisci adipest. Cumque qui exceptari non sunt. Quid dicta conp omque Aiti."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Emily Selman</p>
                  <p className="text-gray-500 text-xs">@emilyselman</p>
                </div>
              </div>
            </div>

            {/* Testimonial 12 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                "Aliqad aucus reprehenderit adipict. Cumque atriqu qui exceptari non sunt. quul dicta saepe composi."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Whitney Francis</p>
                  <p className="text-gray-500 text-xs">@whitneyfrancis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex relative mx-auto w-full max-w-[1440px] z-10 py-6 md:py-10 px-4 md:px-8 lg:px-[10px] justify-center items-center gap-[10px] self-stretch bg-white">
        <div className="flex w-full max-w-[1200px] flex-col items-start gap-4 md:gap-6">
          <div className="flex w-full flex-col lg:flex-row justify-between lg:items-start gap-6 lg:gap-0">
            <div className="flex flex-col items-start gap-1 relative z-10 sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto">
              <Image
                src="/assets/snapclickbanglogo.svg"
                alt="logo"
                width={242.1657}
                height={23.015}
                className="flex h-[25px] md:h-[30px] lg:h-[35px] p-[3px] flex-col items-start gap-[10px] z-10"
              />
              <h1 className="text-[#0A142F] font-inter text-sm md:text-lg lg:text-2xl font-normal leading-6 md:leading-8 lg:leading-9 mt-2 sm:text-center md:text-center lg:text-start">
                5123 Market St. #22B<br />
                Charlottesville, California 44635
              </h1>
              <ul className="flex flex-col items-start gap-2 text-[#0A142F] font-inter text-sm md:text-base font-normal leading-[22px] underline mt-2">
                contact@lift.snapclickbang.com
              </ul>
              <h1 className="text-[#0A142F] font-inter text-sm md:text-base font-normal leading-[22px]">
                (434) 546-4356
              </h1>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row items-start gap-4 md:gap-1 sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto">
              <div className="flex flex-col items-start gap-2 sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto">
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">About</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Growers</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Merchant</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Partners</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Contact</p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto">
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Facebook</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Twitter</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Linkedin</p>
                <p className="w-auto md:w-[159.777px] text-[#0A142F] font-inter text-sm md:text-base font-normal leading-5 md:text-center lg:text-start">Instagram</p>
              </div>
              <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] transition-all duration-300 transform hover:scale-105 overflow-hidden sm:hidden md:hidden lg:flex rounded-full">
                <Image
                  src="/assets/Up arrow.svg"
                  alt="picture"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full md:gap-5 lg:items-start lg:justify-between lg:w-full lg:w-auto gap-4">
            <p className="text-black font-inter text-sm md:text-base font-bold leading-5 opacity-65 sm:text-center md:text-center lg:text-start">
              © 2025 SnapClickBang. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto gap-4 md:gap-6">
              <p className="text-black font-inter text-sm md:text-base font-bold leading-5 opacity-65">
                Privacy Policy
              </p>
              <p className="text-black font-inter text-sm md:text-base font-bold leading-5 opacity-65">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
} 