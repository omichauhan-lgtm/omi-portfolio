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
        id: 5,
        title: "AI Multi-Strategy Fund Architect",
        description: "Autonomous Hedge-Fund-as-a-Service infrastructure. AI Agents generate strategies, optimize portfolios using Risk Parity, and execute regime-aware rebalancing. Non-custodial.",
        tech: ["Python", "Next.js 14", "LangGraph", "FastAPI", "TailwindCSS"],
        image: "/omi-portfolio/assets/hedge_fund_thumb.png",
        github: "https://github.com/omichauhan-lgtm/ai-hedge-fund-platform",
        demo: "#"
    },
    {
        id: 5,
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
        description: "Automated Credit Risk Assessment SaaS. Uses machine learning to predict borrower default risks.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        image: "/omi-portfolio/assets/credit_risk_dashboard_ui.png",
        github: "https://github.com/omichauhan-lgtm/credit-risk-saas",
        demo: "#"
    },
    {
        id: 3,
        title: "Gridiron Tactics Engine",
        description: "C++ Console Strategy Game. features a complex gameplay loop connecting a 'Film Room' analysis simulator with a persistent inventory economy. Demonstrates advanced OOP and System Architecture.",
        tech: ["C++17", "STL", "Object-Oriented Design", "Memory Management"],
        image: "/omi-portfolio/assets/gridiron_tactics.png",
        github: "https://github.com/omichauhan-lgtm/gridiron-tactics",
        demo: "#"
    },

]
