import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  details: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
