import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`backdrop-blur-md p-4 bg-white/30 rounded-2xl border border-white/60 ${className}`}
    //   style={{
    //     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    //   }}
    >
      {children}
    </div>
  );
};

export default GlassCard;