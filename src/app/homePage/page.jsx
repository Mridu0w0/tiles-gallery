import React from "react";
import Link from "next/link";
import tiles from "@/../public/data.json";
import Image from "next/image";
import banner from "@/../public/banner.jpeg";
import FeatureSection from "@/components/shared/FeatureSection";
import CustomerFavorites from "@/components/shared/CustomerFavorites";
import RoomInspiration from "@/components/shared/RoomInspiration";
import MissionStats from "@/components/shared/MissionStats";

const HomePage = () => {
  // Logic to get the top 4 tiles for the "Featured" section
  const featuredTiles = tiles.slice(0, 4);

  return (
    <div className="min-h-screen bg-base-100">
      {/* --- 1. BANNER (HERO) --- */}
      <section className="hero min-h-[60vh] relative overflow-hidden">
        {/* The Image Tag */}
        <Image
          src="https://simpolo-web.s3.ap-south-1.amazonaws.com/uploads/media/blog/Geometric-Tiles-for-Modern-Walkways.jpeg"
          alt="Premium interior tiles background"
          fill // This makes the image fill the container
          priority // Good for LCP (above-the-fold images)
          className="object-cover" // Ensures it covers the area without stretching
        />

        {/* The Overlay */}
        <div className="hero-overlay bg-opacity-70  absolute inset-0 z-[1]"></div>

        {/* The Content */}
        <div className="hero-content text-center text-neutral-content relative z-[2]">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase tracking-tighter">
              Discover Your{" "}
              <span className="bg-linear-to-r from-gray-400 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Perfect Aesthetic
              </span>
            </h1>
            <p className="mb-8 opacity-80">
              Explore our hand-picked collection of premium tiles designed to
              elevate your living space.
            </p>
            <Link
              href="/tiles"
              className="btn btn-primary btn-lg rounded-full px-10"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </section>
      {/* --- 2. MARQUEE SECTION --- */}
      {/* This uses an inline tailwind animation to avoid needing a config file */}
      <div className="bg-primary py-4 overflow-hidden border-y border-primary-focus">
        <div className="whitespace-nowrap flex animate-[marquee_30s_linear_infinite]">
          <div className="flex shrink-0 items-center text-primary-content font-bold uppercase tracking-widest text-sm">
            {[1, 2, 3].map((i) => (
              <span key={i} className="flex items-center">
                <span className="mx-4">
                  New Arrivals: {tiles[0]?.title || "Premium Marble"}
                </span>
                <span className="mx-4">|</span>
                <span className="mx-4">
                  Weekly Feature: Modern Geometric Patterns
                </span>
                <span className="mx-4">|</span>
                <span className="mx-4">Join the Community</span>
                <span className="mx-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <MissionStats />
      <FeatureSection tiles={featuredTiles} />
      <RoomInspiration />

      {/* Duplicate for demonstration, can be removed or replaced with another section */}
      {/* --- 3. FEATURED TILES --- */}

      <CustomerFavorites />
      <section className=" text-neutral-content py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16 text-black">
            Why Choose TileGallery?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 text-base-content shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Curated Quality</h3>
                <p className="text-sm opacity-70">
                  Every piece in our catalog is hand-vetted by our design team
                  for durability and aesthetic consistency.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 text-base-content shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 text-secondary flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Fast Delivery</h3>
                <p className="text-sm opacity-70">
                  With logistics hubs across the country, we ensure your project
                  stays on schedule with rapid shipping.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 text-base-content shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Ethical Sourcing</h3>
                <p className="text-sm opacity-70">
                  We prioritize eco-friendly manufacturing and fair labor
                  practices in every quarry we partner with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Animation logic (Add to your global CSS if animate-[marquee] doesn't work) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
