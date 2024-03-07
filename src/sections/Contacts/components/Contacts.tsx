"use client";

import { animationVariants, navigationItems } from "@/common/const";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";

export default function Contacts() {
  const { ref } = useSectionInView("contacts", 0.5);
  const t = useScopedI18n("contacts");

  return (
    <section
      ref={ref}
      id={navigationItems.contacts.id}
      className="mb-14 scroll-mt-24"
    >
      <motion.h2
        {...animationVariants}
        viewport={{ once: true }}
        className="h2 mb-14 text-center"
      >
        {t("title")}
      </motion.h2>
      <div className="mx-auto flex flex-col-reverse items-start gap-10 sm:flex-row md:gap-14">
        <motion.div
          {...animationVariants}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-[500px] sm:basis-1/2"
        >
          <ContactsForm />
        </motion.div>
        <motion.div
          {...animationVariants}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="sm:mt-7 sm:basis-1/2"
        >
          <ContactsInfo />
        </motion.div>
      </div>
    </section>
  );
}
