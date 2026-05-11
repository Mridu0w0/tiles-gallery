"use client";

import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const MissionStats = () => {
  // Define the spring animation for the boxes
  const fadeInStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.gentle,
    delay: 200, // Slight delay for entrance
  });

  // Individual hover springs for extra interactivity
  const [hoverProps, setHover] = useSpring(() => ({
    transform: "scale(1)",
    config: { mass: 1, tension: 300, friction: 10 },
  }));

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-base-content/80 mb-4 text-lg leading-relaxed">
            Founded in 2024, TileGallery began with a simple observation:
            finding the perfect tile shouldn&apos;t be a chore. We’ve combined a
            passion for interior design with cutting-edge digital tools to bring
            a boutique showroom experience directly to your screen.
          </p>
          <p className="text-base-content/80 text-lg leading-relaxed">
            We believe that the right texture, color, and material can transform
            a house into a home. That’s why we partner directly with sustainable
            quarries and artisanal kilns globally.
          </p>
        </div>

        {/* Stats Grid with React-Spring */}
        <animated.div style={fadeInStyles} className="grid grid-cols-2 gap-4">
          {/* Box 1 */}
          <div className="bg-primary/10 p-8 rounded-2xl text-center border border-primary/5 transition-colors hover:bg-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm font-semibold uppercase opacity-60">
              Unique Styles
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-base-200 p-8 rounded-2xl text-center text-secondary hover:shadow-inner transition-all">
            <div className="text-4xl font-bold mb-2">12+</div>
            <div className="text-sm font-semibold uppercase opacity-60">
              Countries
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-base-200 p-8 rounded-2xl text-center hover:shadow-inner transition-all">
            <div className="text-4xl font-bold mb-2">24h</div>
            <div className="text-sm font-semibold uppercase opacity-60">
              Expert Support
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-primary p-8 rounded-2xl text-center text-primary-content shadow-lg hover:brightness-110 transition-all">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm font-semibold uppercase opacity-80">
              Sustainable
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default MissionStats;
