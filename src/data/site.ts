export const site = {
  logo: { text: "Ochre Signal", mark: "OS" },
  fonts: { display: "Public Sans", ui: "Public Sans" },
  colors: { ground: "#1a1410", ochre: "#c45c26", paper: "#f4ebe0", dust: "#8a7464" },
  meta: {
    title: "Ochre Signal — Managed operations, security, and private AI",
    description: "Lorem ipsum. An independent Australian MSP for government, defence supply chain, and private industry. Recurring service, not a one-off consultancy.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+61 8 5550 0140",
    address: "Perth, Western Australia",
  },
  sections: { hero: true, capability: true, services: true, pathway: true, assurance: true, contact: true },
  nav: [
    { href: "#capability", label: "Capability", section: "capability" as const },
    { href: "#services", label: "Services", section: "services" as const },
    { href: "#pathway", label: "Pathway", section: "pathway" as const },
    { href: "#assurance", label: "Assurance", section: "assurance" as const },
    { href: "#contact", label: "Contact", section: "contact" as const },
  ],
  hero: {
    kicker: "Managed services · Australia",
    title: "Your environment, run from here, evidenced as you go.",
    lead: "Lorem ipsum dolor sit amet. Ochre Signal is a managed service, not a slide-deck consultancy. A desk in WA hours, Australian-region data, and a monthly report a board can read.",
    primaryCta: { label: "Start a scoping call", href: "mailto:sales@little.cloud" },
    secondaryCta: { label: "See services", href: "#services" },
    posture: [
      { label: "Based", value: "Perth, WA" },
      { label: "Model", value: "Managed + projects" },
      { label: "Sectors", value: "Gov, defence, industry" },
      { label: "Residency", value: "Australian regions" },
    ],
  },
  capability: {
    kicker: "Capability",
    title: "Three practices, one relationship",
    items: [
      { num: "01", title: "Managed operations", body: "Sed do eiusmod. Service desk, endpoints, identity, backup, and cloud. When it escalates, it goes to someone who already knows the estate." },
      { num: "02", title: "Managed security", body: "Consectetur adipiscing elit. Hardening, monitoring, and the evidence trail a prime or an auditor will eventually ask for." },
      { num: "03", title: "Private AI", body: "Ut enim ad minim. Retrieval and automation on infrastructure you control, with logging you can explain." },
    ],
  },
  services: {
    kicker: "Services",
    title: "Monthly agreements first. Projects sit alongside.",
    items: [
      { scope: "Managed · monthly", title: "Sovereign operations", body: "Lorem ipsum. Desk, patching, backup, Australian-region cloud. No offshore support tier." },
      { scope: "Managed · monthly", title: "Security & compliance", body: "Dolor sit amet. Maturity held between audits, not rebuilt as a project every year." },
      { scope: "Managed · monthly", title: "Applied AI", body: "Consectetur. Assistants and pipelines inside your boundary, then actually operated." },
      { scope: "Project · scoped", title: "Uplift & migration", body: "Adipiscing elit. Assessments and moves that sit beside the managed service, or stand alone." },
    ],
  },
  pathway: {
    kicker: "Pathway",
    title: "Discover, then control, then keep the evidence current",
    steps: [
      { stage: "01", name: "Discover", note: "What systems exist, who runs them, what they hold." },
      { stage: "02", name: "Classify", note: "What each dataset is worth, and which rules attach." },
      { stage: "03", name: "Locate", note: "Where it resides, including replicas and subprocessors." },
      { stage: "04", name: "Control", note: "Access, encryption, egress, third-party exposure." },
      { stage: "05", name: "Assure", note: "Artefacts an auditor will accept, not a statement." },
      { stage: "06", name: "Operate", note: "Run it, monitor it, keep the pack current." },
    ],
  },
  assurance: {
    kicker: "Assurance",
    title: "The board, gaps included",
    items: [
      { item: "Independent, Australian owned", state: "Held", detail: "Lorem ipsum. No foreign parent in the demo copy." },
      { item: "Australian data residency and support", state: "Held", detail: "Sed do eiusmod. Desk staffed in WA hours." },
      { item: "Essential Eight assessment capability", state: "Held", detail: "An assessment is not a certification, and we do not call it one." },
      { item: "Industry membership", state: "In progress", detail: "Ut enim ad minim. We will not name a level before one is granted." },
      { item: "ISO/IEC 27001", state: "In progress", detail: "Aligned until a certificate is issued." },
      { item: "Independent assessor endorsement", state: "Not held", detail: "Readiness and assessment sit with different firms on purpose." },
    ],
  },
  footer: {
    credit: "Ochre Signal — a Little-Devs template",
    note: "MIT. Light-custom: logo, colours, fonts, copy, sections.",
  },
} as const;
export type Site = typeof site;
