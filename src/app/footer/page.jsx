import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content font-serif">
      {/* Main Footer Content */}
      <div className="footer p-10 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1: Brand & Bio */}
        <nav>
          <header className="footer-title text-primary opacity-100 uppercase tracking-widest">
            TileGallery
          </header>
          <p className="max-w-xs opacity-70 leading-relaxed">
            Premium surfaces for modern living. We curate the finest ceramic,
            marble, and stone from across the globe to transform your spaces.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Social Icons Placeholder */}
            <button className="btn btn-ghost btn-circle btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Column 2: Quick Links */}
        <nav>
          <header className="footer-title">Shop</header>
          <Link href="/tiles" className="link link-hover">
            All Tiles
          </Link>
          <Link href="/tiles?cat=ceramic" className="link link-hover">
            Ceramic Collection
          </Link>
          <Link href="/tiles?cat=marble" className="link link-hover">
            Luxury Marble
          </Link>
          <Link href="/tiles?cat=outdoor" className="link link-hover">
            Outdoor Stone
          </Link>
        </nav>

        {/* Column 3: Company */}
        <nav>
          <header className="footer-title">Company</header>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/faq" className="link link-hover">
            Design FAQ
          </Link>
          <Link href="/careers" className="link link-hover">
            Careers
          </Link>
        </nav>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-base-content/10">
        <div className="footer px-10 py-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 text-sm">
          <p>© 2026 TileGallery Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link link-hover">
              Terms of Service
            </Link>
            <Link href="/shipping" className="link link-hover">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
