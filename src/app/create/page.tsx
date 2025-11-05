"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTestimonials, Testimonial } from "../providers/TestimonialsProvider";

export default function CreatePage() {
  const { testimonials, setTestimonials } = useTestimonials();
  const [inputs, setInputs] = useState<Testimonial[]>([
    { id: Date.now(), name: "", review: "", createdAt: new Date().toISOString() },
  ]);

  useEffect(() => {
    console.log("CreatePage sees context testimonials:", testimonials);
  }, [testimonials]);

  const handleAddField = () => {
    setInputs([...inputs, { id: Date.now(), name: "", review: "", createdAt: new Date().toISOString() }]);
  };

  const handleRemoveField = (id: number) => {
    setInputs(inputs.filter(t => t.id !== id));
  };

  const handleChange = (id: number, field: keyof Testimonial, value: string) => {
    setInputs(prev => prev.map(t => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const handleSave = () => {
    const filled = inputs.filter(t => t.name && t.review);
    console.log("filled to add:", filled);
    if (filled.length === 0) {
      alert("Please fill out at least one testimonial!");
      return;
    }
    setTestimonials(prev => [...prev, ...filled]);
    setInputs([{ id: Date.now(), name: "", review: "", createdAt: new Date().toISOString() }]);
    alert("Testimonials saved!");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Testimonials</h1>

      <div className="space-y-6">
        {inputs.map((t, index) => (
          <div key={t.id} className="border p-4 rounded bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="bg-blue-400 font-semibold text-black border border-blue-700 rounded shadow-sm">Testimonial {index + 1}</h2>
              {inputs.length > 1 && (
                <button onClick={() => handleRemoveField(t.id)} className="text-red-600 hover:text-red-800">
                  ✕ Remove
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Name"
              value={t.name}
              onChange={e => handleChange(t.id, "name", e.target.value)}
              className="border p-2 rounded w-full mb-2 text-black placeholder-black"
            />
            <textarea
              placeholder="Review"
              value={t.review}
              onChange={e => handleChange(t.id, "review", e.target.value)}
              className="border p-2 rounded w-full text-black placeholder-black"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button onClick={handleAddField} className="bg-green-600 text-black px-4 py-2 rounded">
          + Add Another
        </button>
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Testimonials
        </button>
        <Link href="/view">
          <button className="bg-gray-600 text-white px-4 py-2 rounded">
            View Testimonials
          </button>
        </Link>
      </div>
    </div>
  );
}
