"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/types/contact";
import { Loader2, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "./ui/Button";

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
    <div className="w-full bg-slate-50 rounded-[10px] p-4 md:p-6 border border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Send us a message</h2>
        <p className="text-slate-600 font-medium text-[14px]">
            We&apos;ll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-slate-700">Name *</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className={`w-full px-4 h-10 rounded-md bg-white border ${errors.name ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]`}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-slate-700">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className={`w-full px-4 h-10 rounded-md bg-white border ${errors.email ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-slate-700">Company *</label>
            <input
              {...register("company")}
              placeholder="Your Company Inc."
              className={`w-full px-4 h-10 rounded-md bg-white border ${errors.company ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]`}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-slate-700">Job Title *</label>
            <input
              {...register("jobTitle")}
              placeholder="e.g. CTO, Director"
              className={`w-full px-4 h-10 rounded-md bg-white border ${errors.jobTitle ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]`}
            />
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <label className="text-[13px] font-semibold text-slate-700">Phone Number *</label>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className={`w-full px-4 h-10 rounded-md bg-white border ${errors.phone ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]`}
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="text-[13px] font-semibold text-slate-700">Message *</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your specific needs..."
            className={`w-full px-4 py-3 rounded-md bg-white border ${errors.message ? "border-red-500" : "border-gray-200"} focus:border-slate-400 focus:outline-none transition-all resize-none placeholder:text-gray-400 text-slate-900 text-[14px]`}
          />
        </div>

        <div className="space-y-2 mt-6 mb-8">
          <label className="text-[13px] font-semibold text-slate-700">Additional Details</label>
          <input
            {...register("details")}
            className="w-full px-4 h-10 rounded-md bg-white border border-gray-200 focus:border-slate-400 focus:outline-none transition-all placeholder:text-gray-400 text-slate-900 text-[14px]"
          />
        </div>

        <div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
          <p className="text-center text-[11px] text-slate-400 mt-4 font-medium">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>

        {status === "success" && (
          <div className="mt-6 flex items-center space-x-3 text-emerald-700 bg-emerald-50 p-4 rounded-md border border-emerald-200">
            <CheckCircle2 className="h-4 w-4" />
            <p className="font-semibold text-[13px]">{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-md border border-red-200">
            <AlertCircle className="h-4 w-4" />
            <p className="font-semibold text-[13px]">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
