import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold uppercase tracking-tighter">
              Redefining <span className="text-primary">Surfaces</span>
            </h1>
            <p className="py-6 text-lg text-base-content/70">
              From hand-glazed ceramics to Italian Carrara marble, we curate the
              world&apos;s finest surfaces to help you build spaces that tell a
              story.
            </p>
            <Link href="/tiles" className="btn btn-primary">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-base-content/80 mb-4 text-lg leading-relaxed">
              Founded in 2024, TileGallery began with a simple observation:
              finding the perfect tile shouldn&apos;t be a chore. We’ve combined
              a passion for interior design with cutting-edge digital tools to
              bring a boutique showroom experience directly to your screen.
            </p>
            <p className="text-base-content/80 text-lg leading-relaxed">
              We believe that the right texture, color, and material can
              transform a house into a home. That’s why we partner directly with
              sustainable quarries and artisanal kilns globally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm font-semibold uppercase opacity-60">
                Unique Styles
              </div>
            </div>
            <div className="bg-base-200 p-8 rounded-2xl text-center text-secondary">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-sm font-semibold uppercase opacity-60">
                Countries
              </div>
            </div>
            <div className="bg-base-200 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-sm font-semibold uppercase opacity-60">
                Expert Support
              </div>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-center text-primary-content">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-semibold uppercase opacity-80">
                Sustainable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-neutral text-neutral-content py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Why Choose TileGallery?</h2>
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

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your space?
        </h2>
        <p className="mb-8 opacity-70">
          Join over 10,000 homeowners and architects who trust TileGallery.
        </p>
        <Link href="/register" className="btn btn-primary btn-lg px-12">
          Join Us Today
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
