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
        id: 1,
        title: "AutoSight SaaS",
        description: "AI-Powered Automotive Market Analysis Platform. Multi-tenant SaaS for demand forecasting and customer segmentation.",
        tech: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
        image: "/assets/customer_segments.png",
        github: "https://github.com/omichauhan-lgtm/automotive-market-demand",
        demo: "#"
    },
    {
        id: 2,
        title: "Credit Risk Intelligence",
        description: "Automated Credit Risk Assessment SaaS. Uses machine learning to predict borrower default risks.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        image: "/assets/credit_risk_dashboard_ui.png",
        github: "https://github.com/omichauhan-lgtm/credit-risk-saas",
        demo: "#"
    },
    {
        id: 3,
        title: "Portfolio V1",
        description: "My previous portfolio website built with HTML/CSS.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
        github: "https://github.com/omichauhan-lgtm/omi-portfolio"
    }
]
