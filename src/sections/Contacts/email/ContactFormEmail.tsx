import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { SendEmailFields } from "../validations";

export default function ContactFormEmail({
  email,
  message,
  name,
}: SendEmailFields) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading as="h1">You received a message from {name}</Heading>
              <Heading as="h3">Message:</Heading>
              <Text>{message}</Text>
              <Heading as="h3">Sender&apos;s email:</Heading>
              <Text>{email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
