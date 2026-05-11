"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tiles from "@/../public/data.json";

const FeatureSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false); // 1. Add loading state

  const displayedTiles = tiles.slice(0, visibleCount);

  const showMoreItems = () => {
    setIsLoading(true); // Start loading

    // Simulate a small delay for a better "loading" feel
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4);
      setIsLoading(false); // Stop loading
    }, 600);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto font-serif">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black uppercase italic tracking-tight">
            Featured Tiles
          </h2>
          <div className="h-1 w-20 bg-primary mt-2"></div>
        </div>
        <Link href="/tiles" className="btn btn-ghost btn-sm">
          See All Collections →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedTiles.map((tile) => (
          <div
            key={tile.id}
            className="card bg-base-100 shadow-sm border border-base-200 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <figure className="h-56">
              <Image
                width={400}
                height={300}
                src={tile.image}
                alt={tile.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-base leading-tight">
                  {tile.title}
                </h2>
                <span className="font-bold text-primary">${tile.price}</span>
              </div>
              <p className="text-xs opacity-60 line-clamp-2 my-2">
                {tile.description}
              </p>
              <div className="card-actions mt-4">
                <Link
                  href={`/tiles/${tile.id}`}
                  className="btn btn-outline btn-primary btn-sm btn-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. UPDATED BUTTON WITH LOADER */}
      {visibleCount < tiles.length && (
        <div className="flex justify-center mt-16">
          <button
            onClick={showMoreItems}
            disabled={isLoading}
            className={`btn btn-primary btn-wide rounded-full font-bold shadow-lg ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Loading...
              </>
            ) : (
              "See More Tiles"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
