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
    <div className="w-full bg-white rounded-[24px] p-2 md:p-10 border border-border-light shadow-xl">
      <div className="mb-4 border-b border-border-light/50 pb-6">
        <h2 className="text-2xl font-black text-brand-secondary tracking-tight mb-2 ">Send us a message</h2>
        <p className="text-text-secondary font-semibold text-[14px]">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 text-left">
            <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Name *</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className={`w-full px-5 h-12 rounded-[10px] bg-slate-50 border ${errors.name ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className={`w-full px-5 h-12 rounded-[10px] bg-slate-50 border ${errors.email ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-2 text-left">
            <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Company *</label>
            <input
              {...register("company")}
              placeholder="Your Company Inc."
              className={`w-full px-5 h-12 rounded-[10px] bg-slate-50 border ${errors.company ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Job Title *</label>
            <input
              {...register("jobTitle")}
              placeholder="e.g. CTO, Director"
              className={`w-full px-5 h-12 rounded-[10px] bg-slate-50 border ${errors.jobTitle ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
            />
          </div>
        </div>

        <div className="space-y-2 mt-6 text-left">
          <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Phone Number *</label>
          <input
            {...register("phone")}
            placeholder="+91 98765 43210"
            className={`w-full px-5 h-12 rounded-[10px] bg-slate-50 border ${errors.phone ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
          />
        </div>

        <div className="space-y-2 mt-6 text-left">
          <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Message *</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your specific needs..."
            className={`w-full px-5 py-3 rounded-[10px] bg-slate-50 border ${errors.message ? "border-red-500" : "border-border-light"} focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 resize-none placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium`}
          />
        </div>

        <div className="space-y-2 mt-6 mb-8 text-left">
          <label className="text-[13px] font-bold text-brand-secondary  tracking-wider">Additional Details</label>
          <input
            {...register("details")}
            placeholder="Any additional software specs or scale details..."
            className="w-full px-5 h-12 rounded-[10px] bg-slate-50 border border-border-light focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 placeholder:text-gray-400 text-brand-secondary text-[14px] font-medium"
          />
        </div>

        <div>
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            variant="primary" 
            showArrow={true}
            className="w-full justify-center h-[52px]"
          >
            {isSubmitting ? "Sending Message..." : "Submit Message"}
          </Button>
          <p className="text-center text-[11px] text-gray-400 mt-4 font-semibold">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>

        {status === "success" && (
          <div className="mt-6 flex items-center space-x-3 text-emerald-700 bg-emerald-50 p-4 rounded-[10px] border border-emerald-200">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <p className="font-semibold text-[13px]">{message}</p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-[10px] border border-red-200">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <p className="font-semibold text-[13px]">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
