// Imports removed as icons are referenced by string name

export const profile = {
    contact: {
        email: "omichauhan427@gmail.com",
        studentEmail: "oc23mmb0a31@student.nitw.ac.in",
        phone: "+91-9770845401",
        linkedin: "https://www.linkedin.com/in/omii-chauhan/",
        github: "https://github.com/omichauhan-lgtm",
        location: "Warangal, India"
    },
    bio: {
        intro: "I am Omii, a systems-oriented Backend & Data Engineer. I specialize in building robust data infrastructure, scalable ETL pipelines, and high-performance ML orchestration architectures.",
        education: "B.Tech in Metallurgy and Materials Science at NIT Warangal (2023–2027)."
    },
    education: [
        {
            institution: "National Institute of Technology, Warangal",
            degree: "B.Tech in Metallurgy and Materials Science",
            year: "2023 – 2027",
            details: "Roll No.: 23MMB0A31"
        },
        {
            institution: "Telangana State Board of Intermediate Education",
            degree: "Class XII (Higher Secondary)",
            year: "2022",
            details: "Completed - 96%"
        },
        {
            institution: "Central Board of Secondary Education",
            degree: "Class X (Secondary School)",
            year: "2020",
            details: "Completed - 93%"
        }
    ],
    experience: [
        {
            role: "Open Source Contributor",
            company: "LangGraph (langchain-ai)",
            period: "Jul 2026 -- Present",
            location: "Remote",
            details: [
                "Concurrency Architecture: Patched a critical bug in ToolNode.ainvoke() where executions would freeze indefinitely due to silently swallowed SSE read timeouts (PR #8357).",
                "Timeout Control Plane: Introduced the `timeout` parameter to ToolNode async flow using asyncio.wait_for, enabling granular timeouts for network-bound and MCP tool executions.",
                "State Reducer Defaults: Resolved channel compilation behavior to correctly preserve Pydantic field defaults and default factories (e.g. `default_factory=lambda: ...`) when using annotated reducer functions (Issue #5225, PR #8361).",
                "Resilience Framework: Handled TimeoutErrors gracefully, converting network timeouts into standardized error ToolMessage objects or propagating them depending on user configuration."
            ]
        },
        {
            role: "Core Framework Contributor",
            company: "ADEN (Y Combinator)",
            period: "Feb 2026 -- Present",
            location: "Remote",
            details: [
                "Concurrency & Resilience: Engineered a per-key asynchronous locking strategy to resolve a critical TOCTOU race condition, and refactored the file-spillover and session checkpointing pipelines to isolate corrupted states, preventing silent execution failures on resume.",
                "Performance Engineering: Refactored legacy synchronous tool integrations (Exa, Apollo) to native asynchronous execution using httpx.AsyncClient, eliminating event-loop starvation.",
                "Advanced Swarm Consensus: Implemented the core engine for the Neutrosophic Scoring Module (RFC #7179), introducing multi-dimensional confidence logic for swarm decision-making.",
                "Security & Protocol Hardening: Patched critical directory traversal vulnerabilities across 13 routing endpoints and engineered a custom DNSSEC validation pipeline bypassing system resolvers to enforce Authenticated Data (AD) verification."
            ]
        },
        {
            role: "Data Analyst Intern",
            company: "Rajputana Vehicles Private Limited",
            period: "May 2025 -- June 2025",
            location: "Madhya Pradesh, India",
            details: [
                "Developed an automated ETL data pipeline using Python (Pandas) to process raw business data, eliminating 10+ hours/week of manual reporting.",
                "Architected customer segmentation models utilizing K-Means clustering on 50k+ transaction records, improving campaign targeting precision by 15%.",
                "Designed interactive KPI dashboards in Power BI to track EV adoption rates and inventory turnover, enabling data-backed strategic decisions for senior management."
            ]
        }
    ],
    achievements: [
        {
            title: "Electronic Arts (Forage)",
            desc: "Optimized C++ codebase for game stability. Proposed new features for EA Sports College Football."
        },
        {
            title: "JPMorgan Chase (Forage)",
            desc: "Analyzed loan books using quantitative methods. Implemented dynamic programming for default prediction."
        },
        {
            title: "HackerRank SQL (Advanced)",
            desc: "Certified - Top percentile in complex query optimization."
        }
    ],
    leadership: [
        {
            role: "PR Team Head",
            org: "Technozion (Technical Fest)",
            desc: "Led Public Relations for South India's largest technical fest."
        },
        {
            role: "Sponsorship Team Head",
            org: "Springspree (Cultural Fest)",
            desc: "Managed corporate sponsorships and partnerships."
        }
    ],
    skills: [
        { name: "Data & ML Pipelines", level: "Expert", icon: "Database", preset: "cyber-cyan" },
        { name: "Backend Infrastructure", level: "Advanced", icon: "Terminal", preset: "neon-purple" },
        { name: "Cloud & Docker", level: "Advanced", icon: "Cloud", preset: "sunset-orange" },
        { name: "FastAPI & Async", level: "Advanced", icon: "Zap", preset: "spotify-green" },
        { name: "C++ & Systems", level: "Intermediate", icon: "Cpu", preset: "luxury-gold" },
        { name: "Snowflake & dbt", level: "Advanced", icon: "Database", preset: "neon-purple" },
        { name: "TDD & QA", level: "Advanced", icon: "Shield", preset: "luxury-gold" },
        { name: "Git & DevOps", level: "Advanced", icon: "GitBranch", preset: "sunset-orange" }
    ],
    cognitive: [
        { name: "Trust (Cautious)", desc: "Calculated evaluation of situations", icon: "Shield", preset: "luxury-gold" },
        { name: "Risk (Consistent)", desc: "Stable execution in high-stakes", icon: "Zap", preset: "sunset-orange" },
        { name: "Attention (High)", desc: "Deep focus & distraction resistance", icon: "Target", preset: "cyber-cyan" },
        { name: "Learning (Agile)", desc: "Rapid info absorption & retention", icon: "BookOpen", preset: "neon-purple" }
    ],
    certifications: [
        { name: "Software Engineering", issuer: "Electronic Arts", date: "2025", icon: "🎮" },
        { name: "Quantitative Research", issuer: "JPMorgan Chase", date: "2025", icon: "📈" },
        { name: "SQL (Advanced)", issuer: "HackerRank", date: "Dec 2025", icon: "💎" },
        { name: "Advanced Python", issuer: "Kaggle", date: "Dec 2025", icon: "🐍" },
        { name: "Pandas", issuer: "Kaggle", date: "Dec 2025", icon: "🐼" }
    ],
    interests: ["Data Infrastructure", "Backend Architecture", "ML Engineering", "Systems Design", "Financial Tech", "Algorithmic Trading"],
    projects: [
        { title: "Visual Workflow Builder", desc: "Production-grade node-based pipeline editor with real-time DAG validation.", stack: "Full Stack" },
        { title: "Analytics Engineering System", desc: "Production-grade SQL/dbt Pipeline with CI/CD and Snowflake.", stack: "Data Engineering" },
        { title: "AI Hedge Fund Platform", desc: "Multi-agent LangGraph orchestration with Redis queues.", stack: "Backend Architecture" },
        { title: "Credit Risk Intelligence", desc: "Batch processing ML engine using Docker and FastAPI workers.", stack: "ML Infrastructure" },
        { title: "AutoSight SaaS", desc: "Automotive Market Analysis SaaS built with FastAPI and React.", stack: "Full Stack" },
        { title: "Quantitative Finance Tools", desc: "Python library for VaR and portfolio optimization.", stack: "Financial Tech" },
        { title: "Gridiron Tactics Engine", desc: "C++ Console Strategy Game with complex simulation loop.", stack: "Systems" }
    ]
}
