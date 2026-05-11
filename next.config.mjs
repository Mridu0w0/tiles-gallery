/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://i.ibb.co.com/FLxZJVg1/24-Chittagong-Tourist-Spots-Best-Places-to-Visit-and-Things-to-Do.jpg
  // https://simpolo-web.s3.ap-south-1.amazonaws.com/uploads/media/blog/Geometric-Tiles-for-Modern-Walkways.jpeg
  //https://hips.hearstapps.com/hmg-prod/images/montana-labelle-1-642ed2bdb0e8a.jpg?crop=1.00xw:0.803xh;0,0.0295xh&resize=1200:
  //https://media.designcafe.com/wp-content/uploads/2020/01/21003839/floor-tiles-designs-for-living-room.jpg
  //https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original
  // https://lh3.googleusercontent.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "simpolo-web.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.designcafe.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
