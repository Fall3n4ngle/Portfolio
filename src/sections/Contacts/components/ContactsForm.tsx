"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SendEmailFields, sendEmailSchema } from "../validations";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/ui";
import { cn } from "@/common/utils";
import { Loader2, Send } from "lucide-react";
import { sendEmail } from "../actions";
import { toast } from "sonner";

export default function ContactsForm() {
  const form = useForm<SendEmailFields>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (fields: SendEmailFields) => {
    const result = await sendEmail(fields);

    if (result.success) {
      toast.success("Sent email successfully");
      form.reset();
      return;
    }
    
    toast.error(result.error);
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>
                Name <span className={cn(error && "text-destructive")}>*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>
                Email <span className={cn(error && "text-destructive")}>*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>
                Message{" "}
                <span className={cn(error && "text-destructive")}>*</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="min-w-[88px] self-start text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Send
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
