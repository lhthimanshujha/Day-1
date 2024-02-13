/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/modules/**/*.{js,jsx,ts,tsx}",
    "./src/common/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [],
  theme: {
    // specifying screens is mandatory in every tailwind.config file
    screens: {
      xs: "480px", //min-width 480px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      PoppinsRegular: ["Poppins-Regular", "sans-serif"],
      PoppinsMedium: ["Poppins-Medium", "sans-serif"],
      PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
      PoppinsBold: ["Poppins-Bold", "sans-serif"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: {
        10: "#111827"
      },
      primary: {
        10: "#FFDB0A"
      },
      blue: {
        10: "#3D61B0"
      },
      grey: {
        10: "#F6FAFC"
      },
      red: {
        10: "#FF2A29"
      },
      navyBlue: {
        10: "#4F46E5"
      },
      darkGrey: {
        10: "#333333"
      }
    },
    fontSize: {
      // `[fontSize, lineHeight]`
      "ft12-16": ["12px", "16px"],
      "ft14-20": ["14px", "20px"],
      "ft16-24": ["16px", "24px"],
      "ft20-28": ["20px", "28px"],
      "ft24-32": ["24px", "32px"],
      "ft30-36": ["30px", "36px"],
      "ft36-40": ["36px", "40px"],
      "ft48-16": ["48px", "16px"]
    },
    extend: {
      //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: {
        //common for width, height, padding, margin
        4.5: "18px", //p-4.5 , m-4.5 , w-4.5, h-4.5
        11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        "77px": "77px", // Directly use the pixel value if the divided has more than 1 decimal (e.g., 77/4 = 19.25, so use 77px)
        50: "200px",
        125: "500px",
        "550px": "550px",
        150: "600px"
      }
    }
  },
  plugins: []
};
