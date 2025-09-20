"use client";

export const LogoPattern = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `url('/nexus-logo.svg')`,
        backgroundSize: '200px',
        backgroundRepeat: 'repeat',
        filter: 'invert(1)',
        transform: 'rotate(-15deg) scale(1.5)'
      }} />
    </div>
  );
};