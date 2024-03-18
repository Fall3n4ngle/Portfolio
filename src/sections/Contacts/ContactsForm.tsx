import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SendEmailFields, createEmailSchema } from "./validations";
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
import { LuLoader2, LuSend } from "react-icons/lu";
import { sendEmail } from "./actions";
import { toast } from "sonner";
import { useScopedI18n } from "@/lib/i18n/client";

export default function ContactsForm() {
  const t = useScopedI18n("contacts.form");

  const form = useForm<SendEmailFields>({
    resolver: zodResolver(
      createEmailSchema({
        nameRequired: t("errors.nameRequired"),
        nameMin: t("errors.nameMin"),
        emailRequired: t("errors.emailRequired"),
        emailValid: t("errors.emailValid"),
        messageRequired: t("errors.messageRequired"),
        messageMin: t("errors.messageMin"),
      }),
    ),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (fields: SendEmailFields) => {
    const result = await sendEmail(fields);

    if (result.success) {
      toast.success(t("successMessage"));
      form.reset();
      return;
    }

    toast.error(t("errorMessage"));
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
                {t("name")}{" "}
                <span className={cn(error && "text-destructive")}>*</span>
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
                {t("message")}{" "}
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
            <LuLoader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              {t("send")}
              <LuSend className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
