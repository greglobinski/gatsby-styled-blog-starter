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
  navigator: {
    colors: {
      title: colors.firstSuperLight,
      subTitle: colors.bright,
      scrollTrack: colors.first,
      scrollThumb: colors.firstDark,
      linkHover: colors.bright
    },
    sizes: {
      asideWidth: "17rem",
      maxWidth: "56rem"
    },
    backgrounds: {
      wrapper: colors.first
    }
  },
  post: {
    colors: {
      text: colors.dark,
      meta: colors.middle,
      metaBorder: colors.first,
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
  topBar: {
    colors: {
      link: colors.bright,
      linkPost: colors.first
    },
    backgrounds: {
      wrapper: colors.firstLight,
      wrapperPost: colors.bright,
      icon: colors.first
    },
    sizes: {
      height: 44 //pixels
    }
  },
  mediaQueryTresholds: {
    XL: "65rem",
    L: "48.5rem",
    M: "37rem",
    S: "28rem",
    XS: "21rem"
  }
};

export default theme;
