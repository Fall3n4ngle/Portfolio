export default {
  header: {
    logo: "Portfolio",
    navigation: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contacts: "Contacts",
    },
    localeToggle: {
      title: "Pick a language",
      uk: "Ukrainian (uk)",
      en: "English (en)",
    },
    themeToggle: {
      dark: "Dark",
      light: "Light",
      system: "System",
    },
  },
  hero: {
    title: "I'm a <strong class='text-primary'>Frontend Developer</strong>",
    subtitle: "Hi, I'm Oleksandr",
    info: `
      I specialize in building <strong>modern</strong>,
      <strong>responsive</strong>, <strong>fast</strong>,
      <strong>seo-friendly</strong> and <strong>accessible</strong>
      web-applications using <strong>React.js</strong> and
      <strong>Next.js</strong>
    `,
    projectsButton: "Projects",
    cvButton: "Download CV",
  },
  projects: {
    title: "Projects",
  },
  skills: {
    title: "Skills",
  },
  contacts: {
    title: "Contacts",
    message: `Feel free to reach out with any inquiries, collaborations, or projects!
      I'm passionate about creating engaging web experiences and would
      love to connect with you.
    `,
    form: {
      name: "Name",
      message: "Message",
      send: "Send",
      errors: {
        nameRequired: "Name is required",
        nameMin: "Name must be at least 2 characters",
        emailRequired: "Email is required",
        emailValid: "Email must be valid",
        messageRequired: "Message is required",
        messageMin: "Message must be at least 2 characters",
      },
    },
  },
} as const;
