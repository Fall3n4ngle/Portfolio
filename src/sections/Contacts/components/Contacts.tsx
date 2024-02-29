import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";

export default function Contacts() {
  return (
    <section id="contacts" className="mb-14 scroll-mt-24">
      <h2 className="h2 mb-14 text-center">Contacts</h2>
      <div className="mx-auto flex max-w-[900px] flex-col-reverse items-start gap-10 sm:flex-row md:gap-14">
        <div className="mx-auto w-full max-w-[500px] sm:basis-1/2">
          <ContactsForm />
        </div>
        <div className="sm:mt-7 sm:basis-1/2">
          <ContactsInfo />
        </div>
      </div>
    </section>
  );
}
