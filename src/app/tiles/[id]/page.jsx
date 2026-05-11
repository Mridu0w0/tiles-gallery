import React from "react";
import tiles from "../../../../public/data.json";

import Link from "next/link";
import Image from "next/image";

const Details = async ({ params }) => {
  const { id } = await params;
  const product = tiles.find((tile) => tile.id === id);

  // Guard clause to prevent crashing if ID is not found
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center font-serif">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="py-4">Tile not found.</p>
          <Link href="/" className="btn btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6 text-md breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={"/tiles"}>All Tiles</Link>
            </li>
            <li className="text-gray-500">{product.id}</li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 bg-base-100 rounded-3xl overflow-hidden shadow-2xl">
          {/* LEFT SIDE: Large High-Res Preview */}
          <div className="lg:w-1/2 flex items-center justify-center bg-gray-200">
            <Image
              width={800} // Increase width for higher resolution
              height={800} // Increase height to allow for vertical images
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT SIDE: Text & Details */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            {/* Title & Creator */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                Crafted by TileMaster Studio
              </p>
            </div>

            <hr className="border-base-300 mb-6" />

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-2">Style Description</h3>
              <p className="text-base-content/80 leading-relaxed">
                {product.description}. This premium {product.material} finish is
                designed for both durability and aesthetic appeal, measuring{" "}
                {product.dimensions}.
              </p>
            </div>

            {/* Tags / Badges */}
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-3 uppercase opacity-50">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline p-4">
                  {product.category}
                </div>
                <div className="badge badge-outline p-4">
                  {product.material}
                </div>
                <div className="badge badge-outline p-4">Premium</div>
                <div className="badge badge-outline p-4">Interior</div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="mt-auto flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-base-300">
              <div>
                <span className="text-sm opacity-60 block">Price per unit</span>
                <span className="text-3xl font-bold">${product.price}</span>
              </div>
              <button
                className={`btn btn-primary btn-lg flex-1 w-full ${!product.inStock && "btn-disabled"}`}
              >
                {product.inStock ? "Add to Project" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
