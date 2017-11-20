const colors = require("./colors");

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
    XL: "65em",
    L: "48.5em",
    M: "37em",
    S: "28em",
    XS: "21em"
  }
};

export default theme;
