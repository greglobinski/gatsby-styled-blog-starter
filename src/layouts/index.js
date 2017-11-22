import React from "react";
import Link from "gatsby-link";
import styled, { ThemeProvider } from "styled-components";
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
    this.updatePostsData = this.updatePostsData.bind(this);
    this.navigatorLinkOnClik = this.navigatorLinkOnClik.bind(this);
    this.updateNavigatorIsAside = this.updateNavigatorIsAside.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.state = {
      posts: [],
      appInit: true,
      navigatorIsAside: false,
      navigatorInTransition: false,
      infoIsRolledDown: false,
      infoInTransition: false
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  updatePostsData(posts, top) {
    this.setState(() => ({
      posts: posts
    }));
  }

  updateNavigatorIsAside(val) {
    this.setState(prevState => ({
      navigatorIsAside: val,
      navigatorInTransition: prevState.appInit ? false : true
    }));
    this.endNavigatorTransition();
  }

  navigatorLinkOnClik(e) {
    if (!this.state.navigatorIsAside) {
      this.setState(() => ({
        navigatorIsAside: true,
        navigatorInTransition: true,
        appInit: false
      }));
      this.endNavigatorTransition(true);
    }
  }

  endNavigatorTransition(hidden) {
    let isWideScreen =
      typeof window !== "undefined"
        ? document.documentElement.clientWidth > 776
        : false;
    setTimeout(() => {
      this.setState(() => ({
        navigatorInTransition: false
      }));
    }, 200);
  }

  toggleInfo(e) {
    this.setState(prevState => ({
      infoIsRolledDown: !prevState.infoIsRolledDown,
      infoInTransition: true
    }));

    setTimeout(() => {
      this.setState(() => ({
        infoInTransition: false
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
          <Seo />
          <TopBarContainer
            navigatorIsAside={this.state.navigatorIsAside}
            btnOnClick={this.toggleInfo}
          />
          <InfoContainer
            navigatorIsAside={this.state.navigatorIsAside}
            isRolledDown={this.state.infoIsRolledDown}
            inTransition={this.state.infoInTransition}
            btnOnClick={this.toggleInfo}
          />

          {children({
            ...this.props,
            updatePostsData,
            updateNavigatorIsAside
          })}
          {!!this.state.posts.length &&
            !this.state.appInitialState && (
              <PostsNavigatorContainer
                location={location.pathname}
                posts={this.state.posts}
                linkOnClick={this.navigatorLinkOnClik}
                isAside={this.state.navigatorIsAside}
                inTransition={this.state.navigatorInTransition}
                isHidden={this.state.navigatorIsHidden}
              />
            )}
          {this.state.navigatorIsAside && <BottomBarContainer />}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Template;
