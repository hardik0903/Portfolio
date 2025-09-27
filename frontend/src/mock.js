// Mock data for Hardik Pandey's Portfolio

export const personalInfo = {
  name: "Hardik Pandey",
  email: "hardikpandey0903@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/hardik-pandey-profile/",
    github: "https://github.com/hardik0903",
    codolio: "https://codolio.com/profile/hardikpandey",
    medium: "https://medium.com/@hardikpandey0903"
  },
  resumeLink: "https://drive.google.com/file/d/1PJMwWLnQ-P7FXKXg51vzGm-ZAGvZOQOO/view?usp=sharing",
  title: "AI & Machine Learning Student",
  subtitle: "Building impactful AI solutions to solve real-world problems",
  location: "Bhopal, India"
};

export const aboutMe = {
  description: `Hello! I'm Hardik Pandey, a penultimate-year AI and Machine Learning student at VIT, located in Bhopal—India's City of Lakes.

While I maintain a high academic standing with a 9.08/10.0 CGPA, my true passion lies in applying this knowledge to build tangible, end-to-end solutions that solve real-world problems.

This drive led me to co-found Ascraa, an AI-powered platform designed to revolutionize student hiring through video-resume analysis.

My core principle is to approach engineering with a product-first mindset, ensuring every technical solution delivers clear, measurable value.

I am actively seeking a challenging software engineering internship for Summer 2026 to contribute to impactful projects and learn from an industry-leading team.`,
  activities: [
    "Coding",
    "Reading", 
    "Designing",
    "Problem Solving",
    "Team Management"
  ]
};

export const projects = [
  {
    id: "tweet-analyzer",
    title: "Tweet Analyzer",
    description: "This is a powerful and scalable platform for real-time tweet analysis and campaign tracking. It provides a comprehensive suite of tools to monitor trends, analyze sentiment, identify key influencers, and measure the impact of your social media campaigns.",
    tech: ["Firebase", "React", "Next.js"],
    image: "https://customer-assets.emergentagent.com/job_hardik-portfolio/artifacts/3h7araz8_sentinelx.png",
    liveLink: "https://sentinelx-codez.vercel.app/",
    featured: true
  },
  {
    id: "rag",
    title: "RAG",
    description: "This project is an advanced Retrieval-Augmented Generation (RAG) chatbot that enables users to upload PDF documents and receive intelligent, context-aware answers. The system effectively transforms static documents into a dynamic, conversational knowledge base, making complex information easily accessible.",
    tech: ["LLM", "Python", "LangChain"],
    image: "https://customer-assets.emergentagent.com/job_hardik-portfolio/artifacts/qmwivd3e_insightflow.png",
    liveLink: "https://rag-work.vercel.app/",
    featured: true
  },
  {
    id: "ascraa",
    title: "Ascraa",
    description: "The core innovation is a video-resume system using computer vision and deep learning to verify identity and detect deepfakes, aiming to cut recruiter screening time by 50%. I am leading the architecture of the backend, the ML pipeline for candidate scoring, and the scalable job-matching algorithm.",
    tech: ["Tensorflow", "Python", "Keras"],
    image: "https://customer-assets.emergentagent.com/job_hardik-portfolio/artifacts/q2dkgm3z_ascraa.png",
    liveLink: "https://ascraa.in/",
    featured: true,
    status: "In Development"
  },
  {
    id: "brokerverse",
    title: "BrokerVerse",
    description: "It provides a platform for investors to lodge and track complaints against listed companies and registered intermediaries. The core of the project is a modern, server-rendered application built with Next.js, featuring a robust API and a seamless user interface.",
    tech: ["FastAPI", "React", "Next.js", "Vercel"],
    image: "https://customer-assets.emergentagent.com/job_hardik-portfolio/artifacts/wrd2ysrk_Screenshot%202025-09-27%20214916.png",
    liveLink: "https://mock-repo-neon.vercel.app/",
    featured: true
  }
];

// Detailed project data for individual pages
export const projectDetails = {
  "tweet-analyzer": {
    title: "Tweet Analyzer",
    subtitle: "Real-time Social Media Analytics Platform",
    description: "This project is a high-performance backend system and accompanying web dashboard designed for real-time social media analytics, specifically focusing on Twitter data. It provides a comprehensive suite of tools for monitoring trends, analyzing public sentiment, tracking marketing campaigns, and identifying harmful content.",
    
    techStack: {
      backend: "Python 3.9+, FastAPI",
      database: "PostgreSQL / MongoDB",
      deployment: "Docker, Cloud Services (GCP/AWS/Azure)",
      core: "Data Analysis, Campaign Management, Reporting, Visualization"
    },
    
    outcomes: [
      "Data-Driven Strategy: Make informed decisions by leveraging real-time insights into public opinion, trending topics, and campaign performance.",
      "Enhanced Campaign ROI: Accurately measure the impact and reach of social media campaigns by tracking key metrics and visualizing engagement heatmaps.",
      "Proactive Brand Management: Monitor brand sentiment in real-time and quickly respond to public feedback or emerging crises.",
      "Improved Content Moderation: Automatically identify and flag potentially harmful or hateful content using a sophisticated scoring system.",
      "Identification of Key Influencers: Discover key nodes and influencers within a network through graphical analysis of user interactions.",
      "Competitive Analysis: Track keywords and campaigns related to competitors to gain a competitive edge.",
      "Automated Reporting: Streamline the reporting process by generating comprehensive PDF reports with a single API call."
    ],
    
    problemsSolved: [
      "Information Overload: Automates the process of collecting, processing, and analyzing millions of tweets, transforming raw data into actionable intelligence.",
      "Delayed Insights: Provides real-time metrics, allowing for immediate reaction to trends and events.",
      "Measuring Campaign Effectiveness: Provides concrete metrics (sentiment, engagement, reach by location) to quantify social media campaign success.",
      "Detecting Coordinated Harmful Behavior: Analyzes networks and scores content to identify coordinated hate speech campaigns or bot-like activity.",
      "Lack of Integrated Tooling: Combines trend analysis, campaign management, sentiment analysis, and reporting into a single, cohesive platform."
    ],
    
    methodology: {
      architecture: "Modern, microservices-oriented architecture designed for scalability and performance",
      dataIngestion: "Dedicated service connects to Twitter API stream, capturing relevant tweets based on predefined keywords, hashtags, or user accounts",
      processing: "Asynchronous processing using message queues (RabbitMQ, Kafka) to handle high volumes of data",
      nlpEngine: "Worker services perform sentiment analysis, hate speech detection, and keyword extraction",
      storage: "Processed data stored in scalable database optimized for fast querying and aggregation",
      api: "FastAPI backend provides asynchronous, high-concurrency, low-latency request handling"
    },
    
    usage: {
      dashboard: "https://6000-firebase-studio-1756783750571.cluster-lu4mup47g5gm4rtyvhzpwbfadi.cloudworkstations.dev/dashboard",
      features: [
        "View real-time graphs of trending keywords",
        "Explore leaderboards for the most viral or most hated tweets",
        "Visualize tweet locations on a world map",
        "Create, monitor, and manage campaigns",
        "Generate and download PDF reports with one click"
      ]
    },
    
    buildingProcess: [
      "Clone the Repository: git clone https://github.com/your-username/your-repository.git",
      "Setup Virtual Environment: python -m venv venv && source venv/bin/activate",
      "Install Dependencies: pip install -r requirements.txt",
      "Configure Environment: Create .env file with database credentials and API secrets",
      "Run the Server: uvicorn main:app --reload",
      "Access API at http://127.0.0.1:8000 and documentation at http://127.0.0.1:8000/docs"
    ]
  },
  
  "rag": {
    title: "RAG System",
    subtitle: "Retrieval-Augmented Generation Chatbot",
    description: "This project is a sophisticated Retrieval-Augmented Generation (RAG) system with an interactive web interface designed for querying and conversing with PDF documents. It transforms static, unstructured text into a dynamic knowledge base.",
    
    techStack: {
      frontend: "Streamlit",
      backend: "Python 3.9+, LangChain",
      ai: "Google Gemini Pro (LLM), Sentence Transformers (Embeddings)",
      database: "Pinecone (Vector Store)"
    },
    
    outcomes: [
      "Conversational Document Access: Transform any static PDF into an interactive chat partner",
      "Accurate & Grounded Answers: Receive answers directly based on source material, reducing LLM hallucinations",
      "Rapid Knowledge Extraction: Quickly find specific information within large documents",
      "Personalized Knowledge Bases: Create custom, domain-specific knowledge bases instantly",
      "Intuitive User Experience: Clean web interface requiring no technical expertise",
      "Efficient Workflow: Drastically reduce time for document review and analysis"
    ],
    
    problemsSolved: [
      "Information Overload: Automates sifting through hundreds of pages of text",
      "Inefficient Manual Search: Replaces keyword-based searching with semantic search",
      "Unlocking Unstructured Data: Makes knowledge in PDFs fully accessible and useful",
      "Context-Deficient Queries: Provides rich, contextual answers unlike simple search engines"
    ],
    
    methodology: {
      architecture: "Retrieval-Augmented Generation (RAG) architecture ensuring grounded responses",
      ingestion: "Text extraction, chunking, vectorization using Sentence Transformers, indexing in Pinecone",
      retrieval: "Query embedding, similarity search, context augmentation",
      generation: "Answer synthesis using Google Gemini Pro LLM"
    },
    
    usage: {
      url: "http://localhost:8501",
      workflow: [
        "Launch application and navigate to URL",
        "Upload PDF document using file uploader",
        "Wait for processing confirmation",
        "Type questions in chat input box",
        "View AI responses based on document content"
      ]
    },
    
    buildingProcess: [
      "Clone Repository: git clone https://github.com/hardik0903/RAG2.git",
      "Setup Virtual Environment: python -m venv venv && source venv/bin/activate",
      "Install Dependencies: pip install -r requirements.txt",
      "Configure Environment: Create .env with GOOGLE_API_KEY and PINECONE_API_KEY",
      "Run Application: streamlit run app.py",
      "Access at http://localhost:8501"
    ]
  },
  
  "ascraa": {
    title: "Ascraa",
    subtitle: "AI-Powered Video Resume Platform",
    description: "The core innovation is a video-resume system using computer vision and deep learning to verify identity and detect deepfakes, aiming to cut recruiter screening time by 50%.",
    status: "In Development",
    techStack: {
      ai: "Tensorflow, Keras, Computer Vision",
      backend: "Python, Machine Learning Pipeline",
      algorithms: "Deep Learning, Identity Verification, Deepfake Detection"
    }
  },
  
  "brokerverse": {
    title: "BrokerVerse",
    subtitle: "SEBI Complaint Redressal System Clone",
    description: "A full-stack web application that replicates the core functionalities of the official SEBI Complaint Redressal System (SCORES). It provides a platform for investors to lodge and track complaints against listed companies and registered intermediaries.",
    
    techStack: {
      frontend: "Next.js 14+, React 18+, Tailwind CSS, Framer Motion",
      backend: "Next.js API Routes, Node.js",
      database: "MongoDB with Mongoose",
      auth: "JSON Web Tokens (JWT), bcryptjs",
      deployment: "Vercel"
    },
    
    outcomes: [
      "Efficient Grievance Redressal: Streamlined digital platform for filing and tracking complaints",
      "Centralized Complaint Management: Single dashboard for managing all complaints with clear status indicators",
      "Secure Communication: Protected user data through secure authentication and data handling",
      "Full-Stack Development Showcase: Real-world implementation example covering UI/UX to database modeling",
      "Modern Auth Patterns: Practical guide to JWT-based authentication with Next.js Middleware"
    ],
    
    problemsSolved: [
      "Fragmentation: Eliminates need for multiple channels by providing unified portal",
      "Lack of Transparency: Provides direct visibility into complaint status",
      "Inefficiency: Replaces cumbersome paperwork with structured digital forms",
      "Accessibility Barriers: Web-based platform accessible anytime, anywhere"
    ],
    
    methodology: {
      architecture: "Modern, monolithic architecture using Next.js framework",
      rendering: "Server and client-side rendering with React components and Tailwind CSS",
      backend: "Next.js API Routes as serverless functions for business logic",
      auth: "JWT tokens in http-only cookies with custom middleware protection",
      database: "Mongoose ODM for User and Complaint collections in MongoDB"
    },
    
    usage: {
      live: "https://mock-repo-neon.vercel.app/",
      local: "http://localhost:3000",
      workflow: [
        "Registration: Create account with name, email, password",
        "Login: Access personal dashboard",
        "Dashboard: Overview of all complaints and their status",
        "Lodge Complaint: Fill detailed form and submit grievance",
        "Track Status: Monitor complaint progress over time"
      ]
    },
    
    buildingProcess: [
      "Clone Repository: git clone https://github.com/arfaive2004/SEBI-WEB.git",
      "Navigate to Directory: cd SEBI-WEB",
      "Install Dependencies: npm install",
      "Configure Environment: Create .env.local with MONGODB_URI and JWT_SECRET",
      "Run Server: npm run dev",
      "Access at http://localhost:3000"
    ]
  }
};