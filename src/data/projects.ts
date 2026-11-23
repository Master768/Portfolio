import type { Project } from '../types';

export const FEATURED_CASE_STUDIES: Project[] = [
  {
    id: 'personal-memory-rag-system',
    title: 'Personal Memory RAG System',
    shortTitle: 'Personal Memory RAG',
    category: 'AI Engineering / Retrieval-Augmented Generation',
    categoryType: 'ai-data-science',
    highlightTag: '130K+ Messages Processed',
    shortDescription:
      'A conversational analytics and Retrieval-Augmented Generation system indexing 130,000+ multi-platform chat messages with weighted dual-vector rank fusion and sub-95ms query latency.',
    fullDescription:
      'Personal Memory RAG System indexes, retrieves, and analyzes multi-platform chat histories from Discord and Instagram. The pipeline parses over 130,000 messages into a chronological, daily-threaded knowledge base. It leverages an ensemble retrieval engine with LangChain, FAISS (dense L2), and Chroma, achieving a 28% relevance boost via weighted rank fusion. Query workflows are orchestrated via a compiled LangGraph StateGraph with regex-based date extraction to eliminate temporal hallucinations. In-memory Pickle caching drops index loads to under 5ms and query response time from 850ms to under 95ms, serving asynchronous FastAPI endpoints and a responsive Chart.js dashboard.',
    
    // Case Study Narrative
    contextAndRole:
      'Solo Architect & AI Engineer. Conceptualized, designed, and implemented an end-to-end RAG system to transform 130,000+ unstructured, informal chat logs into a searchable, temporally grounded personal knowledge base.',
    problemAndConstraints:
      'Informal chat logs are heavily fragmented, conversational, and time-dependent. Standard fixed-token chunking splits dialogue threads across arbitrary boundaries, while standard vector similarity searches suffer from severe temporal hallucinations when asked about events on specific dates or months. Furthermore, initial vector lookups took upwards of 850ms per query.',
    processAndKeyDecisions: [
      {
        title: 'Chronological Daily Sliding-Window Chunking',
        decision:
          'Grouped messages chronologically by calendar day with sliding windows (50 messages with 10-message overlap).',
        tradeOff:
          'Chunking by conversational day rather than character count increases metadata indexing complexity, but completely preserves multi-turn dialogue context and natural temporal sequencing.'
      },
      {
        title: 'Dual-Vector Ensemble with Weighted Rank Fusion',
        decision:
          'Indexed chunks concurrently across FAISS (dense L2 index) and Chroma collections, ensembling candidate documents via reciprocal rank fusion.',
        tradeOff:
          'Doubles memory footprint for vector storage, but improved overall retrieval relevance by 28% and eliminated retrieval blind spots inherent in single-index vector stores.'
      },
      {
        title: 'Deterministic Temporal Pre-Filtering via LangGraph',
        decision:
          'Constructed a compiled LangGraph StateGraph pipeline where an initial regex extractor parses explicit dates/months and prunes mismatched candidates before final re-ranking.',
        tradeOff:
          'Requires structured regex normalization for varying date formats, but completely eliminates historical hallucinations where the LLM cited events from the wrong year.'
      },
      {
        title: 'In-Memory Pickle Caching Layer',
        decision:
          'Implemented an in-memory serialized Pickle cache for frequently accessed index shards and intermediate query states.',
        tradeOff:
          'Ties cache state to process memory, but slashed index load times from disk to under 5ms and reduced query round-trip latency from 850ms down to under 95ms.'
      }
    ],
    outcomeAndReflection: {
      measurableResults: [
        'Parsed and indexed 130,000+ conversational messages across Discord & Instagram archives.',
        'Improved semantic retrieval relevance by 28% through FAISS + Chroma weighted rank fusion.',
        'Slashed query latency from 850 ms to under 95 ms using in-memory Pickle caching.',
        'Reduced index shard load times to under 5 ms.',
        'Completely eliminated date hallucinations via LangGraph regex pre-filtering.'
      ],
      reflection:
        'In the next iteration, I would transition from local in-memory Pickle caching to a distributed Redis cluster to support multi-process horizontal scaling, and evaluate late-interaction ColBERT models for token-level retrieval precision on very short single-word chat queries.'
    },

    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'FAISS',
      'Chroma',
      'FastAPI',
      'OpenAI API / Gemini',
      'Pickle Caching',
      'spaCy',
      'Chart.js'
    ],
    architectureSteps: [
      {
        name: 'Data Parsing',
        role: '130K+ Multi-Platform Ingestion',
        tech: 'Python / JSON Parsers',
        description: 'Ingests and cleans 130,000+ chat messages from Discord and Instagram into structured chronological records.'
      },
      {
        name: 'Daily Chunking',
        role: 'Sliding-Window Threading',
        tech: 'LangChain / DateTime',
        description: 'Groups messages by calendar day with sliding windows (50 messages, 10 overlap) to preserve conversational context.'
      },
      {
        name: 'Dual Embeddings',
        role: 'Vector Indexing',
        tech: 'OpenAI / Gemini / spaCy',
        description: 'Generates high-dimensional semantic embeddings with automated local fallback to spaCy when external APIs throttle.'
      },
      {
        name: 'Ensemble Retrieval',
        role: 'Weighted Rank Fusion (+28%)',
        tech: 'FAISS + Chroma',
        description: 'Executes parallel lookups across FAISS dense L2 indexes and Chroma collections, ensembling results with rank fusion.'
      },
      {
        name: 'Temporal Filter',
        role: 'Hallucination Defense',
        tech: 'Regex / LangGraph',
        description: 'Extracts temporal entities from query text to prune non-matching temporal chunks before final scoring.'
      },
      {
        name: 'FastAPI & Cache',
        role: 'Sub-95ms Inference',
        tech: 'FastAPI / Pickle Cache',
        description: 'In-memory caching cuts query latency to under 95ms while serving asynchronous REST endpoints to Chart.js.'
      }
    ],
    architectureDiagramNote:
      '130K+ Messages → Daily Sliding Chunking → Dual FAISS + Chroma (+28% Relevance) → Regex Temporal Filter → Pickle Cache (<95ms) → FastAPI REST',
    githubUrl: 'https://github.com/Master768/personal-memory-rag-system',
    stats: [
      { label: 'Messages Processed', value: '130,000+' },
      { label: 'Relevance Boost', value: '+28% Rank Fusion' },
      { label: 'Query Latency', value: '< 95 ms' }
    ]
  },
  {
    id: 'pulse',
    title: 'Pulse.ai – Predictive Personal Analytics & Performance Engine',
    shortTitle: 'Pulse.ai',
    category: 'Data Science / Machine Learning',
    categoryType: 'ai-data-science',
    highlightTag: '0.9766 R² Score',
    shortDescription:
      'A personal performance intelligence platform processing 100,000 lifestyle logs across 500 profiles with a three-model ML ensemble for productivity scoring and burnout classification.',
    fullDescription:
      'Pulse.ai is a full-stack predictive personal performance platform engineered with Python, Pandas, Scikit-learn, React, Node.js/Express, Flask, and MongoDB. The system processes 100,000 lifestyle logs across 500 user profiles and deploys a three-model ML ensemble: Linear Regression predicting productivity from 13+ features (achieving a 0.9766 R² score and 3.52 RMSE), Logistic Regression classifying burnout risk across 20,000 test logs with 95% accuracy and a 0.92 macro F1-score, and a K-Means Persona Engine identifying four behavioral profiles with safety guardrails for sleep deprivation and extreme stress. Includes an XAI feature-attribution explainer and serialized .pkl pipelines.',
    
    // Case Study Narrative
    contextAndRole:
      'Solo ML & Full-Stack Engineer. Engineered the mathematical modeling, end-to-end data pipeline, Flask microservice, and full-stack web platform deployed on Vercel.',
    problemAndConstraints:
      'Knowledge workers and students struggle with the "productivity-burnout paradox": maximizing hours worked does not correlate with efficiency, and subjective self-assessment rarely detects impending cognitive fatigue before severe burnout occurs. The system had to process heterogeneous behavioral logs and serve sub-60ms predictions without blocking web traffic.',
    processAndKeyDecisions: [
      {
        title: 'Three-Model Machine Learning Ensemble',
        decision:
          'Architected three task-specific models rather than a single monolithic predictor: Linear Regression for continuous efficiency scoring, Logistic Regression for binary burnout risk, and K-Means for behavioral persona clustering.',
        tradeOff:
          'Requires maintaining three separate serialization pipelines, but each model is mathematically optimized for its specific task with zero interference between classification and regression weights.'
      },
      {
        title: 'Feature Standardization & Serialization Pipeline',
        decision:
          'Engineered a 13+ feature engineering pipeline (session frequencies, duration ratios, pause intervals, sleep metrics) using Scikit-learn StandardScaler and serialized pipelines into .pkl files.',
        tradeOff:
          'Requires strict schema validation at the ingestion layer, but ensures identical preprocessing between training cohorts and real-time live inference.'
      },
      {
        title: 'Explainable AI (XAI) Feature Attribution',
        decision:
          'Constructed a client-facing feature attribution engine that translates regression coefficients and logistic log-odds into transparent percentage drivers for the user.',
        tradeOff:
          'Adds lightweight compute overhead to the prediction payload, but completely demystifies the AI output so users understand exactly why their burnout risk increased.'
      }
    ],
    outcomeAndReflection: {
      measurableResults: [
        'Processed 100,000 lifestyle logs across 500 user profiles into reproducible feature matrices.',
        'Achieved a 0.9766 R² score and 3.52 RMSE on productivity prediction.',
        'Classified burnout risk across 20,000 test logs with 95% accuracy and a 0.92 macro F1-score.',
        'Identified 4 distinct behavioral archetypes via K-Means with safety guardrails for sleep loss.',
        'Deployed live production web platform on Vercel with Flask microservice serving <60ms responses.'
      ],
      reflection:
        'In future iterations, I would augment the tabular ML ensemble with recurrent or Temporal Convolutional Networks (TCN) to capture multi-week sequential fatigue dependencies rather than aggregating strictly across daily summary windows.'
    },

    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Flask',
      'Node.js',
      'Express',
      'React',
      'MongoDB',
      'Recharts'
    ],
    architectureSteps: [
      {
        name: 'Telemetry Ingestion',
        role: '100K Logs / 500 Profiles',
        tech: 'React / Node.js',
        description: 'Captures active timer sessions, task volumes, and pause durations from active users.'
      },
      {
        name: 'Feature Pipeline',
        role: '13+ Standardized Features',
        tech: 'Pandas / StandardScaler',
        description: 'Transforms raw activity telemetry into standardized numerical feature sets.'
      },
      {
        name: 'Productivity Predictor',
        role: 'Linear Regression (0.9766 R²)',
        tech: 'Scikit-learn',
        description: 'Predicts continuous efficiency output scores (0–100 scale) with 3.52 RMSE.'
      },
      {
        name: 'Burnout Classifier',
        role: 'Logistic Regression (95% Acc)',
        tech: 'Scikit-learn',
        description: 'Evaluates acute burnout risk probability across 20,000 test logs with 0.92 macro F1.'
      },
      {
        name: 'Persona Engine',
        role: 'K-Means Clustering',
        tech: 'Scikit-learn',
        description: 'Segments users into four behavioral profiles with safety guardrails for sleep loss.'
      },
      {
        name: 'XAI Explainer',
        role: 'Feature Attribution',
        tech: 'XAI Engine / Recharts',
        description: 'Displays the exact mathematical feature drivers behind each score directly to the user.'
      }
    ],
    architectureDiagramNote:
      '100K Logs → 13+ Feature Engineering → Linear Reg (0.9766 R²) + Logistic Reg (95% Acc) + K-Means → XAI Dashboard',
    githubUrl: 'https://github.com/Master768/pulse',
    liveDemoUrl: 'https://pulse-delta-sandy.vercel.app/',
    stats: [
      { label: 'R² Productivity Score', value: '0.9766' },
      { label: 'Burnout Accuracy', value: '95% (0.92 F1)' },
      { label: 'Lifestyle Logs', value: '100,000+' }
    ]
  },
  {
    id: 'aria',
    title: 'ARIA: Autonomous Research Intelligence for Analytics',
    shortTitle: 'ARIA',
    category: 'AI Engineering / Data Science Automation',
    categoryType: 'ai-data-science',
    highlightTag: '3% Numeric Gate & Self-Repair',
    shortDescription:
      'An agent-oriented Data Science intelligence framework with 3% numeric tolerance gates, self-correcting sandboxed runtimes, Groq API rotation, and local Ollama fallbacks.',
    fullDescription:
      'ARIA (Autonomous Research Intelligence for Analytics) is an open-source, BYOA (Bring-Your-Own-Agent) Data Science and Machine Learning framework. ARIA eliminates analytical hallucinations and data discrepancies by enforcing a 3% numeric tolerance gate and semantic verification across parallel OrchestratorAgent, DataAgent, and CriticAgent nodes. It features a self-correcting sandboxed runtime with a DebugAgent that classifies stack tracebacks and recursively repairs generated code. Features Groq API-key rotation with a local Ollama fallback pool, a 5-dimension data quality preprocessing agent, and Docker-based execution with AST sanitizers blocking unsafe imports.',
    
    // Case Study Narrative
    contextAndRole:
      'Creator & Framework Architect. Designed a local-first, zero-cloud-overhead autonomous research agent architecture operating directly in terminal and developer environments.',
    problemAndConstraints:
      'Autonomous coding LLMs frequently hallucinate mathematical statistics, produce syntax errors on large CSV/Parquet datasets, fail when API rate limits are hit, and present unverified conclusions to decision-makers without independent peer critique.',
    processAndKeyDecisions: [
      {
        title: '3% Numeric Tolerance Gate with CriticAgent',
        decision:
          'Enforced an independent validation phase where a CriticAgent recalculates derived statistical values and rejects outputs that deviate by more than 3% from ground-truth data.',
        tradeOff:
          'Adds an extra execution step to analytical workflows, but completely guarantees mathematical fidelity and eliminates statistical hallucinations.'
      },
      {
        title: 'Self-Correcting Runtime with DebugAgent',
        decision:
          'Built a recursive execution sandbox where traceback exceptions are intercepted, categorized, and handed to a DebugAgent that rewires the Python code until it runs successfully.',
        tradeOff:
          'Requires bounding recursion depth to prevent infinite loops, but achieves autonomous resilience without requiring human manual bug fixing.'
      },
      {
        title: 'Groq Key Rotation with Local Ollama Fallback Pool',
        decision:
          'Constructed a dynamic API manager that rotates across Groq API keys and seamlessly shifts queries to a local Ollama model pool during network partitions or rate limits.',
        tradeOff:
          'Requires local GPU/CPU resources when falling back, but guarantees 100% operational uptime without vendor lock-in.'
      }
    ],
    outcomeAndReflection: {
      measurableResults: [
        'Enforced a 3% numeric tolerance gate eliminating mathematical hallucinations in analytical reports.',
        'Built a self-repairing runtime with a DebugAgent that automatically classifies and fixes execution errors.',
        'Guaranteed zero downtime with Groq key rotation and local Ollama fallback pools.',
        'Integrated 5-dimension data quality assessment prior to automated hypothesis testing.',
        'Secured execution within Docker sandboxes with read-only volumes and AST import sanitizers.'
      ],
      reflection:
        'In the future, I plan to develop an interactive visual DAG viewer allowing users to trace real-time agent message routing and intermediate SQL queries on DuckDB live in the terminal.'
    },

    techStack: [
      'Python',
      'DuckDB',
      'SQL',
      'Docker',
      'Groq API',
      'Ollama',
      'Pandas',
      'NumPy',
      'AST Sanitizer'
    ],
    architectureSteps: [
      {
        name: 'Research Intake',
        role: 'Intent & Schema Profiling',
        tech: 'Alfred Concierge',
        description: 'Profiles datasets across five quality dimensions and assigns tasks to specialized agents.'
      },
      {
        name: 'API Key Rotation',
        role: 'Groq + Ollama Pool',
        tech: 'Key Pool Manager',
        description: 'Dynamically shifts traffic between Groq API keys and local Ollama instances.'
      },
      {
        name: 'Agent Execution',
        role: 'Orchestrator & DataAgent',
        tech: 'DuckDB / SciPy',
        description: 'Executes vectorized statistical calculations, hypothesis tests, and embedded DuckDB SQL.'
      },
      {
        name: 'DebugAgent Self-Repair',
        role: 'Recursive Code Healing',
        tech: 'Traceback Classifier',
        description: 'Catches runtime exceptions and recursively refactors generated Python scripts until verified.'
      },
      {
        name: '3% Tolerance Gate',
        role: 'CriticAgent Validation',
        tech: 'Numeric Verification',
        description: 'Recalculates statistical conclusions against a strict 3% numeric tolerance gate.'
      },
      {
        name: 'Sandboxed Export',
        role: 'AST Sanitized Output',
        tech: 'Docker / DOCX',
        description: 'Secures execution in Docker with read-only volumes and exports verified analytical reports.'
      }
    ],
    architectureDiagramNote:
      'Research Intake → Groq / Ollama Pool → Orchestrator & DataAgent → DebugAgent Self-Repair → 3% Numeric Gate → Docker Sandboxed Export',
    githubUrl: 'https://github.com/Master768/ARIA',
    stats: [
      { label: 'Numeric Tolerance', value: '3% Strict Gate' },
      { label: 'Self-Repair', value: 'DebugAgent Runtime' },
      { label: 'Inference Resilience', value: 'Groq + Ollama Pool' }
    ]
  },
  {
    id: 'whisperlink',
    title: 'WhisperLink',
    shortTitle: 'WhisperLink',
    category: 'Full-Stack / Real-Time Communication',
    categoryType: 'engineering',
    highlightTag: 'Real-Time Web Application',
    shortDescription:
      'An ephemeral, privacy-focused real-time chat and multi-format file sharing web application with disposable rooms, MongoDB TTL auto-expiry, and scheduled background file purges.',
    fullDescription:
      'WhisperLink is a full-stack, ephemeral communication platform engineered with React, Vite, Node.js, Express, Socket.io, and MongoDB. It enables instant disposable collaboration rooms secured by custom passphrases or automatically generated 6-digit codes. Features include live typing indicators, read receipts, message replies, a 5-minute message edit window, active presence tracking with a 40-second mobile reconnection grace period, and multi-format file transfers up to 25MB backed by automated 15-minute cron garbage collection sweeps.',
    
    // Case Study Narrative
    contextAndRole:
      'Full-Stack Developer. Architected the real-time event-driven Socket.io backend, MongoDB TTL persistence layer, and React frontend interface.',
    problemAndConstraints:
      'Traditional team chat tools retain persistent message histories and files indefinitely on third-party servers. Users needing quick, disposable collaboration require zero digital footprints, immediate room destruction after inactivity, and automatic file purging without manual maintenance.',
    processAndKeyDecisions: [
      {
        title: 'MongoDB TTL Auto-Expiration Architecture',
        decision:
          'Utilized MongoDB native TTL indexes (3600 seconds) on room documents, refreshing the `lastActive` timestamp upon every incoming message or socket interaction.',
        tradeOff:
          'Requires careful socket activity listeners, but guarantees that inactive rooms automatically self-destruct after exactly 1 hour without maintaining custom database polling jobs.'
      },
      {
        title: 'Automated 15-Minute Cron File Garbage Sweeper',
        decision:
          'Integrated Node-cron to run a background sweep every 15 minutes, inspecting file filesystem modification timestamps (mtimeMs) and permanently unlinking assets older than 60 minutes.',
        tradeOff:
          'Requires local filesystem permissions, but prevents disk exhaustion from abandoned uploads up to 25MB.'
      },
      {
        title: '40-Second Mobile Reconnection Grace Period',
        decision:
          'Implemented a server-side grace period timer keyed by room and user ID to absorb mobile app-switching and temporary network drops.',
        tradeOff:
          'Slightly delays "user left" broadcasts by 40 seconds, but completely eliminates false leave/join spam when users briefly switch apps on mobile devices.'
      }
    ],
    outcomeAndReflection: {
      measurableResults: [
        'Enforced strict 1-hour zero-retention ephemeral rooms via MongoDB TTL indexes.',
        'Engineered 15-minute automated Node-cron disk cleaner permanently purging expired files.',
        'Eliminated false disconnect alerts with a 40-second mobile reconnection grace period.',
        'Supported 25MB file transfers across 16+ MIME types with inline PDF/image streaming.',
        'Delivered real-time bi-directional messaging with Socket.io, typing indicators, and read receipts.'
      ],
      reflection:
        'In the next version, I would evaluate end-to-end client-side WebCrypto encryption so that even the host server has zero visibility into in-flight message payloads before disk unlinking.'
    },

    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Socket.io',
      'MongoDB',
      'Mongoose',
      'Multer',
      'Node-cron',
      'Tailwind CSS'
    ],
    architectureSteps: [
      {
        name: 'Client App',
        role: 'Real-Time React Frontend',
        tech: 'React / Vite / Socket.io-client',
        description: 'Renders JoinRoom and ChatRoom views, manages active user presence, typing indicators, and message events.'
      },
      {
        name: 'Express & Socket Server',
        role: 'Event-Driven Backend',
        tech: 'Node.js / Express 5 / Socket.io',
        description: 'Coordinates room authentication, broadcasts WebSocket events, and serves static upload endpoints.'
      },
      {
        name: 'Multer Upload Engine',
        role: 'File Ingestion & Validation',
        tech: 'Multer / DiskStorage',
        description: 'Validates file MIME types, limits file size to 25MB, and sanitizes storage paths.'
      },
      {
        name: 'MongoDB TTL Layer',
        role: 'Ephemeral Document Store',
        tech: 'MongoDB / Mongoose TTL',
        description: 'Enforces 1-hour expiry on rooms via lastActive TTL index; refreshed upon every message transmission.'
      },
      {
        name: 'Node-cron Garbage Collector',
        role: 'Automated File Sweeper',
        tech: 'Node-cron / fs.unlink',
        description: 'Runs every 15 minutes to inspect file timestamps and permanently unlinks disk files older than 60 minutes.'
      }
    ],
    architectureDiagramNote:
      'React Client ↔ Socket.io & Express API ↔ MongoDB (1-Hour TTL) + Multer Disk Engine ↔ Node-cron Scheduled Sweeper',
    githubUrl: 'https://github.com/Master768/Whisperlink',
    stats: [
      { label: 'Room Expiry', value: '1-Hour TTL' },
      { label: 'Upload Limit', value: '25 MB' },
      { label: 'Cleanup Sweep', value: 'Every 15 min' }
    ]
  },
  {
    id: 'transfer',
    title: 'Transfer — Mini Transfer.sh Clone',
    shortTitle: 'Transfer',
    category: 'Backend Engineering / Terminal File Sharing',
    categoryType: 'engineering',
    highlightTag: 'Terminal-First Service',
    shortDescription:
      'A lightweight, terminal-first file-sharing service built using Python and Flask, providing REST-based file uploads, downloads, and metadata retrieval.',
    fullDescription:
      'Transfer is a minimalist, terminal-first file sharing microservice built with Python and Flask. Designed for fast terminal workflows, it allows developers to upload, download, and inspect metadata directly via curl commands. The system features built-in security defenses including Werkzeug alphanumeric sanitization, path traversal prevention, dynamic mid-stream upload size limiters, process-local sliding window IP rate limiting, and an automated background expiration cleaner.',
    
    // Case Study Narrative
    contextAndRole:
      'Backend Engineer. Built a terminal-first REST API deployed on Render with Gunicorn to streamline file sharing from command-line environments.',
    problemAndConstraints:
      'Sharing logs, scripts, and debug data from remote SSH sessions traditionally requires leaving the terminal to use bloated web interfaces laden with ads and trackers. The service needed to accept direct streaming HTTP PUT requests while resisting DoS abuse and malicious path traversal attempts.',
    processAndKeyDecisions: [
      {
        title: 'Terminal-First Streaming via HTTP PUT',
        decision:
          'Built the ingestion endpoint to handle raw streaming PUT requests (`curl --upload-file`), returning an immediate shareable download URL.',
        tradeOff:
          'Requires users to interact via command line or REST clients, but provides the fastest possible sharing workflow for developers and system administrators.'
      },
      {
        title: 'Defensive Path Boundary & Werkzeug Sanitization',
        decision:
          'Enforced strict Werkzeug alphanumeric filename sanitization combined with absolute path resolution checks to block directory traversal (`../`) attacks.',
        tradeOff:
          'Removes exotic special characters from uploaded file titles, but guarantees system file integrity on the host container.'
      },
      {
        title: 'Sliding-Window IP Rate Limiter & Mid-Stream Size Guard',
        decision:
          'Implemented process-local IP sliding-window rate limiting and mid-stream byte counter checks that terminate oversized transfers instantly before complete upload.',
        tradeOff:
          'Rate limiting is process-local without external Redis dependencies, but keeps container overhead near zero while preventing resource exhaustion.'
      }
    ],
    outcomeAndReflection: {
      measurableResults: [
        'Terminal-first streaming uploads using simple curl PUT commands.',
        'Zero ad or JavaScript bloat with sub-second terminal URL generation.',
        '100% path traversal defense verified with Werkzeug secure_filename sanitization.',
        'Mid-stream transfer termination conserving server bandwidth on oversized uploads.',
        'Deployed production-ready WSGI service on Render with automatic file expiration.'
      ],
      reflection:
        'In the future, I would implement optional client-side passphrase encryption before transmission and integrate S3-compatible object storage backends for elastic capacity.'
    },

    techStack: [
      'Python',
      'Flask',
      'REST API',
      'Gunicorn',
      'Werkzeug',
      'Render',
      'Linux / Terminal'
    ],
    architectureSteps: [
      {
        name: 'curl PUT Request',
        role: 'Terminal Ingestion',
        tech: 'HTTP PUT / curl',
        description: 'Streams file bytes directly from the command line using standard curl syntax.'
      },
      {
        name: 'Flask Rate Limiter',
        role: 'DoS & Abuse Protection',
        tech: 'Sliding-Window IP Guard',
        description: 'Tracks IP request frequencies across moving time windows to throttle suspicious traffic.'
      },
      {
        name: 'Sanitization & Size Guard',
        role: 'Security & Stream Validation',
        tech: 'Werkzeug / Content-Length',
        description: 'Sanitizes filename strings, blocks directory traversal attempts, and halts oversized uploads mid-stream.'
      },
      {
        name: 'Disk Storage Engine',
        role: 'Atomic Persistence',
        tech: 'Python storage.py',
        description: 'Stores files with unique identifiers and records metadata timestamps in JSON.'
      },
      {
        name: 'Streaming Delivery',
        role: 'GET & Metadata API',
        tech: 'Flask send_file / JSON',
        description: 'Streams requested files with appropriate MIME headers or delivers JSON metadata payloads.'
      },
      {
        name: 'Background Cleaner',
        role: 'Expiration Worker',
        tech: 'Background Thread / Cron',
        description: 'Periodically sweeps the storage directory to purge files exceeding retention duration.'
      }
    ],
    architectureDiagramNote:
      'Terminal (curl PUT) → IP Rate Limiter → Stream Size Guard & Sanitization → Atomic Disk Storage → Streaming GET / Metadata API → Auto-Expiration Worker',
    githubUrl: 'https://github.com/Master768/transfer',
    stats: [
      { label: 'Client Tool', value: 'curl / CLI' },
      { label: 'Deployment', value: 'Render + Gunicorn' },
      { label: 'Security', value: 'Sliding-Window IP Limit' }
    ]
  }
];

export const ALL_PROJECTS = FEATURED_CASE_STUDIES.map(p => ({
  ...p,
  keyFeatures: p.keyFeatures || p.outcomeAndReflection.measurableResults,
  problemStatement: p.problemStatement || p.problemAndConstraints,
  solution: p.solution || p.processAndKeyDecisions.map(d => `${d.title}: ${d.decision}`).join(' '),
  engineeringChallenges: p.engineeringChallenges || p.processAndKeyDecisions.map(d => ({ challenge: d.title, solution: d.tradeOff }))
}));

export const AI_DATA_SCIENCE_PROJECTS = ALL_PROJECTS.filter(p => p.categoryType === 'ai-data-science');
export const ENGINEERING_PROJECTS = ALL_PROJECTS.filter(p => p.categoryType === 'engineering');
