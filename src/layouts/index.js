import React from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
import PostsNavigatorContainer from "../components/Navigator/PostsNavigatorContainer";
import WelcomeScreenContainer from "../components/Welcome/WelcomeScreenContainer";

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
    this.state = {
      posts: [],
      navigatorIsAside: false,
      navigatorInTransition: false
    };
  }

  componentDidUpdate() {}

  updatePostsData(posts, top) {
    this.setState(() => ({
      posts: posts
    }));
  }

  updateNavigatorIsAside(val) {
    console.log("updateNavigatorIsAside");
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
    }, isWideScreen ? 300 : 0);
  }

  render() {
    const { location, children } = this.props;
    const updatePostsData = this.updatePostsData;
    const updateNavigatorIsAside = this.updateNavigatorIsAside;
    const updatNavigatorInTransition = this.updatNavigatorInTransition;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <WelcomeScreenContainer
            navigatorIsAside={this.state.navigatorIsAside}
          />
          <div>
            <p>This is layout</p>
            {children({
              ...this.props,
              updatePostsData,
              updateNavigatorIsAside
            })}
            {!!this.state.posts.length && (
              <PostsNavigatorContainer
                posts={this.state.posts}
                linkOnClick={this.navigatorLinkOnClik}
                isAside={this.state.navigatorIsAside}
                inTransition={this.state.navigatorInTransition}
              />
            )}
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Template;
