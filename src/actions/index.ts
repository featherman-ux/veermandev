// src/server/actions.ts
import { defineAction } from 'astro:actions';
import { z } from 'zod'; // install with npm i zod

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, "Name must be at least 2 characters."),
      email: z.string().email("Please enter a valid email address."),
      message: z.string().min(10, "Message must be at least 10 characters."),
    }),
    handler: async (formData) => {
      const { name, email, message } = formData;

      // Simulate sending or processing
      console.log(`Received submission: ${name}, ${email}, ${message}`);

      return { success: true, message: "Thank you for your message!" };
    },
  }),
};