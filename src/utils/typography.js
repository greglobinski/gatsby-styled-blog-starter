import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-seriff"
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-seriff"
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflow: "auto"
    }
  })
});

export default typography;

// googleFonts: [
//   {
//     name: "Open Sans",
//     styles: ["700", "300"]
//   },
//   {
//     name: "Open Sans",
//     styles: ["400"]
//   }
// ],
