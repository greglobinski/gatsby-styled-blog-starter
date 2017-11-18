import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["700", "300"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflow: "auto"
    }
  })
});

export default typography;
