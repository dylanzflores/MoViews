"use client";

import React, { useEffect } from "react";
import { useTestimonials } from "../providers/TestimonialsProvider";
import Link from "next/link";

export default function ViewPage() {
  const { testimonials } = useTestimonials();

  useEffect(() => {
    console.log("view testimonials", testimonials);
  }, [testimonials]);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">View Testimonials</h1>
      <Link href="/create">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
          Return to Post MoViews
        </button>
      </Link>

      {testimonials.length === 0 ? (
        <p>No testimonials yet.</p>
      ) : (
        <div className="grid gap-4">
          {testimonials.map(t => (
            <div key={t.id} className="border p-4 rounded shadow-sm bg-white">
              <p className="bg-blue-400 font-semibold text-black border border-blue-700 rounded shadow-sm">{t.name}</p>
              <p className="text-black">{t.review}</p>
              <p className="text-sm text-black">{new Date(t.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
