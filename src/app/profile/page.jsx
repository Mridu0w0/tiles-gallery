"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="max-w-md mx-auto bg-base-100 rounded-3xl my-10 shadow-xl overflow-hidden border border-base-300 font-serif">
      {/* Header/Banner Area */}
      <div className="h-24 bg-linear-to-r from-primary to-secondary opacity-80"></div>

      <div className="px-8 pb-8">
        {/* Profile Image - Positioned to overlap banner */}
        <div className="relative -mt-12 mb-4 flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-2xl ring ring-base-100 ring-offset-base-100 shadow-lg">
              <Image
                src={session?.user?.image}
                alt="Profile"
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>

        {/* User Identity */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black tracking-tight uppercase italic">
            {session?.user?.name || "Anonymous User"}
          </h2>
          <p className="text-xs font-bold uppercase tracking-widest text-primary opacity-80">
            Student & Developer
          </p>
        </div>

        {/* Bento-style Info Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3">
          <div className="flex flex-col p-4 bg-base-200/50 rounded-2xl border border-base-300 transition-hover hover:bg-base-200">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">
              Email Address
            </span>
            <span className="text-sm font-semibold truncate">
              {session?.user?.email}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col p-4 bg-base-200/50 rounded-2xl border border-base-300">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">
                Specialization
              </span>
              <span className="text-sm font-semibold">Front-End</span>
            </div>
            <div className="flex flex-col p-4 bg-base-200/50 rounded-2xl border border-base-300">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">
                Status
              </span>
              <span className="text-sm font-semibold text-success">Active</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <Link href="/update">
            <button className="btn btn-primary btn-block rounded-xl font-bold uppercase tracking-tight">
              Edit profile
            </button>
          </Link>
          <Link href="/login">
            <button
              onClick={() => {
                authClient.signOut();
                window.location.href = "/";
              }}
              className="btn btn-ghost btn-block btn-sm text-error/60 hover:text-error my-2 hover:bg-error/10 font-bold uppercase text-[10px] tracking-widest"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
