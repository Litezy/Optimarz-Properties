// Color palette for the design system
// All colors converted from HSL to hex codes for easier use

export const colors = {
  // Light Mode Colors
  light: {
    background: '#f9f7f3', // hsl(42, 40%, 98%)
    foreground: '#2d4a32', // hsl(90, 25%, 15%)
    card: '#ffffff', // hsl(0, 0%, 100%)
    'card-foreground': '#2d4a32', // hsl(90, 25%, 15%)
    popover: '#ffffff', // hsl(0, 0%, 100%)
    'popover-foreground': '#2d4a32', // hsl(90, 25%, 15%)
    primary: '#8fb569', // hsl(76, 70%, 50%)
    'primary-foreground': '#ffffff', // hsl(0, 0%, 100%)
    secondary: '#6b8f5c', // hsl(42, 35%, 65%)
    'secondary-foreground': '#2d4a32', // hsl(90, 25%, 15%)
    muted: '#d9d9d9', // hsl(40, 15%, 85%)
    'muted-foreground': '#6b6b6b', // hsl(90, 10%, 45%)
    accent: '#8fb569', // hsl(76, 70%, 50%)
    'accent-foreground': '#ffffff', // hsl(0, 0%, 100%)
    destructive: '#ef4444', // hsl(0, 84.2%, 60.2%)
    'destructive-foreground': '#ffffff', // hsl(0, 0%, 100%)
    border: '#e5e5e5', // hsl(40, 15%, 90%)
    input: '#e5e5e5', // hsl(40, 15%, 90%)
    ring: '#8fb569', // hsl(76, 70%, 50%)
    gold: '#6b8f5c', // hsl(42, 35%, 65%)
    'dark-green': '#2d4a32', // hsl(90, 25%, 15%)
    'light-cream': '#f9f7f3', // hsl(42, 40%, 98%)
    'footer-bg': '#2d4a32', // hsl(90, 25%, 15%)
    'footer-text': '#f9f7f3', // hsl(42, 40%, 98%)
  },
  // Dark Mode Colors
  dark: {
    background: '#1a2e1f', // hsl(90, 35%, 12%)
    foreground: '#f9f7f3', // hsl(42, 40%, 98%)
    card: '#2d4a32', // hsl(90, 30%, 18%)
    'card-foreground': '#f9f7f3', // hsl(42, 40%, 98%)
    popover: '#2d4a32', // hsl(90, 30%, 18%)
    'popover-foreground': '#f9f7f3', // hsl(42, 40%, 98%)
    primary: '#9fc178', // hsl(76, 75%, 60%)
    'primary-foreground': '#1a2e1f', // hsl(90, 35%, 12%)
    secondary: '#7ba866', // hsl(42, 40%, 70%)
    'secondary-foreground': '#1a2e1f', // hsl(90, 35%, 12%)
    muted: '#334d3a', // hsl(90, 25%, 20%)
    'muted-foreground': '#d1d1d1', // hsl(42, 25%, 85%)
    accent: '#9fc178', // hsl(76, 75%, 60%)
    'accent-foreground': '#1a2e1f', // hsl(90, 35%, 12%)
    destructive: '#ef4444', // hsl(0, 84%, 60%)
    'destructive-foreground': '#ffffff', // hsl(0, 0%, 100%)
    border: '#4d6b5a', // hsl(90, 20%, 30%)
    input: '#4d6b5a', // hsl(90, 20%, 30%)
    ring: '#9fc178', // hsl(76, 75%, 60%)
    gold: '#7ba866', // hsl(42, 40%, 70%)
    'dark-green': '#f9f7f3', // hsl(42, 40%, 98%)
    'light-cream': '#1a2e1f', // hsl(90, 35%, 12%)
  },
  // Common Colors
  common: {
    radius: '0.5rem',
  },
} as const;

// Helper function to get color by mode
export const getColor = (color: keyof typeof colors.light, mode: 'light' | 'dark' = 'light') => {
  return colors[mode][color] || colors.light[color];
};

// Export individual color groups for convenience
export const lightColors = colors.light;
export const darkColors = colors.dark;
