import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30),
  email: z
    .string({
      required_error: "Email is required",
    })
    .trim()
    .email({
      message: "Email must be valid",
    }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .trim()
    .min(2, { message: "Message must be at least 2 characters." }),
});

export type SendEmailFields = z.infer<typeof sendEmailSchema>;
