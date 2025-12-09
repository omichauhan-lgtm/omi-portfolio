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

]
