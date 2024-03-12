export default {
  header: {
    logo: "Портфоліо",
    navigation: {
      home: "Головна",
      projects: "Проекти",
      skills: "Навички",
      contacts: "Контакти",
    },
    localeToggle: {
      title: "Оберіть мову",
      uk: "Українська (uk)",
      en: "Англійська (en)",
    },
    themeToggle: {
      dark: "Темна",
      light: "Світла",
      system: "Системна",
    },
  },
  hero: {
    title: "Я <strong class='text-primary'>Frontend Розробник</strong>",
    subtitle: "Привіт, я Олександр 👋",
    info: "Я спеціалізуюся на створенні <strong>сучасних</strong>, <strong>адаптивних</strong>, <strong>швидких</strong>, <strong>seo-friendly</strong> та <strong>доступних</strong> веб-додатків за допомогою <strong>React.js</strong> та <strong>Next.js</strong>",
    projectsButton: "Проекти",
    cvButton: "Скачати CV",
  },
  projects: {
    title: "Проекти",
    ecommerce: {
      description:
        "Повністю функціональний інтернет-магазин, який дозволяє користувачам знаходити товари за допомогою розширеної системи фільтрації, додавати їх до кошика та здійснювати покупки. Додаток також має панель адміністратора, до якої можна отримати доступ за адресою <strong>/studio</strong>.",
    },
    messenger: {
      description:
        "Додаток, який використовує Next.js та Pusher.js для забезпечення комунікації в реальному часі за допомогою текстових або файлових повідомлень та аудіо-відео конференцій. Він дозволяє користувачам мати різні ролі в чатах, такі як viewer, editor або admin.",
    },
    viewSiteText: "Переглянути",
  },
  skills: {
    title: "Навички",
  },
  contacts: {
    title: "Контакти",
    message: `Звертайтеся до мене із будь-якими запитами, співпрацею чи проектами! Я захоплююсь створенням веб-додатків та буду радий зв'язатися з вами.
    `,
    form: {
      name: "Ім'я",
      message: "Повідомлення",
      send: "Надіслати",
      errors: {
        nameRequired: "Ім'я обов'язкове",
        nameMin: "Введіть як мінімум 2 символи",
        emailRequired: "Email обов'язковий",
        emailValid: "Введіть коректний email",
        messageRequired: "Повідомлення обов'язкове",
        messageMin: "Введіть як мінімум 2 символи",
      },
    },
  },
  metadata: {
    title: "Портфоліо Оліяра Олександра",
    description:
      "Ласкаво прошу на мій персональний портфоліо-вебсайт, де я демонструю свої навички через мої проекти та надаю контактну інформацію",
  },
} as const;
