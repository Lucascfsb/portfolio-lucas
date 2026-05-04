/**
 * Content Models
 * Typified data structures for portfolio content
 */

export interface Project {
  id: string;
  titleEn: string;
  titlePt: string;
  descriptionEn: string;
  descriptionPt: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Profile {
  fullName: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  objectiveEn: string;
  objectivePt: string;
  summaryEn: string;
  summaryPt: string;
  additionalInfoEn: string[];
  additionalInfoPt: string[];
}

export interface Experience {
  id: string;
  titleEn: string;
  titlePt: string;
  company: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  descriptionEn: string[];
  descriptionPt: string[];
}

export interface Education {
  id: string;
  degreeEn: string;
  degreePt: string;
  institutionEn: string;
  institutionPt: string;
  periodEn: string;
  periodPt: string;
}

export interface Course {
  id: string;
  titleEn: string;
  titlePt: string;
  institution: string;
  descriptionEn: string;
  descriptionPt: string;
  hours: string;
}

export interface Language {
  id: string;
  nameEn: string;
  namePt: string;
  levelEn: string;
  levelPt: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile: Profile = {
  fullName: "Lucas Castro Fernandes",
  location: "Campo Grande, Rio de Janeiro, RJ",
  phone: "+55 (21) 99257-2337",
  email: "lucascfsb@gmail.com",
  github: "https://github.com/Lucascfsb",
  linkedin: "https://www.linkedin.com/in/lucas-castrof",
  objectiveEn:
    "To work as a Full Stack Developer, contributing my experience in high-pressure environments and complex problem-solving, focusing on delivering scalable systems and collaborating with multidisciplinary teams.",
  objectivePt:
    "Atuar como Desenvolvedor Full Stack, contribuindo com minha experiência em ambientes de alta pressão e resolução de problemas complexos, focando na entrega de sistemas escaláveis e na colaboração com times multidisciplinares.",
  summaryEn:
    "Career military officer with leadership and management experience, transitioning to software engineering. Full Stack Developer specializing in the JavaScript ecosystem (Node.js and React.js) at Rocketseat. I have practical experience in developing modern applications using TypeScript, Next.js, PostgreSQL, and Docker, prioritizing technical discipline and code quality. I have expertise in programming logic, systems architecture, and agile methodologies, seeking to apply resilience and a focus on results in challenging technological projects.",
  summaryPt:
    "Militar de carreira com experiência em liderança e gestão, em transição para a engenharia de software. Desenvolvedor Full Stack especializado no ecossistema JavaScript (Node.js e React.js) pela Rocketseat. Possuo experiência prática no desenvolvimento de aplicações modernas utilizando TypeScript, Next.js, PostgreSQL e Docker, priorizando a disciplina técnica e a qualidade de código. Domínio em lógica de programação, arquitetura de sistemas e metodologias ágeis, buscando aplicar resiliência e foco em resultados em projetos tecnológicos desafiadores.",
  additionalInfoEn: [
    "Organized and analytical",
    "Effective communication and time management",
    "Focus on continuous improvement and results",
    "Constantly studying and learning new technologies",
  ],
  additionalInfoPt: [
    "Organizado e analítico",
    "Comunicação efetiva e gerenciamento eficaz do tempo",
    "Foco na melhoria contínua, com orientação para resultados",
    "Constantemente estudando e aprendendo novas tecnologias",
  ],
};

export const projects: Project[] = [
  {
    id: "project-1",
    titleEn: "Cart-Ai",
    titlePt: "Cart-Ai",
    descriptionEn:
      "Smart grocery full-stack app with product search, cart management, and an AI assistant for contextual shopping suggestions.",
    descriptionPt:
      "Aplicação full stack de supermercado inteligente com busca de produtos, gestão de carrinho e assistente com IA para sugestões de compra contextualizadas.",
    technologies: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "OpenAI API",
      "Google Gemini API",
    ],
    githubUrl: "https://github.com/Lucascfsb/cart-ai",
    featured: true,
  },
  {
    id: "project-2",
    titleEn: "Email AI Classifier",
    titlePt: "Classificador de Emails com IA",
    descriptionEn:
      "AI-powered full-stack app that classifies emails as productive or unproductive and generates contextual reply suggestions with NLP and Google Gemini.",
    descriptionPt:
      "Aplicação full stack com IA que classifica emails como produtivos ou improdutivos e gera respostas contextuais usando NLP e Google Gemini.",
    technologies: ["React", "FastAPI", "Python", "TypeScript", "Google Gemini"],
    liveUrl: "https://auto-u-email.vercel.app/",
    githubUrl: "https://github.com/Lucascfsb/autoU-email",
    featured: true,
  },
  {
    id: "project-3",
    titleEn: "ClipMaker",
    titlePt: "ClipMaker",
    descriptionEn:
      "To work as a Full Stack Developer, contributing leadership experience, resilience, and complex problem-solving to scalable teams and systems.",
    descriptionPt:
      "Um aplicativo web que utiliza Inteligência Artificial para ajudar você a criar e extrair os momentos mais virais de seus vídeos. Com ClipMaker, transforme seus vídeos longos em clips curtos, otimizados para redes sociais.",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "GSAP",
      "Lucide Icons",
      "Google Gemini API",
    ],
    githubUrl: "https://github.com/Lucascfsb/nlw-22",
    featured: true,
  },
  {
    id: "project-4",
    titleEn: "quickList",
    titlePt: "quickList",
    descriptionEn:
      "A simple and modern web app to quickly create and manage your shopping list. Add, check, and remove items with a responsive interface.",
    descriptionPt:
      "Um aplicativo web simples e moderno para criar e gerenciar sua lista de compras. Adicione, marque e remova itens com uma interface responsiva.",
    technologies: ["HTML5", "CSS3", "JavaScript", "HugeIcons"],
    githubUrl: "https://github.com/Lucascfsb/quickList",
    liveUrl: "https://lucascfsb.github.io/quickList/",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    titleEn: "Team Leader",
    titlePt: "Líder de Equipe",
    company: "Exército Brasileiro | Brazilian Army",
    startYear: 2015,
    current: true,
    descriptionEn: [
      "Leadership, management, and training of multidisciplinary teams in high-pressure environments",
      "Strategic decision-making and crisis management in risky situations",
      "Management of logistical resources and control of highly complex inventory",
      "Use and operation of corporate systems (SISCOFIS) for operational and administrative control",
      "Development of work methodologies based on discipline, resilience, and focus on results",
      "Preparation of technical reports and documentation of operational processes",
    ],
    descriptionPt: [
      "Liderança, gestão e treinamento de equipes multidisciplinares em ambientes de alta pressão",
      "Tomada de decisão estratégica e gerenciamento de crises em situações de risco",
      "Gestão de recursos logísticos e controle de inventário de alta complexidade",
      "Utilização e operação de sistemas corporativos (SISCOFIS) para controle operacional e administrativo",
      "Desenvolvimento de metodologias de trabalho baseadas em disciplina, resiliência e foco em resultados",
      "Preparação de relatórios técnicos e documentação de processos operacionais",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degreeEn: "Postgraduate Degree in Software Engineering",
    degreePt: "Pós-Graduação em Engenharia de Software",
    institutionEn: "FECAF University Center (UniFECAF)",
    institutionPt: "Centro Universitário FECAF (UniFECAF)",
    periodEn: "Completed in May 2024",
    periodPt: "Concluído em maio de 2024",
  },
  {
    id: "edu-2",
    degreeEn: "Technologist Degree in Systems Analysis and Development",
    degreePt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institutionEn: "Faculdade Sul-Americana Educacional (FASUL)",
    institutionPt: "Faculdade Sul-Americana Educacional (FASUL)",
    periodEn: "Expected completion in July 2027",
    periodPt: "Previsão de conclusão em julho de 2027",
  },
];

export const courses: Course[] = [
  {
    id: "course-1",
    titleEn: "Discover",
    titlePt: "Discover",
    institution: "Rocketseat",
    descriptionEn: "JavaScript, HTML5, CSS3, and OOP",
    descriptionPt: "JavaScript, HTML5, CSS3 e POO",
    hours: "60h",
  },
  {
    id: "course-2",
    titleEn: "GoStack",
    titlePt: "GoStack",
    institution: "Rocketseat",
    descriptionEn: "Node.js, React.js, and React Native",
    descriptionPt: "Node.js, React.js e React Native",
    hours: "80h",
  },
  {
    id: "course-3",
    titleEn: "Git and GitHub Basics",
    titlePt: "O básico de Git e GitHub",
    institution: "Rocketseat",
    descriptionEn: "Git, basic commands, repositories, and GitHub",
    descriptionPt: "Git, comandos básicos, repositórios e GitHub",
    hours: "1h",
  },
  {
    id: "course-4",
    titleEn: "Introduction to Automation with n8n",
    titlePt: "Introdução a automação com n8n",
    institution: "Rocketseat",
    descriptionEn: "Process automation with n8n",
    descriptionPt: "Automação de processos com n8n",
    hours: "3h",
  },
  {
    id: "course-5",
    titleEn: "Full Stack Training",
    titlePt: "Formação Full Stack",
    institution: "Rocketseat",
    descriptionEn: "Frontend, Backend, and TypeScript",
    descriptionPt: "Frontend, Backend e TypeScript",
    hours: "30h",
  },
  {
    id: "course-6",
    titleEn: "Clean Code Training",
    titlePt: "Formação em Clean Code",
    institution: "Rocketseat",
    descriptionEn: "SOLID and DDD",
    descriptionPt: "SOLID e DDD",
    hours: "3h",
  },
];

export const languages: Language[] = [
  {
    id: "lang-1",
    nameEn: "English",
    namePt: "Inglês",
    levelEn: "Intermediate",
    levelPt: "Intermediário",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CSS",
      "State Management",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "TypeORM", "Vercel", "Git", "Zod"],
  },
];
