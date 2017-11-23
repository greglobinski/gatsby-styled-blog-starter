# StyledBlog starter for Gatsby

[DEMO website](https://gsbs.greglobinski.com/)

![](static/screens/demo-screencast.gif)

This is a starter/theme for [Gatsby](https://github.com/gatsbyjs/gatsby).

### Setup

If you are completely new to Gatsby, start with one of its [official blog starters](https://www.gatsbyjs.org/docs/gatsby-starters/). If you have already went through with the [tutorials](https://www.gatsbyjs.org/tutorial/) install the starter like any other one using ```gatsby new``` command.

```
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] git@github.com:greglobinski/gatsby-styled-blog-starter.git
```

### Customization 

Edit ```\src\utils\siteConfig.js``` 


```
module.exports = {
  pathPrefix: "/",
  siteTitle: "Gatsby StyledBlog starter",
  siteLongTitle: "Gatsby StyledBlog Theme/Starter",
  siteUrl: "https://gsbs.greglobinski.com",
  siteLanguage: "en",
  siteLogo: "/logos/logo-1024.png",
  siteDescription: "This is a starter/theme for GatsbyJS",
  // manifest.json
  manifestName: "StyledBlog Gatsby starter",
  manifestShortName: "StyledBlog",
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.first,
  manifestThemeColor: colors.firstLight,
  manifestDisplay: "standalone",
  // Author note
  authorName: "Mr. Gatsby",
  authorDescription: `Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. `,
  // texts
  copyright:
    "This is the place for a copyrigh note - editable through config object"
};
```

Edit the ```\src\styles\colors.js``` file to customize the color pallete.

```
module.exports = {
  first: "#7F5D80",
  firstLight: "#CFC0CF", 
  firstSuperLight: "#F4F0F4",
  firstDark: "#563E57",
  accent: "#FF6633",
  bright: "#ffffff",
  light: "#f3f3f3",
  middle: "#666666",
  dark: "#333333",
  superDark: "#111111"
};
```

more info soon. If you are interested in updates follow me at [@greglobinski](https://twitter.com/greglobinski).

