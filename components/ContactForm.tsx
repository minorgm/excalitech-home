"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { postFormInformation } from "@/utils/endpoints";

function validateField(name: string, value: string) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      break;
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)) return "Please enter a valid email address.";
      break;
    case "message":
      if (!value.trim()) return "Message is required.";
      break;
    default:
      return "";
  }
  return "";
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message)
    };
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    const response = await postFormInformation(form)

    if(response === true) {
      setSubmitted(true);
    }
    else {
      // Implement error option
      console.log("Internal Server Error.")
    }
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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[#e5e8eb] shadow-lg flex flex-col gap-6" noValidate>
      <h2 className="text-2xl font-bold text-[#0f1717] mb-4 text-center">Request Your Project</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          className={`border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3] w-full ${errors.name ? 'border-red-600' : ''}`}
        />
        {errors.name && <p id="name-error" className="text-red-600 text-sm mt-2">{errors.name}</p>}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          className={`border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3] w-full ${errors.email ? 'border-red-600' : ''}`}
        />
        {errors.email && <p id="email-error" className="text-red-600 text-sm mt-2">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          value={form.company}
          onChange={handleChange}
          className="border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3] w-full"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          rows={5}
          className={`border border-[#e5e8eb] rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#88d4c3] resize-none w-full ${errors.message ? 'border-red-600' : ''}`}
        />
        {errors.message && <p id="message-error" className="text-red-600 text-sm mt-2">{errors.message}</p>}
      </div>
      <Button type="submit" className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3 w-full">
        Submit Request
      </Button>
    </form>
  );
}
