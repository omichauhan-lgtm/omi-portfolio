import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-spotify-black text-white selection:bg-spotify-green selection:text-black overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="relative z-10 pointer-events-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
