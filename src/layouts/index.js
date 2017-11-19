import React from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";
import PostsNavigatorContainer from "../components/Navigator/PostsNavigatorContainer";
import WelcomeScreenContainer from "../components/Welcome/WelcomeScreenContainer";

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
    this.updatePostsData = this.updatePostsData.bind(this);
    this.navigatorLinkOnClik = this.navigatorLinkOnClik.bind(this);
    this.updateNavigatorIsAside = this.updateNavigatorIsAside.bind(this);
    this.toggleWelcomeScreen = this.toggleWelcomeScreen.bind(this);
    this.state = {
      posts: [],
      appInitialState: false,
      navigatorIsAside: false,
      navigatorInTransition: false,
      welcomeIsRolledUp: true,
      welcomeInTransition: false,
      windowHeight: 0
    };
  }

  componentDidUpdate() {}

  updatePostsData(posts, top) {
    this.setState(() => ({
      posts: posts
    }));
  }

  updateNavigatorIsAside(val) {
    this.setState(() => ({
      navigatorIsAside: val,
      navigatorInTransition: true
    }));
    this.endNavigatorTransition();
  }

  navigatorLinkOnClik(e) {
    if (!this.state.navigatorIsAside) {
      this.setState(() => ({
        navigatorIsAside: true,
        navigatorInTransition: true
      }));
      this.endNavigatorTransition();
    }
  }

  endNavigatorTransition() {
    let isWideScreen =
      typeof window !== "undefined"
        ? document.documentElement.clientWidth > 776
        : false;
    console.log(isWideScreen);
    setTimeout(() => {
      this.setState(() => ({
        navigatorInTransition: false
      }));
    }, isWideScreen ? 300 : 10);
  }

  toggleWelcomeScreen(e) {
    console.log("Template.toggleWelcomeScreen()");
    this.setState(prevState => ({
      welcomeIsRolledUp: !prevState.welcomeIsRolledUp,
      appInitialState: prevState.appInitialState && false,
      windowHeight: document.body.offsetHeight,
      welcomeInTransition: true
    }));

    setTimeout(() => {
      this.setState(() => ({
        welcomeInTransition: false
      }));
    }, 300);
  }

  render() {
    const { location, children } = this.props;
    const updatePostsData = this.updatePostsData;
    const updateNavigatorIsAside = this.updateNavigatorIsAside;
    const updatNavigatorInTransition = this.updatNavigatorInTransition;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Helmet>
            <html lang="en" />
          </Helmet>
          <WelcomeScreenContainer
            navigatorIsAside={this.state.navigatorIsAside}
            appInitialState={this.state.appInitialState}
            isRolledUp={this.state.welcomeIsRolledUp}
            inTransition={this.state.welcomeInTransition}
            btnOnClick={this.toggleWelcomeScreen}
          />
          {children({
            ...this.props,
            updatePostsData,
            updateNavigatorIsAside
          })}
          {!!this.state.posts.length &&
            !this.state.appInitialState && (
              <PostsNavigatorContainer
                posts={this.state.posts}
                linkOnClick={this.navigatorLinkOnClik}
                isAside={this.state.navigatorIsAside}
                inTransition={this.state.navigatorInTransition}
              />
            )}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Template;
