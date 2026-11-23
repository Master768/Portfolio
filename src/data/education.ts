import type { EducationItem } from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'Vellore Institute of Technology (VIT)',
    duration: 'Jun 2025 — May 2027',
    status: 'In Progress (Chennai, India)',
    description:
      'Advanced postgraduate study in Data Science, Machine Learning, Deep Neural Networks, Natural Language Processing, and Distributed Data Systems. CGPA: 7.66',
    coursework: [
      'Machine Learning & Deep Learning',
      'Neural Networks & Time Series (LSTM, TCN)',
      'Natural Language Processing (NLP)',
      'Vector Databases & Retrieval-Augmented Generation',
      'Big Data Pipelines & ETL Engineering',
      'Statistical Modeling & Model Evaluation'
    ],
    certifications: [
      'Retrieval-Augmented Generation (RAG) Architecture',
      'Deep Learning & Time Series Forecasting',
      'Full-Stack AI Application Engineering'
    ],
    achievements: [
      'Built and evaluated production RAG systems processing 130,000+ conversational records',
      'Designed self-correcting multi-agent frameworks (ARIA) with numeric tolerance gates',
      'Engineered multi-model predictive ML platforms (Pulse.ai) achieving 0.9766 R² score'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Nrupathunga University',
    duration: 'Oct 2021 — Aug 2024',
    status: 'Graduated | CGPA: 8.30 (Bangalore, India)',
    description:
      'Comprehensive undergraduate computer applications education covering Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, and Software Engineering.',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (MySQL, PostgreSQL)',
      'Object-Oriented Programming (Python, Java)',
      'Operating Systems & Networking',
      'Web Development & REST APIs',
      'Software Engineering Methodologies'
    ],
    achievements: [
      'Graduated with distinction (CGPA: 8.30)',
      'Built backend microservices and terminal utility applications (Transfer, WhisperLink)',
      'Active developer contributor across Python and JavaScript ecosystems on GitHub'
    ]
  }
];

export const PROFILE_INFO = {
  name: 'Ravindran A',
  title: 'AI Engineer',
  phone: '+91 8217561571',
  email: 'ravindran1245@outlook.com',
  githubUsername: 'Master768',
  githubUrl: 'https://github.com/Master768',
  linkedinUrl: 'https://www.linkedin.com/in/ravindran-a-892377248',
  resumeDownloadUrl: '/Ravindran_resume.pdf',
  headline: 'Building Intelligent Systems. Engineering Real-World Solutions.',
  subheadline:
    'AI Engineer and Data Science postgraduate experienced in building Retrieval-Augmented Generation (RAG) systems, machine learning models, and end-to-end data pipelines.',
  aboutIntro:
    'AI Engineer and Data Science postgraduate experienced in building Retrieval-Augmented Generation (RAG) systems, machine learning models, and end-to-end data pipelines. Skilled in Python, SQL, Natural Language Processing (NLP), vector databases, and LLM application development using FastAPI, LangChain, FAISS, and OpenAI APIs. Experienced developing AI-driven analytics solutions, predictive models, and interactive dashboards for real-world applications.',
  interests: [
    'AI Engineering',
    'RAG Systems',
    'Machine Learning',
    'Deep Learning',
    'Time Series (LSTM/TCN)',
    'Data Pipelines & ETL',
    'Vector Search (FAISS/Chroma)',
    'Backend Engineering'
  ]
};
