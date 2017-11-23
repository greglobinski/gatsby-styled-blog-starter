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

Edit the ```\src\styles\theme.js``` file to customize colors of element.

```
const theme = {
  navigator: {
    colors: {
      title: colors.firstSuperLight,
      subTitle: colors.bright,
      scrollTrack: colors.first,
      scrollThumb: colors.firstDark,
      linkHover: colors.bright,
      header: colors.firstSuperLight,
      asideItemActiveBorder: colors.accent
    },
    sizes: {
      asideWidth: "19em",
      maxWidth: "56em"
    },
    backgrounds: {
      wrapper: colors.first,
      asideItemActive: colors.firstDark
    }
  },
  post: {
    colors: {
      author: colors.middle,
      authorBorder: colors.firstLight,
      bold: colors.middle,
      blockquoteFrame: colors.light,
      copyright: colors.middle,
      link: colors.first,
      linkHover: colors.firstLight,
      meta: colors.middle,
      metaBorder: colors.first,
      text: colors.dark,
      title: colors.middle,
      subTitle: colors.superDark
    },
    backgrounds: {
      wrapper: colors.bright,
      meta: colors.light
    },
    sizes: {
      maxWidth: "50em"
    }
  },
  bottomBar: {
    colors: {
      link: colors.bright,
      icon: colors.firstSuperLight
    },
    backgrounds: {
      wrapper: colors.first,
      icon: colors.firstDark
    },
    sizes: {
      height: 44 //pixels
    }
  },
  topBar: {
    colors: {
      link: colors.bright,
      linkPost: colors.first
    },
    backgrounds: {
      wrapper: colors.firstLight,
      wrapperPost: colors.bright,
      icon: colors.accent
    },
    sizes: {
      height: 44 //pixels
    }
  },
  info: {
    colors: {
      text: colors.firstDark,
      link: colors.firstDark,
      linkHover: colors.first,
      btn: colors.bright
    },
    backgrounds: {
      wrapper: colors.firstLight,
      btn: colors.accent
    },
    sizes: {
      maxWidth: "40em"
    }
  },
  mediaQueryTresholds: {
    XL: "65em",
    L: "49em",
    M: "37em",
    S: "28em",
    XS: "21em"
  }
};
```

more info soon. If you are interested in updates follow me at [@greglobinski](https://twitter.com/greglobinski).

