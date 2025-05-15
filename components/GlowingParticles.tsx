export interface GlowingParticlesProps {
  count?: number;
  colors?: {
    primary: string;
    secondary: string;
  };
  className?: string;
}

export default function GlowingParticles({ 
  count = 18, 
  colors = {
    primary: "#a855f7",
    secondary: "#7c3aed"
  },
  className = ""
}: GlowingParticlesProps) {
    const particles = Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      size: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      duration: (2.5 + Math.random() * 2) * 2,
      opacity: 0.3 + Math.random() * 0.5,
      blur: 0.5 + Math.random() * 1.5,
    }));
    return (
      <div className={`absolute left-0 right-0 bottom-0 top-0 pointer-events-none z-20 ${className}`}>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-rise"
            style={{
              left: `${p.left}%`,
              bottom: 0,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              background: `radial-gradient(circle, ${colors.primary} 60%, ${colors.secondary} 100%)`,
              filter: `blur(${p.blur}px)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              boxShadow: `0 0 8px 2px ${colors.primary}, 0 0 16px 4px ${colors.secondary}`,
            }}
          />
        ))}
      </div>
    );
  }