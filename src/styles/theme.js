const colors = require("./colors");

const theme = {
  navigator: {
    colors: {
      title: colors.firstSuperLight,
      subTitle: colors.bright,
      scrollTrack: colors.firstLight,
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
      text: colors.first
    },
    backgrounds: {
      wrapper: colors.second
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

export default theme;
