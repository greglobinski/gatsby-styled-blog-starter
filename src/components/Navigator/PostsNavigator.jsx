import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Img from "gatsby-image";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  background: ${props => props.theme.bgColors.first};
  overflow: auto;
  position: relative;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    bottom: 0;
    left: 0;
    padding-top: ${props =>
      !props.isAside
        ? props => props.theme.sizes.welcomeScreenRolledUpHeight
        : "0"};
    position: absolute;
    top: 0;
    width: ${props =>
      props.isAside
        ? props => props.theme.sizes.postNavigatorAsideWidth
        : "100%"};
  }
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

    &::after {
      ${props =>
        !props.isAside
          ? `content: "";`
          : ``} border-bottom: 2px solid ${props =>
          props.theme.bgColors.firstDark};
      bottom: ${props => (props.isAside ? "-1.7em" : "-3.1em")};
      height: 0;
      left: 50%;
      margin-left: ${props => (props.isAside ? "-2rem" : "-3rem")};
      position: absolute;
      width: ${props => (props.isAside ? "4rem" : "6rem")};
    }

    &:last-child {
      &::after {
        content: none;
      }
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
  margin: ${props => (props.isAside ? "1.5rem 1.8rem" : "4rem 1.5rem 6rem")};
  position: relative;
  perspective: 1000px;
  animation-name: ${articleShowUp};
  animation-duration: 0.2s;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    a:first-child & {
      margin-top: 4rem;
    }
    a:last-child & {
      margin-bottom: 5rem;
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
    box-shadow: ${props => (!props.isAside ? "0 5px 2px rgba(0,0,0,.2)" : "")};
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
      box-shadow: 0 10px 50px -10px rgba(0,0,0,5);
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
        welcomeIsRolledUp={this.props.welcomeIsRolledUp}
      >
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
                  {!this.props.inTransition && (
                    <Article isAside={this.props.isAside}>
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
                  )}
                </Link>
              );
            })}
        </List>
      </Wrapper>
    );
  }
}

export default PostsNavigator;
