import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-news-detective",
    title: "AI News Detective",
    description: "Fake News Detection Platform with ML-powered classification engine and real-time confidence scoring.",
    tech: ["FastAPI", "React", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    category: "AI/ML",
    links: {
      github: "https://github.com/bilal3898/fake-news-detection-platform",
      caseStudy: "#case-study-1",
    },
    keyFeatures: [
      "News Classification Engine with ML models",
      "Real-time confidence score metrics",
      "JWT-based authentication system",
      "Dockerized API backend with Redis caching",
      "Multi-model selection for optimal accuracy",
    ],
    architecture: "FastAPI backend with React frontend, PostgreSQL for structured data, MongoDB for unstructured news content, Redis for caching, and Docker for containerization.",
  },
  {
    id: "disease-prediction",
    title: "Multiple Disease Prediction System",
    description: "Predictive health analytics platform with ML models for disease diagnosis and interactive diagnostic dashboard.",
    tech: ["Python", "FastAPI", "Machine Learning", "React", "Scikit-Learn"],
    category: "AI/ML",
    links: {
      github: "https://github.com/bilal3898/Multiple-Disease-Prediction-System/tree/master",
    },
    keyFeatures: [
      "ML-based disease prediction models",
      "Low-latency API responses",
      "Interactive diagnostic dashboard",
      "Multi-disease support with accurate predictions",
      "Clean, user-friendly interface",
    ],
  },
  {
    id: "meerstyle",
    title: "MeerStyle",
    description: "MeerStyle is a full-stack e-commerce platform similar to Flipkart, Amazon, and Myntra but specialized for custom-stitched clothing. The platform allows customers to browse and purchase ready-made clothing, order custom-tailored outfits with their measurements, track orders in real-time, and manage their profiles and measurements.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    category: "Full Stack",
    links: {
      github: "https://github.com/bilal3898/Custom-tailored-clothing",
    },
    keyFeatures: [
      "Modern RESTful API architecture",
      "Responsive design with Tailwind CSS",
      "MongoDB for data persistence",
      "User authentication and authorization",
      "Performance-optimized frontend",
    ],
  },
  {
    id: "data-analysis-dashboard",
    title: "Smart Data Analysis Dashboard",
    description: "Comprehensive web application for data analysis and visualization with interactive platform for handling complex datasets.",
    tech: ["React.js", "Tailwind CSS", "Recharts", "Flask", "SQLAlchemy", "Pandas", "Scikit-Learn", "Docker"],
    category: "Full Stack",
    links: {
      github: "https://github.com/bilal3898/Data-Analysis-Dashboard",
    },
    keyFeatures: [
      "Data Upload with drag-and-drop (CSV, Excel, JSON)",
      "Automated Data Cleaning (missing values, outliers, duplicates)",
      "Interactive Visualizations with zoom, pan, and tooltips",
      "Machine Learning Integration for model training and deployment",
      "JWT-based Authentication for data privacy",
      "Custom Reports export (PDF, CSV, PNG, JSON)",
    ],
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Full-stack restaurant management system handling customer management, table reservations, menu, orders, billing, feedback, reports, and inventory.",
    tech: ["React.js", "Flask", "SQLite", "QR Code"],
    category: "Full Stack",
    links: {
      github: "https://github.com/bilal3898/QR-code-based-order-management-system-",
    },
    keyFeatures: [
      "Customer management and table reservations",
      "Menu handling and order management",
      "Billing and payment processing",
      "Customer feedback system",
      "Inventory management",
      "Comprehensive reports and analytics",
    ],
  },
];
