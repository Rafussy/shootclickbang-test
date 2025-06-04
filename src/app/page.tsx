"use client";

import Image from "next/image";
import { Camera, Scan, Share2, Images, ArrowRight, Star, Users, Download, CheckCircle, QrCode, Smartphone, Heart, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/assets/snapclickbanglogo.svg"
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
                      className="flex px-6 py-2 justify-center items-center gap-2.5 rounded-xl bg-[#F14E38] hover:bg-[#E03E28] text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Start your free trial →
                    </button>
                    <button
                      className="flex px-6 py-2 justify-center items-center gap-2.5 rounded-xl bg-[#36A2DB] text-white font-semibold hover:bg-[#2E9ED4] transition-all duration-300 transform hover:scale-105"
                    >
                      Watch Demo Reel
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[396px] h-[73.4177px] flex flex-col gap-3 items-end">
                <div className="text-black font-inter text-base font-semibold leading-7 tracking-[-0.08px]">
                  They&apos;ve captured the fun!
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

      <section className="w-[1440px] mx-auto h-[720px] p-[60px] justify-center items-center gap-[60px] self-stretch relative">
        <div className="absolute w-full top-0 -translate-x-1/2 left-1/2 h-[400px] z-0 flex justify-center items-center ">
          <div className=" absolute top-5 z-10 w-[3781.928px] h-[68.751px] bg-gradient-to-b from-[#FF9F1C] to-[#FF9F1C] rotate-[4.677deg]"/>
        </div>
        <div className="w-[700.851px] absolute h-[410.492px] top-0 right-70 z-10 flex flex-row gap-[-100px]">
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
            <div className="flex flex-col items-start gap-1 flex-1">
              <h1 className="text-[#F14E38] text-left font-['FK Screamer Legacy Trial'] text-[54px] font-extrabold leading-[54px] tracking-[-3px] leading-trim-both text-edge-cap">
                INSTANT MEMORIES
              </h1>
              <h2 className="self-stretch text-[#464646] font-inter text-xl font-medium leading-7 tracking-[-0.1px]">
                Replace expensive photographers and disposable cameras with a modern, digital solution. Guests capture photos and videos via a QR code, and everything is collected in a beautiful event gallery.
              </h2>              
            </div>
          </div>
        </div>
      </section>

      <div className="flex px-[60px] flex-col justify-center items-center gap-[10px] self-stretch">
        <div className="flex w-[1200px] p-[60px] justify-between items-center rounded-[24px] bg-[#36A2DB] relative">
          <Image
            src="/assets/noise.svg"
            alt="picture"
            fill
            className="w-full h-full object-cover mix-blend-soft-light absolute left-[-45px] bottom-[-356px] z-0"
          />
          <h1 className="text-white font-['Abominable Regular'] text-[44px] font-extrabold leading-normal tracking-[-3px] z-10">
            HOW WE MADE THIS A REALITY
          </h1>
          <button 
            className="flex w-[151px] h-[48px] px-6 py-3 justify-center items-center gap-[10px] rounded-[99px] bg-white hover:bg-[#F5F5F5] z-10 transition-all duration-300 transform hover:scale-105"
          >
            <p className="text-slate-900 text-center font-inter text-base text-nowrap font-semibold leading-none">
              ABOUT US →
            </p>
          </button>

        </div>
      </div>

      <div className="flex w-[1440px] mx-auto py-[100px] px-[120px] justify-end items-center gap-[100px] self-stretch">
        <div className="flex w-[1200px] h-[656px] items-center gap-[100px] flex-1 self-stretch">
          <Image
            src="/assets/image 6.svg"
            alt="picture"
            width={438}
            height={656}
            className="w-[438px] h-[656px] aspect-[219/328] rounded-[26px] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
          <div className="flex items-center gap-6 flex-1 self-stretch">
            <div className="flex flex-col items-start gap-10 flex-1 flex-shrink-0">
              <h1 className="self-stretch font-stretch-extra-expanded text-[#FF9F1C] font-['FK Screamer Legacy Trial'] text-[40px] font-extrabold leading-[60px] tracking-[-2px] leading-trim-both text-edge-cap uppercase">
              Simple and secure event setup, step by step
              </h1>
              <div className="flex flex-col items-start gap-7 self-stretch">
                <div className="flex items-start gap-3 self-stretch">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#32C9E4] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1">
                    <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                    1. Set Up Your Event
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                    Create your account, add event details, and customize privacy settings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 self-stretch">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#FF9F1C] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1">
                    <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                    2. Share with Guests
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                    Generate a QR code and easily send or display it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 self-stretch">
                  <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#F14E38] rotate-45 aspect-square"></div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-1 flex-1 flex-shrink-0">
                    <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                    3. Collect & Manage Photos
                    </p>
                    <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                    Guests upload photos to your gallery — ready to view, manage, and share!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-10  mt-[40px]">
                <button 
                  className="group flex font-inter justify-center items-center gap-2.5 px-6 py-4 rounded-xl hover:bg-[#E68C09] bg-[#FF9F1C] text-white transition-all duration-300 transform hover:scale-105 "
                >
                  Start Sharing Memories →
                </button>
                <h1 className="text-black font-inter text-xl px-6 py-4 rounded-xl font-medium leading-6 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
                How it works
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex  w-[1440px] mx-auto py-[100px] px-[120px] justify-end items-center gap-[100px] self-stretch">
        <div className="flex items-center gap-[100px] flex-1 self-stretch">
          <div className="flex items-center gap-[100px] flex-1 self-stretch">
            <div className="flex flex-col items-start gap-10 flex-1">
              <h1 className="self-stretch text-[#F14E38] font-['FK Screamer Legacy Trial'] text-[40px] font-extrabold leading-[60px] tracking-[-3px] leading-trim-both text-edge-cap uppercase">
              FOR GUESTS, Simple and fun photo sharing
              </h1>
              <div className="flex flex-col items-start gap-10 self-stretch">
                <div className="flex flex-col items-start gap-7 self-stretch">
                  <div className="flex items-start gap-1 self-stretch">
                    <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#32C9E4] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                      1. Scan the QR Code
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                      Use smartphone&apos;s camera app to quickly scan the event QR code.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 self-stretch">
                    <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#FF9F1C] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                      2. Capture Special Moments
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                      Snap photos and record videos — no app downloads needed!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-1 self-stretch">
                    <div className="flex h-[28px] items-center gap-[10px]">
                    <div className="w-[10px] h-[10px] flex-shrink-0 bg-[#F14E38] rotate-45 aspect-square"></div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 flex-1">
                      <p className="text-[#2D2D2D] font-inter text-2xl font-bold leading-[28px] tracking-[-0.12px]">
                      3. View the Gallery
                      </p>
                      <p className="self-stretch text-[#2D2D2D] font-inter text-base font-medium leading-[28px] tracking-[-0.08px]">
                      Want to see what everyone&apos;s sharing? Check out the live event gallery!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <button className="flex px-6 py-4 justify-center text-white font-inter text-xl font-medium leading-6 items-center gap-2.5 rounded-xl bg-[#F14E38] hover:bg-[#E03E28] transition-all duration-300 transform hover:scale-105">
                      Start Sharing Memories →  
                  </button>
                  <p className="text-black font-inter text-xl font-medium leading-6 px-6 py-4 rounded-xl hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
                  See the fun stuff
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[414px] h-[621px] aspect-[2/3] rounded-[24px] bg-[url('/assets/image 6.svg')] bg-lightgray bg-center bg-cover bg-no-repeat">
            <Image
              src="/assets/image 7.svg"
              alt="picture"
              width={414}
              height={621}
              className="w-[414px] h-[621px] aspect-[2/3] rounded-[24px] bg-[url('/assets/image_7.svg')] bg-lightgray bg-center bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </section>
      
      <section className="flex w-[1440px] mx-auto flex-col items-center gap-10 self-stretch py-10 pb-[297px]">
        <h1 className="self-stretch text-[#1D9FE6] pb-10 text-center font-['FK Screamer Bold'] text-[54px] font-extrabold leading-[70px] tracking-[-1px] font-bold uppercase leading-none">
        UGCSHARE NOW!
        </h1>
        <Image
          src="/assets/Group 345.svg"
          alt="picture"
          width={814}
          height={712}
          className="w-[814px] h-[712px] z-10"
        />
        <div className="flex w-[1440px] -mt-[70px] z-0 flex-col items-center gap-[40px]">
          <div className="flex px-[60px] flex-col justify-center items-center gap-[10px] self-stretch">
            <div className="flex w-[1200px] p-[60px] justify-between items-center rounded-[24px] bg-[#36A2DB] relative overflow-hidden">
              <Image
                src="/assets/noise.svg"
                alt="picture"
                fill
                className="w-full h-full object-cover mix-blend-soft-light absolute left-[-45px] bottom-[-356px] z-10"
              />
              <p className="text-white font-['FK Screamer Bold'] text-[45px] font-extrabold uppercase tracking-[-3px] leading-none">
                CREATE AND SHARE MEMORIES
              </p>
              <button className="flex w-[151px] h-[48px] text-[#0F172A] font-inter text-base font-medium leading-6 px-6 py-3 justify-center hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 items-center gap-[10px] rounded-[99px] bg-white z-10">
                Get Started
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
    </div >
  );
}
