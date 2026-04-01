/**
 * Design Tokens for Portfolio
 * Centralized design system variables
 */

export const tokens = {
  colors: {
    // Primary brand colors - tech ousado
    primary: '#00d9ff', // Cyan bright
    primaryDark: '#0099cc',
    accent: '#ff006e', // Hot pink
    accentLight: '#ff4d9e',

    // Semantic colors
    background: '#0a0e27', // Deep dark blue
    surface: '#1a1f3a',
    surfaceLight: '#2d3548',

    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#b0b8c1',
      muted: '#767d87',
    },

    // System colors
    success: '#00d084',
    warning: '#ffa500',
    error: '#ff3366',

    // Gradients
    gradientPrimaryAccent: 'linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)',
    gradientBackground:
      'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d3548 100%)',
  },

  typography: {
    family: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"Fira Code", "Courier New", monospace',
    },
    size: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(0, 217, 255, 0.3)',
    glowPink: '0 0 20px rgba(255, 0, 110, 0.3)',
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem', // 4px
    base: '0.375rem', // 6px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },

  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export type ColorToken = keyof typeof tokens.colors;
export type Spacing = keyof typeof tokens.spacing;
export type BorderRadius = keyof typeof tokens.borderRadius;
