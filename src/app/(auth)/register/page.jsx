"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "@react-spring/web";
import { toast, Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cardSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95) translateY(20px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0px)" },
    config: { tension: 300, friction: 20 },
  });

  // Main Registration Handler
  const onSubmit = async (formData) => {
    setLoading(true);

    // 1. Destructure the data from react-hook-form
    const { name, email, password, photoUrl } = formData;

    try {
      // 2. Use BetterAuth with the destructured variables
      const { data, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image:
          photoUrl ||
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        callbackURL: "/login",
      });

      if (error) {
        toast.error(error.message || "Something went wrong");
        return;
      }

      if (data) {
        toast.success("Account created! Redirecting...");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Internal Server Error. Check your console.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
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
              User <span className="text-primary">Registration</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full focus:input-primary"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full focus:input-primary"
              {...register("email", { required: true })}
            />
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered w-full focus:input-primary"
              {...register("photoUrl")}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full focus:input-primary"
              {...register("password", { required: true, minLength: 6 })}
            />

            <button
              type="submit"
              className={`btn btn-primary btn-block ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="divider text-xs uppercase opacity-40">Or</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-block"
          >
            Google Login
          </button>

          <p className="mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default RegisterPage;
