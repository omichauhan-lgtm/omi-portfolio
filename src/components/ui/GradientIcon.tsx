// @ts-nocheck
import React from 'react';
// import { LucideProps } from 'lucide-react';

export type GradientPreset = 'luxury-gold' | 'cyber-cyan' | 'neon-purple' | 'spotify-green' | 'sunset-orange';

interface GradientIconProps extends React.SVGProps<SVGSVGElement> {
    icon: React.ElementType;
    preset?: GradientPreset;
    size?: number | string;
    className?: string;
}

const gradients = {
    'luxury-gold': { from: '#FFD700', to: '#FDB931', id: 'grad-gold' }, // Classic Metallic Gold
    'cyber-cyan': { from: '#00F260', to: '#0575E6', id: 'grad-cyan' }, // Bright Cyan to Blue
    'neon-purple': { from: '#F093FB', to: '#F5576C', id: 'grad-purple' }, // Pink to Purple
    'spotify-green': { from: '#1DB954', to: '#191414', id: 'grad-spotify' }, // Spotify Brand
    'sunset-orange': { from: '#FF512F', to: '#DD2476', id: 'grad-sunset' }, // Orange to Red
};

const GradientIcon: React.FC<GradientIconProps> = ({ icon: Icon, preset = 'luxury-gold', size = 24, className, ...props }) => {
    const gradient = gradients[preset];
    const uniqueId = `${gradient.id}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`relative inline-block ${className}`}>
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={gradient.from} />
                        <stop offset="100%" stopColor={gradient.to} />
                    </linearGradient>
                </defs>
            </svg>
            <Icon
                size={size}
                {...props}
                style={{ stroke: `url(#${uniqueId})` }}
                className="drop-shadow-sm"
            />
        </div>
    );
};

export default GradientIcon;
