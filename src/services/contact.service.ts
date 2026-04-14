import prisma from "@/lib/db";

export interface ContactData {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}

export const contactService = {
  createContact: async (data: ContactData) => {
    return await prisma.contact.create({
      data,
    });
  },
};
