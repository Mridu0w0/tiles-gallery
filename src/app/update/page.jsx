"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const UpdateProfile = () => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    alert("Profile Updated!");
    window.location.href = "/profile";
  };
  return (
    <div>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mb-6">
              Update Profile
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="form-control">
                <label className="label">Name</label>
                <br />
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">Photo URL</label>
                <br />
                <input
                  name="image"
                  type="text"
                  placeholder="https://image-link.com"
                  className="input input-bordered"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">
                Update Information
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
