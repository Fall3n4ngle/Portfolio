"use client";

import { animationVariants } from "@/common/const";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section id="contacts" className="mb-14 scroll-mt-24">
      <motion.h2
        {...animationVariants}
        viewport={{ once: true }}
        className="h2 mb-14 text-center"
      >
        Contacts
      </motion.h2>
      <div className="mx-auto flex max-w-[900px] flex-col-reverse items-start gap-10 sm:flex-row md:gap-14">
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
          transition={{ delay: 0.3 }}
          className="sm:mt-7 sm:basis-1/2"
        >
          <ContactsInfo />
        </motion.div>
      </div>
    </section>
  );
}
