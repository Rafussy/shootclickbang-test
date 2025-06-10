"use client";

import Image from "next/image";
import { Camera, Scan, Share2, Images, ArrowRight, Star, Users, Download, CheckCircle, QrCode, Smartphone, Heart, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white overflow-hidden">
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
                <a href="/" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-white hover:border-blue-600 active:border-white focus:border-white">Home</a>
                <a href="/about" className="text-white hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 active:border-white focus:border-white">About Us</a>
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

      {/* Hero Section */}
      <section className="relative sm:pb-[100px] md:pb-[100px] py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-6 items-center justify-center">
            {/* Left Content */}
            <div className="flex md:w-[655px] w-full flex-col justify-center items-center sm:pb-[150px] md:items-end gap-[42px]">
              <div className="space-y-4 gap-8">
                <div className="h-[200px] w-full relative sm:scale-80 md:scale-none sm:right-[-40px] md:right-0">
                  <div className="absolute top-0 right-0 w-[2010px] h-[200px]">
                    <Image
                      src="/assets/onescaninstantmemories.svg"
                      alt="One Scan Instant Memories"
                      fill
                      className="h-full z-10 absolute top-0 right-0 object-fill"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center md:items-end items-center gap-4 w-full">
                  <div className="flex justify-center items-center flex-row gap-2 w-full text-center">
                    <p className="text-black font-semibold text-base text-center leading-7 tracking-[-0.08px] font-inter">
                      Affordable, easy-to-use UGC for events, festivals and more.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-start gap-4 flex-col md:flex-row w-full md:w-auto">
                    <button
                      className="flex px-6 py-2 justify-center items-center w-full md:w-auto gap-2.5 rounded-xl bg-[#F14E38] hover:bg-[#E03E28] text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Start your free trial →
                    </button>
                    <button
                      className="flex px-6 py-2 justify-center w-full md:w-auto items-center gap-2.5 rounded-xl bg-[#36A2DB] text-white font-semibold hover:bg-[#2E9ED4] transition-all duration-300 transform hover:scale-105"
                    >
                      Watch Demo Reel
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[396px] h-[73.4177px] flex flex-col gap-3 items-center md:items-end">
                <div className="text-black font-inter text-base font-semibold leading-7 tracking-[-0.08px]">
                  They&apos;ve captured the fun!
                </div>
                <div className="flex w-[396px] justify-center items-center gap-[20.051px] flex-col sm:flex-col md:flex-row">
                  <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-0 sm:gap-12 space-y-4 sm:space-y-0">
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
                    /></div>
                  <div className="flex flex-col sm:flex-col md:flex-row  justify-center items-center gap-0 sm:gap-12 space-y-4 sm:space-y-0">
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
                      className="w-16 md:w-20 lg:w-[93.476px] h-auto flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content - 3D Polaroid Camera */}
            <div className="relative hidden md:flex flex w-[600px] items-center ">
              <div className="relative top-0 right-0 left-0">
                <Image
                  src="/assets/polaroid.svg"
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
      <section className="relative sm:pt-30 md:pt-0">
        <div className="absolute  w-full max-w-[1440px] -translate-x-1/2 left-1/2 w-full flex z-20 ">
          <div className="flex flex-row gap-[-50px] lg:gap-[-100px] absolute -top-10 right-10 hidden sm:hidden md:hidden lg:flex">
            <Image
              src="/assets/bluepolaroidphoto.svg"
              alt="picture"
              width={247.443}
              height={366.078}
              className="w-[120px] md:w-[180px] lg:w-[247.443px] h-auto rotate-[7.655deg] flex-shrink-0 aspect-[247.44/366.08]"
            />
            <Image
              src="/assets/greenpolaroidphoto.svg"
              alt="picture"
              width={247.443}
              height={366.078}
              className="w-[120px] md:w-[180px] lg:w-[247.443px] h-auto -rotate-[1deg] flex-shrink-0 aspect-[247.44/366.08]"
            />
            <Image
              src="/assets/pinkpolaroidphoto.svg"
              alt="picture"
              width={247.443}
              height={366.078}
              className="w-[120px] md:w-[180px] lg:w-[247.443px] h-auto -rotate-[-1deg] flex-shrink-0 aspect-[247.44/366.08]"
            /></div>
        </div>
        <div className="scale-[120%] -mb-[180px] top-5 z-40 w-full h-[40px] md:h-[60px] lg:h-[68.751px] bg-gradient-to-b from-[#FF9F1C] to-[#FF9F1C] rotate-[4.677deg]" />
      </section>
      <section className="w-full max-w-[1440px] mx-auto z-0 min-h-[400px] md:min-h-[500px] lg:h-[720px] p-4 md:p-8 lg:p-[60px] justify-center items-center gap-8 md:gap-[60px] self-stretch relative">
        <div className="flex w-full z-0 max-w-[1200px] flex-col lg:flex-row h-auto lg:h-[600px] gap-6 md:gap-8 lg:gap-[55px] relative sm:items-center sm:justify-center sm:w-full md:items-center md:justify-center md:w-full lg:items-start lg:justify-start lg:w-auto">
          <div className="rounded-3xl bg-[#E9F1F4] w-full lg:w-[572.727px] flex flex-col items-center z-0 aspect-square lg:aspect-auto">
            <Image
              src="/assets/grouphoto.svg"
              alt="picture"
              width={572.727}
              height={572.727}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex w-full lg:w-[572.727px] h-auto lg:h-[600px] lg:absolute lg:right-[10px] justify-between items-end flex-shrink-0 px-4 lg:px-0">
            <div className="flex flex-col items-start gap-1 flex-1">
              <h1 className="text-[#F14E38] text-left font-['FK Screamer Legacy Trial'] text-2xl md:text-4xl lg:text-[54px] font-extrabold leading-6 md:leading-10 lg:leading-[54px] tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3px] leading-trim-both text-edge-cap">
                INSTANT MEMORIES
              </h1>
              <h2 className="self-stretch text-[#464646] font-inter text-sm md:text-lg lg:text-xl font-medium leading-5 md:leading-6 lg:leading-7 tracking-[-0.1px] mt-2 lg:mt-0">
                Replace expensive photographers and disposable cameras with a modern, digital solution. Guests capture photos and videos via a QR code, and everything is collected in a beautiful event gallery.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="flex px-4 md:px-8 lg:px-[60px] flex-col justify-center items-center gap-[10px] self-stretch">
        <div className="flex w-full max-w-[1200px] p-6 md:p-8 lg:p-[60px] justify-between items-center rounded-[24px] bg-[#36A2DB] relative">
          <Image
            src="/assets/noise.svg"
            alt="picture"
            fill
            className="w-full h-full object-cover mix-blend-soft-light absolute left-[-45px] bottom-[-356px] z-0"
          />
          <h1 className="text-white font-['Abominable Regular'] text-xl sm:text-sm md:text-3xl lg:text-[44px] font-extrabold leading-normal tracking-[-3px] sm:tracking-[0px] z-10">
            HOW WE MADE THIS A REALITY
          </h1>
          <button
            className="flex w-auto sm:w-auto lg:w-[151px] h-[48px] px-4 md:px-6 py-3 justify-center items-center gap-[10px] rounded-[99px] bg-white hover:bg-[#F5F5F5] z-10 transition-all duration-300 transform hover:scale-105"
          >
            <p className="text-slate-900 text-center font-inter text-sm md:text-base text-nowrap font-semibold leading-none">
              ABOUT US →
            </p>
          </button>
        </div>
      </div>

      <div className="flex w-full max-w-[1440px] mx-auto py-12 md:py-16 lg:py-[100px] px-4 md:px-8 lg:px-[120px] justify-end items-center gap-8 md:gap-16 lg:gap-[100px] self-stretch">
        <div className="flex w-full max-w-[1200px] flex-col lg:flex-row h-auto lg:h-[656px] items-center gap-8 md:gap-16 lg:gap-[100px] flex-1 self-stretch">
          <Image
            src="/assets/mangraphics.svg"
            alt="picture"
            width={438}
            height={656}
            className="w-full max-w-[300px] md:max-w-[350px] lg:w-[438px] h-auto aspect-[219/328] rounded-[26px] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
          <div className="flex items-center gap-6 flex-1 self-stretch">
            <div className="flex flex-col items-start gap-6 lg:gap-10 flex-1 flex-shrink-0 md:items-center md:justify-center lg:items-start md:w-full">
              <h1 className="self-stretch font-stretch-extra-expanded text-[#FF9F1C] font-['FK Screamer Legacy Trial'] sm:text-center md:text-center lg:text-left text-xl md:text-3xl lg:text-[40px] font-extrabold leading-8 md:leading-12 lg:leading-[60px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-2px] leading-trim-both text-edge-cap uppercase">
                Simple and secure event setup, step by step
              </h1>
              <div className="flex flex-col items-start gap-5 lg:gap-7 self-stretch md:items-center md:justify-center md:w-full sm:items-center sm:justify-center sm:w-full">
                <div className="flex items-start gap-3 self-stretch md:pl-50 lg:pl-0 ">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#32C9E4] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1">
                    <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                      1. Set Up Your Event
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                      Create your account, add event details, and customize privacy settings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 self-stretch md:pl-50 lg:pl-0">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#FF9F1C] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1">
                    <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                      2. Share with Guests
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                      Generate a QR code and easily send or display it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 self-stretch md:pl-50 lg:pl-0">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#F14E38] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1 flex-shrink-0">
                    <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                      3. Collect & Manage Photos
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                      Guests upload photos to your gallery — ready to view, manage, and share!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center sm:items-center sm:justify-center lg:items-start lg:justify-start sm:w-full gap-4 lg:gap-10 mt-6 lg:mt-[40px]">
                <button
                  className="group flex font-inter justify-center items-center gap-2.5 px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-[#E68C09] bg-[#FF9F1C] text-white transition-all duration-300 transform hover:scale-105 w-full md:w-auto text-sm md:text-base"
                >
                  Start Sharing Memories →
                </button>
                <h1 className="text-black font-inter text-lg md:text-xl px-4 md:px-6 py-3 md:py-4 rounded-xl font-medium leading-6 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 w-full md:w-auto text-center">
                  How it works
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex w-full max-w-[1440px] mx-auto py-12 md:py-16 lg:py-[100px] px-4 md:px-8 lg:px-[120px] justify-end items-center gap-8 md:gap-16 lg:gap-[100px] self-stretch">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-16 lg:gap-[100px] flex-1 self-stretch">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-[100px] flex-1 self-stretch">
            <div className="flex flex-col items-start gap-6 lg:gap-10 flex-1">
              <h1 className="self-stretch text-[#F14E38] font-['FK Screamer Legacy Trial'] sm:text-center md:text-center lg:text-left text-xl md:text-3xl lg:text-[40px] font-extrabold leading-8 md:leading-12 lg:leading-[60px] tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3px] leading-trim-both text-edge-cap uppercase">
                FOR GUESTS, Simple and fun photo sharing
              </h1>
              <div className="flex flex-col items-start gap-6 lg:gap-10 self-stretch">
                <div className="flex flex-col items-start gap-5 lg:gap-7 self-stretch">
                  <div className="flex items-start gap-1 self-stretch md:pl-50 lg:pl-0">
                    <div className="flex h-[28px] items-center gap-[10px]">
                      <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#32C9E4] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                        1. Scan the QR Code
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                        Use smartphone&apos;s camera app to quickly scan the event QR code.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 self-stretch md:pl-50 lg:pl-0">
                    <div className="flex h-[28px] items-center gap-[10px]">
                      <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#FF9F1C] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                        2. Capture Special Moments
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                        Snap photos and record videos — no app downloads needed!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 self-stretch md:pl-50 lg:pl-0">
                    <div className="flex h-[28px] items-center gap-[10px]">
                      <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#F14E38] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.12px]">
                        3. View the Gallery
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-sm md:text-base font-medium leading-6 md:leading-7 lg:leading-[28px] tracking-[-0.08px]">
                        Want to see what everyone&apos;s sharing? Check out the live event gallery!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 md:items-center md:justify-center lg:items-start lg:justify-start md:w-full sm:items-center sm:justify-center sm:w-full">
                  <button className="flex px-4 md:px-6 py-3 md:py-4 justify-center text-white font-inter text-lg md:text-xl font-medium leading-6 items-center gap-2.5 rounded-xl bg-[#F14E38] hover:bg-[#E03E28] transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                    Start Sharing Memories →
                  </button>
                  <p className="text-black font-inter text-lg md:text-xl font-medium leading-6 px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 w-full md:w-auto text-center">
                    See the fun stuff
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[300px] md:max-w-[350px] lg:w-[414px] h-auto aspect-[2/3] rounded-[24px] bg-[url('/assets/image 6.svg')] bg-lightgray bg-center bg-cover bg-no-repeat">
            <Image
              src="/assets/groupphotographics.svg"
              alt="picture"
              width={414}
              height={621}
              className="w-full h-auto aspect-[2/3] rounded-[24px] bg-[url('/assets/image_7.svg')] bg-lightgray bg-center bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[1440px] mx-auto flex-col items-center gap-6 md:gap-10 self-stretch py-10 pb-16 md:pb-32 lg:pb-[297px] px-4 md:px-8">
        <h1 className="self-stretch text-[#1D9FE6] pb-6 md:pb-10 text-center font-['FK Screamer Bold'] text-2xl md:text-4xl lg:text-[54px] font-extrabold leading-8 md:leading-12 lg:leading-[70px] tracking-[-1px] font-bold uppercase leading-none">
          UGCSHARE NOW!
        </h1>
        <Image
          src="/assets/bigpolaroidcam.svg"
          alt="picture"
          width={814}
          height={712}
          className="w-full max-w-[400px] md:max-w-[600px] lg:w-[814px] h-auto z-10"
        />
        <div className="flex w-full -mt-4 md:-mt-8 lg:-mt-[70px] z-0 flex-col items-center gap-6 md:gap-[40px]">
          <div className="flex px-4 md:px-8 lg:px-[60px] flex-col justify-center items-center gap-[10px] self-stretch">
            <div className="flex w-full max-w-[1200px] p-6 md:p-8 lg:p-[60px] justify-between items-center rounded-[24px] bg-[#36A2DB] relative overflow-hidden">
              <Image
                src="/assets/noise.svg"
                alt="picture"
                fill
                className="w-full h-full object-cover mix-blend-soft-light absolute left-[-45px] bottom-[-356px] z-10"
              />
              <p className="text-white font-['FK Screamer Bold'] text-xl sm:text-sm md:text-3xl lg:text-[45px] font-extrabold uppercase tracking-[-1px] md:tracking-[-2px] lg:tracking-[-3px] leading-none sm:tracking-[0px]">
                CREATE AND SHARE MEMORIES
              </p>
              <button className="flex w-auto text-nowrap lg:w-[151px] h-[48px] text-[#0F172A] font-inter text-sm md:text-base font-medium leading-6 px-4 md:px-6 py-3 justify-center hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 items-center gap-[10px] rounded-[99px] bg-white z-10">
                Get Started
              </button>
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
    </div>
  );
}
