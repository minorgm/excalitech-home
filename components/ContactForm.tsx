"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or service
  }

  if (submitted) {
    return (
      <div className="bg-[#88d4c3] text-[#0f1717] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
        <p>We received your request and will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[#e5e8eb] shadow-lg flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#0f1717] mb-4 text-center">Request Your Project</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3]"
      />
      <input
        type="text"
        name="company"
        placeholder="Company (optional)"
        value={form.company}
        onChange={handleChange}
        className="border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3]"
      />
      <textarea
        name="message"
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3] resize-none"
      />
      <Button type="submit" className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3 w-full">
        Submit Request
      </Button>
    </form>
  );
}
