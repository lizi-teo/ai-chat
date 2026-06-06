import type { CSSProperties, ReactNode } from 'react';

interface ThemeProviderProps {
  /** CSS custom property overrides, e.g. { '--primary': '#004f2d' } */
  tokens?: Record<string, string>;
  /** Apply dark mode by adding the .dark class */
  dark?: boolean;
  children: ReactNode;
  className?: string;
}

export default function ThemeProvider({ tokens = {}, dark = false, children, className }: ThemeProviderProps) {
  return (
    <div
      className={`${dark ? 'dark' : ''} ${className ?? ''}`.trim() || undefined}
      style={tokens as CSSProperties}
    >
      {children}
    </div>
  );
}
