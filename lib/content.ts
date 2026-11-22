// Everything you'd want to personalise lives in this file.
// Facts below come from github.com/yemery/my-portfolio (src/assets/data/sitedata.js).

export const profile = {
  name: "Meryem Ajmani",
  year: 2026, // shown in the corner mark and footer
  nameCn: "梅丽耶姆", // "Meryem" transliterated, shown vertically in brush script
  seal: "梅", // the character inside the red seal (plum blossom)
  role: "Software Engineer",
  location: "Rabat, Morocco",
  availability: "Available for freelance work",
  email: "meryemajmani33@gmail.com",
  resume: "/meryem-ajmani-resume.pdf",
  description:
    "Meryem Ajmani's portfolio — projects, skills, and professional background in software engineering.",
  motto: { cn: "大道至简", en: "The greatest way is the simplest." },
  about: [
    "I'm a software engineering student at École Marocaine des Sciences de l'Ingénieur in Rabat, specialising in web scraping, full-stack development, and data processing. I bring ideas to life through code and help businesses extract valuable insights from data.",
    "I started programming in the summer of 2021, trained as a full-stack web development technician at ISTA NTIC Rabat, and now freelance alongside my studies — building web apps for data-quality testing, real-time dashboards, and scalable back-ends.",
  ],
  tools: ["Python", "React", "Laravel", "Django", "Node.js", "Selenium", "Pandas", "MySQL", "MongoDB"],
};

export const works = [
  {
    numeral: "壹",
    title: "Freelancing Data Quality Dashboard",
    description:
      "A web application for analysing the quality of scraped data: outdated-data percentages, accuracy, and format errors.",
    tags: ["React", "Redux", "Chart.js"],
    href: "",
  },
  {
    numeral: "贰",
    title: "Dental Clinic Management System",
    description:
      "A desktop application for patient records, appointments, consultations, invoices, and prescriptions.",
    tags: ["Java 21", "Swing", "Jackson"],
    href: "https://github.com/yemery/Dental-Clinic-Management-System",
  },
  {
    numeral: "叁",
    title: "University Library Management System",
    description:
      "Web-based library management with secure authentication, role-based access, and automated notifications.",
    tags: ["Django", "React", "MySQL"],
    href: "https://github.com/yemery/university-library-management",
  },
  {
    numeral: "肆",
    title: "Schedule Checker",
    description:
      "Automates schedule checking for NTIC Rabat, sending timely updates and alerts to students.",
    tags: ["Python", "Selenium", "Discord"],
    href: "https://github.com/yemery/schedule-checker-v2",
  },
  {
    numeral: "伍",
    title: "Consumable Stock Management System",
    description:
      "A stock management system with UML design, a Laravel backend, and Pandas for data handling.",
    tags: ["Laravel", "Pandas", "MySQL"],
    href: "",
  },
  {
    numeral: "陆",
    title: "Fiverr Gig Scraper",
    description: "A Python script that scrapes Fiverr gig data for a given keyword search.",
    tags: ["Python", "Selenium", "MongoDB"],
    href: "",
  },
  {
    numeral: "柒",
    title: "Oracle Quiz App",
    description:
      "Built for the GDSC club; I was responsible for scraping the quiz data from various sources.",
    tags: ["Python", "Beautiful Soup", "Selenium"],
    href: "",
  },
  {
    numeral: "捌",
    title: "Jewellery Shop Website",
    description: "Front-end for a jewellery shop website.",
    tags: ["React", "Tailwind", "Flowbite"],
    href: "https://github.com/yemery/bijou-site",
  },
];

export const experience = [
  {
    when: "Feb 2025 — Present",
    title: "Freelance Software Engineer",
    place: "Fiverr · Remote",
    description:
      "Tailored web application development, web scraping, and data mining solutions for clients worldwide.",
  },
  {
    when: "Jul 2024 — Jan 2025",
    title: "Freelance Web Scraper & Data Cleaner",
    place: "Self-employed · Berlin, remote",
    description:
      "Extracting, cleaning, and processing data from websites into structured, meaningful insights.",
  },
  {
    when: "Aug — Sep 2024",
    title: "Software Engineering Intern",
    place: "Ministère de l'Aménagement du Territoire et d'Urbanisme · Rabat",
    description:
      "Migrated a web application from Laravel 5 to Laravel 10, split it into client and server, and added Sanctum authentication and real-time notifications with Pusher.",
  },
  {
    when: "Mar 2024 — Present",
    title: "Web Tech Lead",
    place: "GDSC EMSI Rabat · Volunteer",
    description:
      "Leading web technology initiatives, organising workshops, and guiding fellow members in web development.",
  },
  {
    when: "Mar — Apr 2023",
    title: "Web App Developer Intern",
    place: "Al Omrane Rabat-Salé-Kénitra · Rabat",
    description:
      "Built consumable stock management software: roles, orders, data visualisation, and data automation with Pandas and Selenium.",
  },
];

export const education = [
  {
    when: "Oct 2023 — Ongoing",
    title: "Software Engineering",
    place: "École Marocaine des Sciences de l'Ingénieur",
  },
  {
    when: "Oct 2021 — Jul 2023",
    title: "Specialised Technician, Full-Stack Web Development",
    place: "Institut Spécialisé de Technologie Appliquée NTIC Rabat",
  },
  {
    when: "Oct 2020 — Jul 2021",
    title: "Baccalaureate in Mathematical Sciences A",
    place: "Lycée Abidar El Ghifari",
  },
];

export const links = [
  { label: "GitHub", href: "https://github.com/yemery" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/meryem-ajmani/" },
  { label: "Fiverr", href: "https://www.fiverr.com/meryemajmani" },
  { label: "X", href: "https://twitter.com/burzy__" },
  { label: "Résumé", href: "/meryem-ajmani-resume.pdf" },
];
