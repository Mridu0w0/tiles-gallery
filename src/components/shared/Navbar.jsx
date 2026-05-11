"use client"; // Required to use usePathname

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  // Helper function to check if link is active
  const isActive = (path) => pathname === path;

  const navLinks = (
    <>
      <li>
        <Link href="/" className={isActive("/") ? "active font-bold" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/tiles"
          className={isActive("/tiles") ? "active font-bold" : ""}
        >
          All Tiles
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={isActive("/about") ? "active font-bold" : ""}
        >
          About
        </Link>
      </li>
      {session && (
        <li>
          <Link
            href="/profile"
            className={isActive("/profile") ? "active font-bold" : ""}
          >
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
      {/* Left: Website Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold uppercase tracking-wider">
          Tile<span className="text-primary">Gallery</span>
        </Link>
      </div>

      {/* Centre: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      {/* Right: Auth State */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : !session ? (
          <div className="flex gap-2">
            <Link
              href="/register"
              className={`btn btn-sm md:btn-md ${isActive("/register") ? "btn-primary" : "btn-outline btn-primary"}`}
            >
              Register
            </Link>
            <Link
              href="/login"
              className={`btn btn-sm md:btn-md ${isActive("/login") ? "btn-primary" : "btn-outline btn-primary"}`}
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className={`avatar placeholder online ${isActive("/profile") ? "ring ring-primary ring-offset-2 rounded-full" : ""}`}
            >
              <div className="bg-neutral text-neutral-content rounded-full w-8 md:w-10">
                {/* <span>{session.user?.name?.charAt(0) || "U"}</span> */}
                <Image src={user?.image} alt="Profile" width={40} height={40} />
              </div>
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
                window.location.href = "/";
              }}
              className="btn btn-outline btn-error btn-sm md:btn-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
