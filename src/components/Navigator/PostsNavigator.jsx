import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Img from "gatsby-image";
import styled, { keyframes } from "styled-components";

const wrapperShowUp = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Wrapper = styled.nav`
  animation-name: ${wrapperShowUp};
  animation-duration: ${props => (props.appInit ? "0" : "0.5s")};

  display: ${props =>
    props.isAside ? (props.inTransition ? "block" : "none") : "block"};
  bottom: 0;
  background: ${props => props.theme.bgColors.first};
  left: ${props =>
    props.isAside
      ? props => `-${props.theme.sizes.postNavigatorAsideWidth}`
      : "0"};
  padding-top: ${props => props.theme.sizes.topBarHeight}px;
  overflow: auto;
  position: absolute;
  top: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  width: ${props =>
    props.isAside ? props.theme.sizes.postNavigatorAsideWidth : "100%"};

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding-top: ${props =>
      props.isAside ? 32 : props => props.theme.sizes.topBarHeight + 18}px;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    display: block;
    left: 0;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.bgColors.first};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.bgColors.firstDark};
  }
`;

const headerShowUp = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Header = styled.header`
  animation-name: ${headerShowUp};
  animation-duration: 0.7s;
  display: ${props => (props.isAside ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 300;
  text-align: center;
  color: white;
  text-transform: uppercase;
  padding-top: 0.8em;
  font-size: 1.2em;
`;

const List = styled.div`
  list-style: none;
  max-width: ${props => props.theme.sizes.postNavigatorMaxWidth};
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    padding: ${props => (!props.isAside ? "0 1.5em" : "")};
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: ${props => (!props.isAside ? "0 2em" : "")};
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    padding: ${props => (!props.isAside ? "0 3em" : "")};
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    padding: ${props => (!props.isAside ? "0" : "")};
  }

  > a {
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;

    &:hover {
      color: inherit;
    }
  }
`;

const articleShowUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Article = styled.article`
  display: ${props => (props.inTransition ? "none" : "block")};
  color: ${props => props.theme.fgColors.white};
  margin: ${props => (props.isAside ? "1.5rem 1.8rem" : "2rem 1.5rem 3rem")};
  position: relative;
  perspective: 1000px;
  animation-name: ${articleShowUp};
  animation-duration: 0.2s;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    margin: ${props => (props.isAside ? "1.5rem 1.8rem" : "3rem 1.5rem 4rem")};
    a:first-child & {
    }
    a:last-child & {
    }
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.fgColors.firstSuperLight};
  font-weight: ${props => (props.isAside ? "400" : "700")};
  font-size: ${props => (props.isAside ? ".85em" : "1.3em")};
  letter-spacing: ${props => (props.isAside ? "0" : "-.04em")};
  line-height: ${props => (props.isAside ? "1.3" : "1.1")};
  margin: 0;
  opacity: ${props => (props.inTransition ? "0" : "1")};
  padding-left: 35%;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    padding-left: ${props => (!props.isAside ? "33%" : "")};
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding-left: ${props => (!props.isAside ? "31%" : "")};
    font-size: ${props => (!props.isAside ? "1.7em" : "")};
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    padding-left: ${props => (!props.isAside ? "29%" : "")};
    font-size: ${props => (!props.isAside ? "2em" : "")};
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    font-size: ${props => (!props.isAside ? "2.2em" : "")};
    line-height: ${props => (!props.isAside ? "1" : "")};
  }

  a:hover & {
    color: ${props => props.theme.fgColors.white};
  }
`;

const SubTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: "-.02em";
  margin: 0.5rem 0 0 0;
  padding-left: 35%;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    padding-left: 33%;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding-left: 31%;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    padding-left: 29%;
  }
`;

const Picture = styled.div`
  bottom: 0;
  width: 25%;
  float: left;
  left: 3px;
  overflow: hidden;
  position: absolute;
  top: 5px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  > .gatsby-image-outer-wrapper {
    width: 200%;
  }

  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XS}) {
    > .gatsby-image-outer-wrapper {
      width: 180%;
    }
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    box-shadow: ${props => (!props.isAside ? "0 2px 1px rgba(0,0,0,.2)" : "")};
    > .gatsby-image-outer-wrapper {
      width: 150%;
    }
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    > .gatsby-image-outer-wrapper {
      width: 120%;
    }
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    > .gatsby-image-outer-wrapper {
      width: 100%;
    }
  }
  @media (min-width: ${props => props.theme.mediaQueryTresholds.XL}) {
    a:hover & {
      ${props =>
        !props.isAside
          ? `
      transform: rotateY(15deg) rotateX(-15deg) translateY(-20%);
      box-shadow: 0 20px 10px -10px rgba(0,0,0,.2);
      height: 150%;`
          : ``};
    }
  }
`;

class PostsNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAside: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Wrapper
        isAside={this.props.isAside}
        inTransition={this.props.inTransition}
        isHidden={this.props.isHidden}
        welcomeIsRolledUp={this.props.welcomeIsRolledUp}
        appInit={this.props.appInit}
      >
        <Header isAside={this.props.isAside}>List of Posts: </Header>
        <List isAside={this.props.isAside}>
          {this.props.posts &&
            this.props.posts.map(post => {
              const title =
                get(post, "node.frontmatter.title") || post.node.path;
              return (
                <Link
                  key={post.node.frontmatter.path}
                  to={post.node.frontmatter.path}
                  onClick={this.props.linkOnClick}
                >
                  <Article
                    isAside={this.props.isAside}
                    inTransition={this.props.inTransition}
                  >
                    <Picture isAside={this.props.isAside}>
                      <Img
                        sizes={post.node.frontmatter.cover.children[0].sizes}
                      />
                    </Picture>

                    <Title isAside={this.props.isAside}>
                      {post.node.frontmatter.title}
                    </Title>

                    {!this.props.isAside && (
                      <SubTitle isAside={this.props.isAside}>
                        {post.node.frontmatter.subTitle}
                      </SubTitle>
                    )}
                  </Article>
                </Link>
              );
            })}
        </List>
      </Wrapper>
    );
  }
}

export default PostsNavigator;
