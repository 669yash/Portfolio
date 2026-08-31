export const education = [
  {
    institution: 'MIT Academy of Engineering',
    period: '2022-2026',
    degree: 'Computer Engineering',
    cgpa: 'CGPA 8.29',
    icon: 'graduation-cap',
  },
  {
    institution: 'Kendriya Vidyalaya Varangaon',
    period: 'Completed',
    degree: 'High School',
    cgpa: '81.6%',
    icon: 'book-open',
  },
  {
    institution: 'Orion CBSE School',
    period: 'Completed',
    degree: 'School',
    cgpa: '90.8%',
    icon: 'award',
  },
]

export const profiles = {
  ai: {
    id: 'ai',
    optionLabel: 'Software Developer in AI',
    optionShort: 'AI Software',
    optionDescription:
      'Explore my software, ML, analytics, and cloud-focused profile.',
    currentLabel: 'Software Developer in AI',
    roleLine: 'Machine Learning Engineer, AI Builder, and Analytics Problem Solver',
    heroIntro:
      'For teams hiring AI software talent who can build, deploy, and improve real-world products.',
    resumeHref: '/assets/Resume_SDE_AI.pdf',
    resumeLabel: 'Download AI Resume',
    aboutParagraphs: [
  "I'm a recent Computer Engineering graduate with strong foundations in building Generative AI systems and proficiency in LLMs, RAG, and agentic frameworks.",
  "I have hands-on experience developing and deploying end-to-end AI solutions using Python, LangChain, and AWS, with a focus on turning ideas into usable products.",
  'I enjoy solving real-world problems through analytical thinking, adaptability, and a practical engineering mindset across AI, data, and software systems.',
  'Beyond tech, I enjoy playing football, cooking, and traveling new places.',
],
    skills: [
      {
        title: 'Languages',
        icon: 'code',
        color: 'from-indigo-500 to-purple-500',
        skills: ['C++', 'Python', 'SQL'],
      },
      {
        title: 'Core Concepts',
        icon: 'terminal',
        color: 'from-orange-500 to-red-500',
        skills: ['DSA', 'System Design', 'Object-Oriented Programming', 'Operating Systems', 'DBMS'],
      },
      {
        title: 'AI',
        icon: 'brain',
        color: 'from-purple-500 to-pink-500',
        skills: [
          'Machine Learning',
          'Deep Learning',
          'NLP',
          'Computer Vision',
          'Generative AI',
          'LLMs',
          'RAG',
        ],
      },
      {
  title: 'Libraries/Frameworks',
  icon: 'code',
  color: 'from-yellow-500 to-orange-500',
  skills: [
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'LangChain',
    'LangGraph',
  ],
},
{
  title: 'Databases',
  icon: 'bar-chart',
  color: 'from-green-500 to-emerald-500',
  skills: ['MySQL', 'ChromaDB', 'Pinecone', 'Vector Databases'],
},
      {
        title: 'Cloud/DevOps',
        icon: 'cloud',
        color: 'from-blue-500 to-cyan-500',
        skills: ['AWS', 'Docker', 'Git', 'CI/CD Pipelines'],
      },
      {
        title: 'Tools',
        icon: 'toolbox',
        color: 'from-slate-500 to-slate-300',
        skills: ['GitHub', 'Terraform', 'JIRA', 'Postman', 'Hugging Face', 'OpenAI'],
      },
    ],
    studying: [
      {
        title: 'ML-Ops',
        icon: 'cloud',
        color: 'from-cyan-500 via-blue-500 to-indigo-500',
        points: [
          'Model serving and monitoring',
          'CI/CD for ML systems',
          'Containerization and cloud deploys',
        ],
      },
    ],
    experiences: [
      {
        company: 'IPride Solutions and Services',
        role: 'Machine Learning Intern',
        period: 'Jun 2025 - Present',
        location: 'Pune, India',
        color: 'from-blue-500 to-indigo-500',
        achievements: [
          'Built an AI-powered stock analysis platform using NLP, LLMs, and SQL for real-time market sentiment analysis, enabling 1.2x higher returns.',
          'Developed a computer vision-based attendance system automating employee tracking, reducing attendance recording time from 5 minutes to 45 seconds.',
          'Built and integrated an LLM-powered WhatsApp AI assistant automating banking customer support with intelligent query resolution and personalized interactions.',
        ],
      },
      {
        company: 'Ammunition Factory Khadki',
        role: 'Data & Machine Learning Intern',
        period: 'Jul 2024 - Aug 2024',
        location: 'Pune, India',
        color: 'from-purple-500 to-pink-500',
        achievements: [
          'Built a YOLO-based visual fault detection system for automated production line inspection, enabling real-time detection of physical defects and reducing manual quality checks.',
          'Designed Power BI dashboards for sales and performance analytics, providing actionable insights to support data-driven planning and business decisions.',
          'Assisted in deploying and securing Maya OS across 30+ internal systems, ensuring reliable system configuration and compliance with organizational security standards.',
        ],
      },
    ],
    projects: [
      {
        title: 'CrayFit: AI Diet Planner',
        description:
          'Built an AI-powered diet planning platform using LLMs and RAG-based personalized recommendation models, achieving 88% recommendation accuracy.',
        tech: ['Python', 'RAG', 'MERN', 'AWS'],
        color: 'from-blue-500 to-cyan-500',
        badge: 'Featured Build',
      },
      {
        title: 'Sentiment Analysis using Python',
        description:
          'Built an NLP-based sentiment analysis system with 84% accuracy on financial news data and visualized trends using Matplotlib.',
        tech: ['NLP', 'Data Analysis', 'APIs', 'Python'],
        color: 'from-green-500 to-emerald-500',
        badge: 'NLP System',
      },
      {
        title: 'EdTech Platform with Multi-Agent Career Counseling',
        description:
          'Built a multi-agent AI platform for personalized career counseling using LLMs and RAG, enabling context-aware career recommendations through autonomous AI agents.',
        tech: ['Python', 'Agentic AI', 'LangGraph', 'LLMs', 'RAG'],
        color: 'from-orange-500 to-red-500',
        badge: 'Intelligent Product',
      },
      {
        title: 'BrandSnap AI: GenAI for Social Media Content Creation',
        description:
          'Built an AI-powered content generation platform using LLMs to create brand-specific captions and marketing images, automating end-to-end social media workflows.',
        tech: ['GenAI', 'LLMs', 'NLP', 'Prompt Engineering'],
        color: 'from-purple-500 to-pink-500',
        badge: 'GenAI Product',
      },
    ],
  },
  product: {
    id: 'product',
    optionLabel: 'Product and Project Manager',
    optionShort: 'Product / PM',
    optionDescription:
      'Explore my product thinking, delivery, analytics, and stakeholder-facing profile.',
    currentLabel: 'Product and Project Manager',
    roleLine:
      'Product Thinker, Cross-Functional Collaborator, and Delivery-Oriented Builder',
    heroIntro:
      'For teams hiring product and project talent who can connect business goals, user needs, and execution.',
    resumeHref: '/assets/Resume_PM.pdf',
    resumeLabel: 'Download Product Resume',
    aboutParagraphs: [
      "I'm a final-year Computer Engineering student with experience building data-driven products to solve real-world business problems.",
      'I am skilled in stakeholder collaboration, data analysis, and translating user needs into scalable solutions that improve decision-making and user experience.',
      'I thrive in cross-functional teams, balancing product thinking, execution, and technical understanding to move ideas from concept to delivery.',
      'Beyond tech, I enjoy playing football, cooking, and traveling new places.',
    ],
    skills: [
      {
        title: 'Product & Business Skills',
        icon: 'briefcase',
        color: 'from-purple-500 to-pink-500',
        skills: [
          'Stakeholder Collaboration',
          'Product Thinking',
          'Agile & Scrum',
          'Problem Solving',
        ],
      },
      {
        title: 'Data & Analytics',
        icon: 'bar-chart',
        color: 'from-green-500 to-emerald-500',
        skills: ['MS Excel', 'Power BI', 'Tableau', 'Data Analysis', 'Data Visualization'],
      },
      {
        title: 'Technical Foundations',
        icon: 'code',
        color: 'from-indigo-500 to-purple-500',
        skills: ['C++', 'Python', 'SQL', 'DSA', 'DBMS', 'OOP'],
      },
      {
        title: 'Tools & Platforms',
        icon: 'toolbox',
        color: 'from-slate-500 to-slate-300',
        skills: ['JIRA', 'Git', 'GitHub', 'Postman'],
      },
      {
        title: 'Cloud Technologies',
        icon: 'cloud',
        color: 'from-blue-500 to-cyan-500',
        skills: ['AWS EC2', 'AWS S3', 'AWS VPC', 'Git', 'CI/CD'],
      },
      {
        title: 'Execution & Delivery',
        icon: 'rocket',
        color: 'from-orange-500 to-red-500',
        skills: [
          'Sprint Planning',
          'Requirement Gathering',
          'Cross-Functional Coordination',
          'Delivery Tracking',
        ],
      },
    ],
    studying: [
      {
        title: 'Product Lifecycle',
        icon: 'refresh-cw',
        color: 'from-purple-500 via-fuchsia-500 to-pink-500',
        points: [
          'Introduction, Growth, Maturity, Decline',
          'Product strategy per stage',
          'Lifecycle management and optimization',
        ],
      },
      {
        title: 'Market Sizing',
        icon: 'maximize',
        color: 'from-cyan-500 via-blue-500 to-indigo-500',
        points: [
          'TAM, SAM, SOM analysis',
          'Top-down vs Bottom-up estimation',
          'Market potential and opportunity evaluation',
        ],
      },
    ],
    experiences: [
      {
        company: 'IPride Solutions and Services',
        role: 'Machine Learning Intern',
        period: '28 June - Present',
        location: 'Pune / Remote',
        color: 'from-blue-500 to-indigo-500',
        achievements: [
          'Developed an AI stock analysis platform using NLP for real-time sentiment analysis, delivering 1.8x client returns.',
          'Developed a face-recognition attendance system, cutting college attendance time from 5 min to 45 sec.',
          'Worked in Agile teams using Jira to plan sprints, track progress, and ensure timely delivery of project milestones.',
        ],
      },
      {
        company: 'Ammunition Factory Khadki',
        role: 'Frontend Web Development Intern',
        period: '8 Jul - 7 Aug 2024',
        location: 'Pune, India',
        color: 'from-purple-500 to-pink-500',
        achievements: [
          'Developed user-friendly web interfaces to improve data collection efficiency and enhance user experience.',
          'Created Power BI dashboards to analyze sales data and support data-driven business decision-making.',
          'Collaborated with cross-functional teams in Agile sprints to define product features and deliver scalable solutions.',
        ],
      },
    ],
    projects: [
      {
        title: 'CrayFit: AI Diet Planner',
        description:
          'Defined user requirements and built logic for customized 7-day diet plans based on health data, improving relevance and personalization.',
        tech: ['User Requirements', 'Deep Learning', 'MERN', 'AWS'],
        color: 'from-blue-500 to-cyan-500',
        badge: 'Product Delivery',
      },
      {
        title: 'Sentiment Analysis using Python',
        description:
          'Generated insights from real-time data to support informed decision-making around financial sentiment and market behavior.',
        tech: ['NLP', 'Analytics', 'APIs', 'Decision Support'],
        color: 'from-green-500 to-emerald-500',
        badge: 'Insight Engine',
      },
      {
        title: 'EdTech Platform with Career Counseling Chatbot',
        description:
          'Focused on improving user experience through intelligent automation and data-driven insights for career guidance workflows.',
        tech: ['User Experience', 'NLP', 'Automation'],
        color: 'from-orange-500 to-red-500',
        badge: 'User-Centric Build',
      },
    ],
    caseStudies: [
      {
        title: 'Sample Product Case Study',
        summary:
          'A placeholder case study card covering problem framing, user needs, prioritization, execution, and measurable impact. Replace this PDF with your own later.',
        points: ['Problem framing', 'Stakeholder alignment', 'Prioritization and execution'],
        pdfHref: '/assets/case-study-sample.pdf',
      },
    ],
  },
}
