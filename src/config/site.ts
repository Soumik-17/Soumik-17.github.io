/**
 * ============================================================
 *  SITE CONFIGURATION — edit everything about your portfolio here.
 *  Any value still starting with "YOUR_" is treated as a placeholder:
 *  links using it are shown as "Coming Soon" instead of breaking.
 * ============================================================
 */

export const profile = {
  name: "Soumik Bhul",
  initials: "SB",
  greeting: "Hi, I'm",
  headline: "Building Insights, Intelligent Models & Data Solutions.",
  subtitle: "Data Analytics | Machine Learning | Data Engineering",
  intro:
    "I enjoy transforming raw data into meaningful insights, building predictive models, and developing data-driven solutions.",
  footerTagline: "Turning data into decisions.",
};

export const links = {
  github: "https://github.com/Soumik-17",
  linkedin: "https://www.linkedin.com/in/soumik-bhul/",
  email: "soumik.bhul.17@gmail.com",
  resume: "/resume.pdf", 
  phone: "+919735277061", 
  whatsapp: "919735277061", 
};

/** Skills section — edit groups and items freely. */
export const skillGroups = [
  { title: "Languages & Databases", items: ["Python", "SQL", "PostgreSQL"] },
  { title: "Data Analysis", items: ["Pandas", "Excel", "Jupyter Notebooks"] },
  { title: "Machine Learning", items: ["Scikit-learn", "Tensorflow"] },
  { title: "Visualization & Apps", items: ["Power BI", "Matplotlib", "Seaborn", "Streamlit"] },
  { title: "Data Engineering & Tools", items: ["Git", "Github", "ETL"] },
];

export const floatingSkills = [
  "Python", "SQL", "PostgreSQL", "Power BI", "Excel", "Pandas", "NumPy",
  "Scikit-learn", "LightGBM", "SHAP", "ETL", "Data Pipelines", "Streamlit",
  "Git", "Machine Learning", "Data Analytics",
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string; // URL or imported image; placeholder if starts with "["
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Grid Forecast Monitor",
    category: "Data Engineering / ETL / Data Analysis",
    description: "Monitors the accuracy and bias of US grid operators’ day-ahead demand forecasts: automated pipeline, drift detection, Streamlit dashboard.",
    image: "projects/grid-forecast-monitor.png",
    tech: ["Python", "Pandas", "Scikit-learn", "LightGBM","Streamlit"],
    liveUrl: "https://grid-forecast-monitor.streamlit.app/",
    githubUrl: "https://github.com/Soumik-17/grid-forecast-monitor",
  },
  {
    title: "CFPB Complaint Analytics",
    category: "Data Engineering / Data Analytics",
    description: "API ingestion, ETL and analysis of 5.5M CFPB consumer complaints (Python, SQLite, pandas)",
    image: "projects/cfpb-complaints.png",
    tech: ["Python", "Pandas", "Data Visualization", "SQLite"],
    liveUrl: "",
    githubUrl: "https://github.com/Soumik-17/cfpb-complaint-analytics",
  },
  {
    title: "Multi-Brand Marketing Campaign Analysis",
    category: "Data Analytics / EDA",
    description: "Which beauty brand spends its marketing budget the smartest? A Python EDA comparing Nykaa, Purplle & Tira.",
    image: "projects/eda-campaign.png",
    tech: ["Python", "Pandas", "Data Exploration", "Matplotlib", "Seaborn"],
    liveUrl: "",
    githubUrl: "https://github.com/Soumik-17/multibrand-marketing-eda",
  },
  {
    title: "Amazon Sales Analysis",
    category: "Data Analytics / BI",
    description: "End-to-end sales analysis dashboard built in Power BI from raw Amazon order data (2019–2022)",
    image: "projects/amazon-dashboard.png",
    tech: ["Python", "Pandas", "Power BI"],
    liveUrl: "",
    githubUrl: "https://github.com/Soumik-17/amazon-sales-analysis",
  },
  {
    title: "Terrain Recognition - SIH",
    category: "Deep Learning / Data Visualization",
    description: "Built an U-Net Model to identify variety of trends for SIH Internal Hackathon",
    image: "projects/terrain-recognition.png",
    tech: ["Python", "Tensorflow", "Keras", "Matplotlib"],
    liveUrl: "",
    githubUrl: "https://github.com/Soumik-17/Terrain_Recog",
  },
];

/** True when a value hasn't been filled in yet. */
export const isPlaceholder = (v?: string) =>
  !v || v.startsWith("YOUR_") || v.startsWith("[");
