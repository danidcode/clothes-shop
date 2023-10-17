import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1596px',
      },
    },
  },
  plugins: [],
});

