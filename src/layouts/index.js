import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import 'normalize.css';
// import whatInput from "what-input";
import { toggleInfoScreen } from '../state/store';
import PostsNavigatorContainer from '../components/Navigator/PostsNavigatorContainer';
import InfoContainer from '../components/Info/InfoContainer';
import TopBarContainer from '../components/TopBar/TopBarContainer';
import BottomBarContainer from '../components/BottomBar/BottomBarContainer';
import Seo from '../components/Other/Seo';
import theme from '../styles/theme';
import styles from '../styles/base';

const Container = styled.div`
  ${styles.baseStyles};
  min-height: 100vh;
`;

function Template(props) {
  const { children } = props;

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
          ...props,
        })}
        <PostsNavigatorContainer />
        <BottomBarContainer />
      </Container>
    </ThemeProvider>
  );
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  navigatorIsAside: state.navigator.isAside,
  navigatorInTransition: state.navigator.inTransition,
});

const mapDispatchToProps = dispatch => ({
  btnOnClick: () => dispatch(toggleInfoScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
