export interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    image: string
    github: string
    demo?: string
}

export const projects: Project[] = [
    {
        id: 8,
        title: "Visual Workflow Builder",
        description: "Production-grade node-based pipeline editor with real-time DAG validation using Kahn's Algorithm (Topological Sort). Features an extensible BaseNode abstraction, reducing boilerplate by 40%, and state synchronization using Zustand.",
        tech: ["React Flow", "React", "Zustand", "FastAPI", "Python", "REST APIs"],
        image: "/omi-portfolio/assets/workflow_builder_thumb.png",
        github: "https://github.com/omichauhan-lgtm/vectorshift-assessment",
        demo: "https://frontend-tau-gules-tjmhfwi1bj.vercel.app"
    },
    {
        id: 6,
        title: "End-to-End Analytics Engineering",
        description: "Modern Data Stack implementation. Processed and transformed 1M+ synthetic sales records using dbt models and Snowflake warehouse pipelines, enforcing strict schema validation via CI/CD.",
        tech: ["Advanced SQL", "dbt Modeling", "Snowflake", "Data Warehousing", "CI/CD"],
        image: "/omi-portfolio/assets/analytics_architecture.png",
        github: "https://github.com/omichauhan-lgtm/advanced-analytics-engineering",
        demo: "#"
    },
    {
        id: 5,
        title: "AI Multi-Strategy Fund Architect",
        description: "Autonomous Hedge-Fund-as-a-Service infrastructure. Built a multi-agent orchestration workflow using LangGraph and Redis queues, where independent agents generate allocation signals asynchronously.",
        tech: ["Python", "Next.js 14", "LangGraph", "FastAPI", "Redis"],
        image: "/omi-portfolio/assets/hedge_fund_thumb.png",
        github: "https://github.com/omichauhan-lgtm/ai-hedge-fund-platform",
        demo: "#"
    },
    {
        id: 7,
        title: "Quantitative Finance Tools",
        description: "High-performance Python library for portfolio optimization (MVO) and rigorous risk metrics (VaR, CVaR). Designed for algorithmic trading workflows.",
        tech: ["Python", "NumPy", "SciPy", "Financial Math"],
        image: "/omi-portfolio/assets/quantitative_finance_thumbnail.png",
        github: "https://github.com/omichauhan-lgtm/quantitative-finance-tools",
        demo: "#"
    },
    {
        id: 4,
        title: "E-Commerce Sales Analytics Engine",
        description: "Robust EDA pipeline processing 5,000+ records. Automated data cleaning and publication-ready Seaborn visualization generation for revenue trend analysis.",
        tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Cleaning"],
        image: "/omi-portfolio/assets/ecommerce_analytics_thumbnail.png",
        github: "https://github.com/omichauhan-lgtm/python-eda-starter",
        demo: "#"
    },
    {
        id: 1,
        title: "AutoSight SaaS",
        description: "AI-Powered Automotive Market Analysis Platform. Multi-tenant SaaS for demand forecasting and customer segmentation.",
        tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
        image: "/omi-portfolio/assets/customer_segments.png",
        github: "https://github.com/omichauhan-lgtm/automotive-market-demand",
        demo: "#"
    },
    {
        id: 2,
        title: "Credit Risk Intelligence",
        description: "Engineered a containerized batch processing engine (Docker) capable of scoring 10,000+ loan applications asynchronously via FastAPI workers, computing EAD and LGD metrics.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Docker", "FastAPI"],
        image: "/omi-portfolio/assets/credit_risk_dashboard_ui.png",
        github: "https://github.com/omichauhan-lgtm/credit-risk-saas",
        demo: "https://credit-risk-saas.streamlit.app"
    },
    {
        id: 3,
        title: "Gridiron Tactics Engine",
        description: "C++ Console Strategy Game. features a complex gameplay loop connecting a 'Film Room' analysis simulator with a persistent inventory economy. Demonstrates advanced OOP and System Architecture.",
        tech: ["C++17", "STL", "Object-Oriented Design", "Memory Management"],
        image: "/omi-portfolio/assets/gridiron_tactics.png",
        github: "https://github.com/omichauhan-lgtm/gridiron-tactics",
        demo: "#"
    }
]
