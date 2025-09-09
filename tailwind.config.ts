import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    // ADD THIS SAFELIST BLOCK TO FIX THE DEPLOYMENT ISSUE
    safelist: [
        {
            pattern: /(bg|text|border)-(hero-primary|hero-secondary|hero-accent)/,
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /(bg)-(hero-primary|hero-secondary|hero-accent)\/(10|20|30)/,
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /(border)-(hero-primary|hero-secondary|hero-accent)\/(0|30|50)/,
            variants: ['hover', 'group-hover'],
        },
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                // Portfolio custom colors
                'hero-primary': 'hsl(var(--hero-primary))',
                'hero-secondary': 'hsl(var(--hero-secondary))',
                'hero-accent': 'hsl(var(--hero-accent))',
                'glass-bg': 'hsl(var(--glass-bg))',
                'glass-border': 'hsl(var(--glass-border))',
                'neon-glow': 'hsl(var(--neon-glow))',
                'skill-bg': 'hsl(var(--skill-bg))',
                'project-bg': 'hsl(var(--project-bg))'
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-hero': 'var(--gradient-hero)',
                'gradient-card': 'var(--gradient-card)',
                'gradient-button': 'var(--gradient-button)',
                'gradient-accent': 'var(--gradient-accent)',
            },
            boxShadow: {
                'glass': 'var(--shadow-glass)',
                'glow': 'var(--shadow-glow)',
                'neon': 'var(--shadow-neon)',
            },
            backdropBlur: {
                'xs': '2px',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
