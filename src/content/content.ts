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
    "To work as a Full Stack Developer, bringing resilience, technical discipline, and a strong results focus to challenging projects.",
  objectivePt:
    "Atuar como Desenvolvedor Full Stack, contribuindo com resiliência, disciplina técnica e foco em resultados em projetos desafiadores.",
  summaryEn:
    "Full Stack Developer specializing in the JavaScript/TypeScript ecosystem (Node.js, React.js, Next.js), with practical experience in integrating Generative AI and LLMs into modern applications, product validation (MVPs), and process automation. Expertise in REST API architecture, Clean Code, SOLID principles, and Docker, delivering scalable systems with test coverage via Jest and applied Prompt Engineering. Career military officer transitioning to tech, bringing leadership, discipline, and a strong focus on results directly to software development within multidisciplinary teams.",
  summaryPt:
    "Desenvolvedor Full Stack especializado no ecossistema JavaScript/TypeScript (Node.js, React.js, Next.js), com experiência prática em integração de IA Generativa e LLMs em aplicações modernas, validação de produtos (MVPs) e automação de processos. Expertise em arquitetura de APIs REST, Clean Code, SOLID e Docker, entregando sistemas escaláveis com cobertura de testes via Jest e Prompt Engineering aplicado. Militar de carreira em transição tech — liderança, disciplina e foco em resultados aplicados diretamente ao desenvolvimento de software em times multidisciplinares.",
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
  {
    id: "project-5",
    titleEn: "number-generator",
    titlePt: "gerador-de-numeros",
    descriptionEn:
      "A web application to generate random numbers within a custom range. It includes options to prevent duplicate results, interactive animations, and robust input validation.",
    descriptionPt:
      "Um aplicativo web para gerar números aleatórios dentro de um intervalo definido. Inclui opção para não repetir resultados, animações interativas e validações robustas de entrada.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Lucascfsb/number-generator",
    liveUrl: "https://lucascfsb.github.io/number-generator/",
    featured: true,
  },
  {
    id: "project-6",
    titleEn: "pet-scheduling",
    titlePt: "agendamento-pet",
    descriptionEn:
      "A pet scheduling system built with pure JavaScript. It allows users to schedule services, view, and manage appointments within a responsive interface featuring modular code and interactive toast notifications.",
    descriptionPt:
      "Um sistema de agendamento para pets desenvolvido em JavaScript puro. Permite cadastrar, visualizar e gerenciar horários de serviços em uma interface responsiva, com código modularizado e notificações interativas.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Webpack"],
    githubUrl: "https://github.com/Lucascfsb/pet-scheduling",
    liveUrl: "https://pet-scheduling-six.vercel.app/",
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
      "Led teams in high-pressure environments, developing methodologies based on technical discipline and agile management that increased operational efficiency",
      "Managed high-complexity inventory control via the SISCOFIS system, successfully reducing discrepancies",
      "Handled logistical resources and complex asset tracking under rigorous regulatory standards",
      "Developed workflows centered around discipline, resilience, and a strong commitment to results",
      "Drafted technical reports and structured operational process documentation",
    ],
    descriptionPt: [
      "Liderou equipes em ambientes de alta pressão, desenvolvendo metodologias baseadas em disciplina técnica e gestão ágil que aumentaram a eficiência operacional",
      "Gerenciou controle de inventário de alta complexidade via sistema SISCOFIS, reduzindo divergências",
      "Gestão de recursos logísticos e controle de inventário de alta complexidade",
      "Desenvolvimento de metodologias de trabalho baseadas em disciplina, resiliência e foco em resultados",
      "Elaboração de relatórios técnicos e documentação de processos operacionais",
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
    titleEn: "AI for Product",
    titlePt: "IA para Produto",
    institution: "Rocketseat",
    descriptionEn: "AI integration in product development",
    descriptionPt: "Integração de IA no desenvolvimento de produtos",
    hours: "6h",
  },
  {
    id: "course-2",
    titleEn: "Taskmaster: Automating Development Tasks with AI Agents",
    titlePt:
      "Taskmaster: Automatizando tarefas de desenvolvimento com Agentes de IA",
    institution: "Rocketseat",
    descriptionEn: "Development task automation with AI agents",
    descriptionPt: "Automação de tarefas de desenvolvimento com agentes de IA",
    hours: "5h",
  },
  {
    id: "course-3",
    titleEn: "Node.js with Generative AI in Practice",
    titlePt: "Node.js com IA Generativa na prática",
    institution: "Rocketseat",
    descriptionEn: "Practical Node.js development with Generative AI",
    descriptionPt: "Desenvolvimento prático de Node.js com IA Generativa",
    hours: "Certificado",
  },
  {
    id: "course-4",
    titleEn: "Fundamentals of HTML and CSS",
    titlePt: "Fundamentos de HTML e CSS",
    institution: "Rocketseat",
    descriptionEn: "HTML5, CSS3, and responsive design",
    descriptionPt: "HTML5, CSS3 e design responsivo",
    hours: "Certificado",
  },
  {
    id: "course-5",
    titleEn: "Clean Code",
    titlePt: "Clean Code",
    institution: "Rocketseat",
    descriptionEn: "Code quality and best practices",
    descriptionPt: "Qualidade de código e melhores práticas",
    hours: "Certificado",
  },
  {
    id: "course-6",
    titleEn: "Introduction to Automation with n8n",
    titlePt: "Introdução à Automação com n8n",
    institution: "Rocketseat",
    descriptionEn: "Process automation with n8n",
    descriptionPt: "Automação de processos com n8n",
    hours: "Certificado",
  },
  {
    id: "course-7",
    titleEn: "The Basics of Git and GitHub",
    titlePt: "O básico de Git e GitHub",
    institution: "Rocketseat",
    descriptionEn: "Git version control and GitHub collaboration",
    descriptionPt: "Controle de versão Git e colaboração no GitHub",
    hours: "Certificado",
  },
  {
    id: "course-8",
    titleEn: "Discover",
    titlePt: "Discover",
    institution: "Rocketseat",
    descriptionEn: "JavaScript, HTML5, CSS3, and OOP",
    descriptionPt: "JavaScript, HTML5, CSS3 e POO",
    hours: "60h",
  },
  {
    id: "course-9",
    titleEn: "GoStack",
    titlePt: "GoStack",
    institution: "Rocketseat",
    descriptionEn: "Node.js, React.js, and React Native",
    descriptionPt: "Node.js, React.js e React Native",
    hours: "80h",
  },
  {
    id: "course-10",
    titleEn: "Full Stack Training",
    titlePt: "Formação Full Stack",
    institution: "Rocketseat",
    descriptionEn: "Frontend, Backend, and TypeScript",
    descriptionPt: "Frontend, Backend e TypeScript",
    hours: "30h",
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
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST API",
      "Zod",
      "Nodemailer",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
      "Bootstrap",
    ],
  },
  {
    category: "AI & Automation",
    items: [
      "Generative AI",
      "LLM Integration",
      "Prompt Engineering",
      "n8n",
      "Product Discovery",
      "No-Code/Low-Code Tools",
    ],
  },
  {
    category: "Data & Infra",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "Docker",
      "TypeORM",
      "Drizzle",
      "Text2SQL",
    ],
  },
  {
    category: "Quality & Tools",
    items: [
      "Clean Code",
      "SOLID Principles",
      "Design Patterns",
      "Jest",
      "TDD",
      "Responsive Web Design",
      "Git",
      "GitHub",
      "Figma",
      "Insomnia",
      "DBeaver",
    ],
  },
];
