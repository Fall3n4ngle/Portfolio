"use server";

import { resend } from "@/lib/resend";
import { SendEmailFields, sendEmailSchema } from "./validations";
import ContactFormEmail from "./email/ContactFormEmail";

export const sendEmail = async (fields: SendEmailFields) => {
  const parsed = sendEmailSchema.safeParse(fields);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.toString(),
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sashaoliyar@gmail.com",
      subject: "Message from contact form",
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
};
