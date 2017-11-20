const colors = {
  first: "#7F5D80",
  firstLight: "#AF95B0",
  firstSuperLight: "#F4F0F4",
  firstDark: "#563E57",
  bright: "#ffffff",
  light: "#f3f3f3",
  middle: "#666666",
  dark: "#333333",
  superDark: "#111111"
};

const theme = {
  colors: {
    first: colors.first
  },
  fgColors: {
    first: "#7F5D80",
    firstSuperLight: "#F4F0F4",
    second: "#F47405",
    third: "#F55E50",
    gray: "#777",
    darkGray: "#444",
    white: "#fff"
  },
  navigator: {
    title: colors.firstSuperLight
  },
  post: {
    colors: {
      text: colors.dark,
      meta: colors.middle,
      bold: colors.middle,
      title: colors.middle,
      subTitle: colors.superDark,
      link: colors.first,
      linkHover: colors.first,
      blockquoteFrame: colors.light
    },
    backgrounds: {
      wrapper: colors.bright,
      meta: colors.light
    },
    sizes: {
      maxWidth: "50rem"
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
  bgColors: {
    first: "#7F5D80",
    firstDark: "#563E57",
    firstLight: "#AF95B0",
    second: "#97BE10", //"#9FC910",
    white: "#fff",
    grayLight: "#eee",
    dark: "#999",
    black: "#333"
  },
  mediaQueryTresholds: {
    XL: "65rem",
    L: "48.5rem",
    M: "37rem",
    S: "28rem",
    XS: "21rem"
  },
  sizes: {
    welcomeScreenRolledUpHeight: "50px",
    postNavigatorAsideWidth: "17rem",
    postArticleMaxWidth: "50rem",
    postNavigatorMaxWidth: "56rem",
    topBarHeight: 44,
    bottomBarHeight: 44
  }
};

export default theme;

// headBold: "#666",
//     headThin: "#111",
//     text: "#333",
//     lightText: "#666",
//     boldText: "#666",
