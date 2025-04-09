import { ConfigProps } from "./types/config";

const config = {
  appName: "Fascinante Digital",
  appDescription: "A modern SaaS starter built with Next.js and Tailwind CSS.",
  domainName: "localhost", // Puedes cambiarlo luego por tu dominio real

  crisp: {
    id: "", // Puedes dejarlo vacío si no usas Crisp
    onlyShowOnRoutes: [],
  },

  stripe: {
    plans: [], // Comienza vacío y lo llenas cuando configures tus planes
  },

  aws: {
    bucket: "",
    bucketUrl: "",
    cdn: "",
  },

  resend: {
    fromNoReply: "Fascinante <noreply@fascinantedigital.com>",
    fromAdmin: "Fascinante <admin@fascinantedigital.com>",
    supportEmail: "support@fascinantedigital.com",
  },

  colors: {
    theme: "light", // Puedes cambiar a 'dark' o implementar un toggle más adelante
    main: "#1e40af", // Azul Tailwind (como base principal)
  },

  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;