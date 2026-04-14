"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/types/contact";
import { Loader2, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    setStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setStatus("success");
      setMessage("Message sent successfully. We'll be in touch soon.");
      reset();
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Send us a message</h2>
        <p className="text-gray-500 font-medium">
            We&apos;ll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Name *</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-400 text-gray-900`}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-400 text-gray-900`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Company *</label>
            <input
              {...register("company")}
              placeholder="Your Company Inc."
              className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.company ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-400 text-gray-900`}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Job Title *</label>
            <input
              {...register("jobTitle")}
              placeholder="e.g. CTO, Director"
              className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.jobTitle ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-400 text-gray-900`}
            />
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number *</label>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-400 text-gray-900`}
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="text-sm font-semibold text-gray-700 ml-1">Message *</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your specific needs..."
            className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.message ? "border-red-500" : "border-gray-200"} focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all resize-none placeholder:text-gray-400 text-gray-900`}
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="text-xs font-medium text-gray-400 ml-1">Add more detail to your message for quality feedback</label>
          <input
            {...register("details")}
            className="w-full px-4 py-2 rounded-xl bg-white border border-gray-100 focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all placeholder:text-gray-300 text-gray-900"
          />
        </div>

        <div className="mt-8">
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#c85a17] hover:bg-[#a64911] text-white rounded-[0.85rem] font-bold text-base shadow-md transition-all flex items-center justify-center space-x-2"
            >
                {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                    <>
                        <span>Send Message</span>
                        <ArrowRight className="h-4 w-4" />
                    </>
                )}
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
        </div>

        {status === "success" && (
          <div className="mt-6 flex items-center space-x-3 text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="h-5 w-5" />
            <p className="font-semibold text-sm">{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 animate-in fade-in slide-in-from-bottom-2">
            <AlertCircle className="h-5 w-5" />
            <p className="font-semibold text-sm">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
