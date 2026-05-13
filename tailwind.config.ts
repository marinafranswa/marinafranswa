import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        pink: {
          DEFAULT: "#FF6EB4",
          light: "#FFB3D9",
          pale: "#FFF0F8",
        },
        purple: {
          DEFAULT: "#8B5CF6",
          light: "#C4B5FD",
          deep: "#6D28D9",
        },
        sky: {
          DEFAULT: "#38BDF8",
          deep: "#0EA5E9",
        },
        yellow: {
          DEFAULT: "#FBBF24",
          light: "#FDE68A",
        },
        dark: {
          DEFAULT: "#0D0A1A",
          card: "#16102B",
          card2: "#1C1535",
        },
        muted: "#B8AACE",
      },
      keyframes: {
        blobFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(2deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px #FF6EB4, 0 0 40px #8B5CF6" },
          "50%": { boxShadow: "0 0 40px #FF6EB4, 0 0 80px #8B5CF6, 0 0 120px #38BDF8" },
        },
      },
      animation: {
        blobFloat: "blobFloat 10s ease-in-out infinite",
        blobFloatReverse: "blobFloat 12s ease-in-out infinite reverse",
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 8s ease-in-out infinite reverse",
        gradientShift: "gradientShift 4s ease infinite",
        marquee: "marquee 25s linear infinite",
        spinSlow: "spinSlow 20s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        slideUp: "slideUp 0.6s ease forwards",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      backgroundSize: {
        "200": "200% auto",
      },
    },
  },
  plugins: [],
};

export default config;
