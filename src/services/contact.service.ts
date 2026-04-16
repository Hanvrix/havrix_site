import prisma from "@/lib/db";

export interface ContactData {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone?: string | null;
  message: string;
  details?: string | null;
}

export const contactService = {
  createContact: async (data: ContactData) => {
    return await prisma.contact.create({
      data,
    });
  },
};
