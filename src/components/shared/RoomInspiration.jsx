"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css"; // Import the library

const RoomInspiration = () => {
  return (
    <section className="py-24 bg-base-100 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Animated with FadeInDown */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            Transform Your <span className="text-primary">Spaces</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 opacity-70">
            From minimalist bathrooms to grand living halls, see how our premium
            collections redefine modern living.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-200 md:h-150">
          {/* Main Large Feature - FadeInLeft */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl animate__animated animate__fadeInLeft">
            <Image
              fill
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Bathroom"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <span className="badge badge-primary mb-2">Spa Collection</span>
              <h3 className="text-2xl font-bold text-white">
                Minimalist Sanctuary
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Featuring our Arctic White Ceramic range.
              </p>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {/* Top Right - FadeInRight */}
            <div className="relative group overflow-hidden rounded-3xl animate__animated animate__fadeInRight">
              <Image
                fill
                src="https://hips.hearstapps.com/hmg-prod/images/montana-labelle-1-642ed2bdb0e8a.jpg?crop=1.00xw:0.803xh;0,0.0295xh&resize=1200:*"
                alt="Kitchen Backsplash"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
              <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                <h3 className="font-bold">Modern Kitchens</h3>
              </div>
            </div>

            {/* Bottom Right - FadeInUp */}
            <div className="relative group overflow-hidden rounded-3xl animate__animated animate__fadeInUp">
              <Image
                fill
                src="https://media.designcafe.com/wp-content/uploads/2020/01/21003839/floor-tiles-designs-for-living-room.jpg"
                alt="Living Area"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
              <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                <h3 className="font-bold">Outdoor & Patios</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default RoomInspiration;
