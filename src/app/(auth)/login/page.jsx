"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "@react-spring/web";
import { toast, Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Smooth entrance animation
  const cardSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0px)" },
    config: { tension: 300, friction: 20 },
  });

  // Main Login Handler (Email/Password)
  const onSubmit = async (formData) => {
    setLoading(true);

    // 1. Destructure email and password from react-hook-form data
    const { email, password } = formData;

    try {
      // 2. Use BetterAuth to sign in
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
        rememberMe: true, // Optional: keeps user logged in across sessions
        callbackURL: "/", // Redirects to Home after successful login
      });

      if (error) {
        toast.error(error.message || "Invalid email or password");
        return;
      }

      if (data) {
        toast.success("Welcome back!");
        router.push("/");
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // Navigates user to Home page
      });
      toast.success("Logging in with Google...");
    } catch (err) {
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10 text-center">
      <Toaster position="top-center" />

      <animated.div
        style={cardSpring}
        className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300"
      >
        <div className="card-body">
          <div className="mb-6">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">
              Tile<span className="text-primary">Gallery</span>
            </h2>
            <p className="text-sm opacity-60">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control w-full">
              <input
                type="email"
                placeholder="Email Address"
                className={`input input-bordered w-full focus:input-primary ${errors.email ? "input-error" : ""}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-xs text-error mt-1 text-left">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <input
                type="password"
                placeholder="Password"
                className={`input input-bordered w-full focus:input-primary ${errors.password ? "input-error" : ""}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-xs text-error mt-1 text-left">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn-primary btn-block ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
          </form>

          <div className="divider text-xs uppercase opacity-40">
            Or Use Social
          </div>

          {/* Social Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-block gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.904 3.192-1.928 4.256-1.288 1.288-3.32 2.688-7.392 2.688-6.416 0-11.536-5.2-11.536-11.616s5.12-11.616 11.536-11.616c3.48 0 6.024 1.368 7.912 3.176l2.232-2.232c-2.448-2.336-5.632-4.12-10.144-4.12-7.944 0-14.536 6.456-14.536 14.536s6.592 14.536 14.536 14.536c4.32 0 7.592-1.424 10.144-4.112 2.624-2.624 3.456-6.32 3.456-9.312 0-.896-.064-1.744-.2-2.56h-13.384z" />
            </svg>
            Google
          </button>

          <p className="mt-6 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default LoginPage;
