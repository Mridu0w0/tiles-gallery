"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import tiles from "@/../public/data.json";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerFavorites = () => {
  // We'll use a specific set of tiles for this "Favorites" slider
  const favoriteTiles = tiles.slice(0, 6);

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            Customer Favorites
          </h2>
          <p className="opacity-60 mt-2">
            The most loved designs of the season
          </p>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 px-4"
        >
          {favoriteTiles.map((tile) => (
            <SwiperSlide key={tile.id}>
              <div className="card bg-base-100 shadow-lg h-full border border-base-300">
                <figure className="relative h-64">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="badge badge-primary font-bold">
                      Top Seller
                    </div>
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{tile.title}</h3>
                  <p className="text-sm opacity-70 italic">{tile.category}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-black text-primary">
                      ${tile.price}
                    </span>
                    <Link
                      href={`/tiles/${tile.id}`}
                      className="btn btn-sm btn-ghost gap-2"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles to match DaisyUI theme with Swiper */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--p)) !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--p)) !important;
        }
      `}</style>
    </section>
  );
};

export default CustomerFavorites;
