import { z } from "zod";

type ErrorMessages = {
  nameRequired: string;
  nameMin: string;
  emailRequired: string;
  emailValid: string;
  messageRequired: string;
  messageMin: string;
};

export const createEmailSchema = (errorMessages?: ErrorMessages) => {
  return z.object({
    name: z
      .string({
        required_error: errorMessages?.nameRequired,
      })
      .trim()
      .min(2, {
        message: errorMessages?.nameMin,
      }),
    email: z
      .string({
        required_error: errorMessages?.emailRequired,
      })
      .trim()
      .email({
        message: errorMessages?.emailValid,
      }),
    message: z
      .string({
        required_error: errorMessages?.messageRequired,
      })
      .trim()
      .min(2, { message: errorMessages?.messageMin }),
  });
};

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

export type SendEmailFields = z.infer<ReturnType<typeof createEmailSchema>>;
