"use client";

import React, { useState, useEffect } from "react";
import tilesData from "../../../public/data.json";
import Link from "next/link";
import Image from "next/image";

const AllTiles = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // 1. Loading State UI
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm font-bold uppercase tracking-widest opacity-50">
          Loading Collections...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-10 font-serif">
        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tilesData.map((tile) => (
            <div
              key={tile.id}
              className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <figure className="px-4 pt-4">
                <Image
                  width={400}
                  height={300}
                  src={tile.image}
                  alt={tile.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>

              {/* Content Section */}
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-lg font-bold">{tile.title}</h2>
                  <div
                    className={`badge ${
                      tile.inStock ? "badge-success" : "badge-ghost"
                    } badge-sm font-bold text-[10px] uppercase`}
                  >
                    {tile.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                <p className="text-xs text-primary font-bold italic">
                  {tile.category}
                </p>
                <p className="text-sm line-clamp-2 opacity-70">
                  {tile.description}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase opacity-40">
                    Dimensions:
                  </span>
                  <span className="text-xs font-semibold">
                    {tile.dimensions}
                  </span>
                </div>

                {/* Action Section */}
                <div className="card-actions justify-between items-center mt-6">
                  <span className="text-xl font-black text-primary italic">
                    {tile.currency} {tile.price}
                  </span>

                  <Link href={`/tiles/${tile.id}`}>
                    <button
                      disabled={!tile.inStock}
                      className="btn btn-primary btn-sm rounded-lg shadow-md"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTiles;
