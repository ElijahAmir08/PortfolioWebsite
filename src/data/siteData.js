export const sectionSprites = {
    about: [
        {
            name: "Link",
            src:"/sprites/link.gif",
            alt: "Link sprite",
            left: "28px",
            delay: "0s",
            size: "w-14 and md:w-16",
        },

    ],
    projects: [
    {
      name: "Cloud",
      src: "/sprites/cloud.gif",
      alt: "Pixel Cloud sprite",
      left: "36px",
      delay: "0.3s",
      size: "w-16 md:w-20",
    },
  ],
  skills: [
    {
      name: "Kirby",
      src: "/sprites/kirby.gif",
      alt: "Pixel Kirby sprite",
      left: "50%",
      delay: "0.6s",
      size: "w-14 md:w-16",
      center: true,
    },
  ],
  education: [
    {
      name: "Chocobo",
      src: "/sprites/chocobo.gif",
      alt: "Pixel Chocobo sprite",
      right: "42px",
      delay: "0.9s",
      size: "w-16 md:w-20",
    },
  ],
};

export const projects = [
    {
      title: "Course Review Web App",
      subtitle: "Team Software Engineering Project",
      description:
        "Built a collaborative web application for course reviews with a focus on front-end design, testing, and Git-based team workflow. Contributed unit tests, feature-branch development, and implementation support across the codebase.",
      tech: ["Java", "Testing", "Git", "Frontend Development"],
    },
    {
      title: "Security & Networking Projects",
      subtitle: "Applied Systems Work",
      description:
        "Includes a Python port scanner using sockets and an AES-based steganography tool, reflecting an interest in usable security, network behavior, and practical systems engineering.",
      tech: ["Python", "Sockets", "AES", "Cybersecurity"],
    },
];

export const skillGroups = [
    {
    title: "Languages",
    items: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Systems / CS Foundations",
    items: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Cloud Computing",
    ],
  },
  {
    title: "Security / Networking",
    items: ["Networking", "Cybersecurity"],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Unit Testing", "Statistics"],
  },
];

  export const quickLinks = [
    {
      title: "Resume",
      href: "/ElijahAmir_Hodges_Resume.pdf",
      description: "View my resume",
    },
    {
      title: "GitHub",
      href: "https://github.com/ElijahAmir08",
      description: "Check out my GitHub profile",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/elijah-amir-hodges-652958241/",
      description: "Connect with me on LinkedIn",
    },
    {
      title: "Email",
      href: "mailto:ElijahAmirHodges@gmail.com",
      description: "Send me an email",
    },
  ];

  export const infoPanels = [
    {
    title: "Currently",
    body: "Preparing for graduate study and continuing to build out systems, networking, and applied technical projects.",
  },
  {
    title: "Next Step",
    body: "Incoming MS CS student at UCSB with interests in Machine Learning, networking, cloud, and data-driven computing.",
  },
  {
    title: "What I Like Building",
    body: "Projects that connect theory and practice, especially tools or systems that have real technical constraints and real users.",
  },
  {
    title: "Outside of Class",
    body: "I enjoy gaming, reading, camping, cooking, and finding ways to make technical spaces feel more personal.",
  },
  ];

  export const relocationData = {
    current: {
      label: "Current Base",
      city: "Charlottesville, VA",
      lat: 38.0293,
      lng: -78.4767,
    },
    next: {
      label: "Next Base",
      city: "Santa Barbara, CA",
      lat: 34.4208,
      lng: -119.6982,
    },
    status: "Preparing for UCSB",
  };