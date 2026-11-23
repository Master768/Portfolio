import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Core Languages',
    description: 'Languages used across production AI systems, data pipelines, and embedded database layers.',
    skills: [
      { name: 'Python', context: 'Data Science, RAG, ML/DL Pipelines, FastAPI, LangChain', highlight: true },
      { name: 'SQL', context: 'Relational querying, PostgreSQL, MySQL, DuckDB analytical SQL', highlight: true },
      { name: 'JavaScript / TypeScript', context: 'Interactive dashboards, React, Node.js & Chart.js' }
    ]
  },
  {
    title: 'AI, Deep Learning & Machine Learning',
    description: 'Theoretical foundations and production modeling from time-series to multi-model ensembles.',
    skills: [
      { name: 'Machine Learning', context: 'Supervised & unsupervised pipelines, cross-validation', highlight: true },
      { name: 'Deep Learning & Neural Networks', context: 'Neural architecture design, feature representations', highlight: true },
      { name: 'Random Forest & XGBoost', context: 'Gradient boosted decision trees for tabular classification', highlight: true },
      { name: 'LSTM & TCN Models', context: 'Long Short-Term Memory & Temporal Convolutional Networks', highlight: true },
      { name: 'Natural Language Processing (NLP)', context: 'Text tokenization, semantic embeddings, regex parsers', highlight: true },
      { name: 'Time Series Forecasting', context: 'Sequential trend analysis, lag features, moving windows' },
      { name: 'Model Evaluation', context: 'R² metrics, RMSE, Macro F1-score, precision/recall curves' }
    ]
  },
  {
    title: 'LLM, RAG & Vector Intelligence',
    description: 'Retrieval architectures, StateGraph workflows, and vector embeddings.',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', context: 'Sliding-window daily chunking & weighted rank fusion', highlight: true },
      { name: 'LangChain & LangGraph', context: 'StateGraph orchestration, deterministic routing, metadata extractors', highlight: true },
      { name: 'Vector DBs (FAISS & Chroma)', context: 'Dense L2 similarity search & collections storage', highlight: true },
      { name: 'OpenAI & Gemini APIs', context: 'Context-grounded synthesis, schema generation, API rotation' },
      { name: 'Prompt Engineering', context: 'Few-shot prompting, guardrails, schema enforcement', highlight: true },
      { name: 'Ollama & Local Fallbacks', context: 'Offline resilience, spaCy embeddings, fallback pools' }
    ]
  },
  {
    title: 'Data Processing, Pipelines & ETL',
    description: 'High-volume data cleaning, feature engineering, and automated extraction.',
    skills: [
      { name: 'Pandas & NumPy', context: 'Vectorized mathematical manipulation & multidimensional arrays', highlight: true },
      { name: 'Scikit-learn', context: 'StandardScaler, OneHotEncoder, Linear/Logistic regression, K-Means', highlight: true },
      { name: 'Data Pipelines & ETL', context: 'Automated ingestion, data dimension scoring, serialization', highlight: true },
      { name: 'Web Scraping (BeautifulSoup)', context: 'Automated HTML parsing, content extraction & structuring' }
    ]
  },
  {
    title: 'Databases, Frameworks & Tooling',
    description: 'Production API serving, caching layers, business intelligence, and containerization.',
    skills: [
      { name: 'FastAPI', context: 'High-speed asynchronous REST endpoints & schema validation', highlight: true },
      { name: 'Redis', context: 'In-memory caching, rate-limiting & sub-millisecond lookups', highlight: true },
      { name: 'PostgreSQL & MySQL', context: 'Relational data modeling, indexing, foreign key integrity' },
      { name: 'Streamlit', context: 'Rapid prototyping for AI models & interactive data exploration' },
      { name: 'Power BI & Tableau', context: 'Executive analytics, KPI tracking & visual intelligence', highlight: true },
      { name: 'Git & GitHub', context: 'Version control, branch workflows, open-source repositories' },
      { name: 'Docker', context: 'Sandboxed runtimes, read-only volumes & isolated execution' }
    ]
  }
];

export const FOCUS_AREAS = [
  {
    title: 'Designing Intelligent RAG Applications',
    description: 'Building retrieval-augmented systems with daily-threaded chunking, FAISS + Chroma rank fusion, and regex temporal filters.',
    icon: 'Layers'
  },
  {
    title: 'Multi-Model Machine Learning Ensembles',
    description: 'Developing high-precision pipelines (Linear Regression + Logistic Regression + K-Means) with 0.9766 R² scores and 95% classification accuracy.',
    icon: 'Brain'
  },
  {
    title: 'Multi-Agent Frameworks & Automation',
    description: 'Architecting self-correcting agent environments (ARIA) with numeric tolerance gates, DebugAgents, and API rotation pools.',
    icon: 'Network'
  },
  {
    title: 'Scalable APIs & Caching Infrastructure',
    description: 'Serving sub-95ms query latencies using FastAPI, in-memory Pickle caching, Redis, and glassmorphic dashboards.',
    icon: 'Server'
  },
  {
    title: 'End-to-End Data Pipelines & Analytics',
    description: 'Extracting, preprocessing, and transforming 130,000+ data points with Pandas, NumPy, and DuckDB into verified insights.',
    icon: 'Sparkles'
  }
];
