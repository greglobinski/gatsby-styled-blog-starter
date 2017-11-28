import React from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import {} from "../state/store";
//import whatInput from "what-input";
import Helmet from "react-helmet";
import PostsNavigatorContainer from "../components/Navigator/PostsNavigatorContainer";
import InfoContainer from "../components/Info/InfoContainer";
import TopBarContainer from "../components/TopBar/TopBarContainer";
import BottomBarContainer from "../components/BottomBar/BottomBarContainer";
import Seo from "../components/Other/Seo";

import "normalize.css";
import globals from "../styles/global";
import theme from "../styles/theme";
import styles from "../styles/base";

const Container = styled.div`
  ${styles.baseStyles};
  min-height: 100vh;
`;

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Helmet>
            <html lang="en" />
          </Helmet>
          <Seo />
          <TopBarContainer />
          <InfoContainer />
          {children({
            ...this.props
          })}
          <PostsNavigatorContainer location={location.pathname} />
          <BottomBarContainer />
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    navigatorIsAside: state.navigator.isAside,
    navigatorInTransition: state.navigator.inTransition
  };
};

const mapDispatchToProps = dispatch => {
  return { btnOnClick: () => dispatch(toggleInfoScreen()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
