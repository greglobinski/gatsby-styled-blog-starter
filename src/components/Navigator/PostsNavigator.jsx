import React from "react";
import Link from "gatsby-link";
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
  display: ${props =>
    props.isAside ? (props.inTransition ? "block" : "none") : "block"};
  bottom: 0;
  background: ${props => props.theme.navigator.backgrounds.wrapper};
  left: ${props =>
    props.isAside
      ? props => `-${props.theme.navigator.sizes.asideWidth}`
      : "0"};
  padding-top: ${props => props.theme.topBar.sizes.height}px;
  overflow: auto;
  position: absolute;
  top: 0;
  width: ${props =>
    props.isAside ? props.theme.navigator.sizes.asideWidth : "100%"};

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding-top: ${props =>
      props.isAside
        ? props => props.theme.topBar.sizes.height + 12
        : props => props.theme.topBar.sizes.height + 18}px;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    display: block;
    left: 0;
    transition: all 0.6s ease;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.navigator.colors.scrollTrack};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.navigator.colors.scrollThumb};
  }

  a {
    display: block;
    padding: ${props => (props.isAside ? "1em 1em 1em .8em" : "2em 1.5em")};
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }
`;

const headerShowUp = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Header = styled.header`
  display: ${props => (props.isAside ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 300;
  color: ${props => props.theme.navigator.colors.header};
  text-transform: uppercase;
  margin: 1.4em 0 0 1.3em;
  letter-spacing: 0.2em;
  font-size: 0.9em;
`;

const List = styled.ul`
  display: ${props => (props.inTransition ? "none" : "block")};
  list-style: none;
  max-width: ${props => props.theme.navigator.sizes.maxWidth};
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
`;

const itemShowUp = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ListItem = styled.li`
  animation-name: ${itemShowUp};
  animation-duration: 0.5s;
  background: ${props =>
    props.isActive
      ? props => props.theme.navigator.backgrounds.asideItemActive
      : "none"};
  border-left: 0.4em solid
    ${props =>
      props.isActive
        ? props => props.theme.navigator.colors.asideItemActiveBorder
        : props.theme.navigator.backgrounds.wrapper};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.5s;
  &:first-child {
    border-top: ${props =>
      props.isAside ? `1px solid rgba(255, 255, 255, 0.1)` : ``};
  }
`;

const Post = styled.div`
  position: relative;
  perspective: 1000px;
`;

const Title = styled.h2`
  color: ${props => props.theme.navigator.colors.title};
  font-weight: ${props => (props.isAside ? "400" : "700")};
  font-size: ${props => (props.isAside ? ".95em" : "1.3em")};
  letter-spacing: ${props => (props.isAside ? "0" : "-.04em")};
  line-height: ${props => (props.isAside ? "1.15" : "1.1")};
  margin: 0;
  opacity: ${props => (props.inTransition ? "0" : "1")};
  padding-left: 35%;
  transition: all 0.5s;

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
  }

  a:hover & {
    color: ${props => props.theme.navigator.colors.linkHover};
  }
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.navigator.colors.subTitle};
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: "-.02em";
  margin: 0.5rem 0 0 0;
  padding-left: 35%;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    padding-left: 33%;
    font-size: 1.2em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding-left: 31%;
    font-size: 1.3em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    padding-left: 29%;
    font-size: 1.4em;
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    font-size: 1.5em;
  }
`;

const Picture = styled.div`
  bottom: 0;
  width: 25%;
  left: 3px;
  position: absolute;
  box-shadow: ${props => (!props.isAside ? "0 2px 1px rgba(0,0,0,.2)" : "")};
  overflow: hidden;
  top: ${props => (props.isAside ? "0" : "5px")};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
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
      >
        <Header isAside={this.props.isAside}>List of Posts: </Header>
        <List
          isAside={this.props.isAside}
          inTransition={this.props.inTransition}
        >
          {this.props.posts &&
            this.props.posts.map(post => {
              const title = post.node.frontmatter.title || post.node.path;
              return (
                <ListItem
                  isActive={post.node.frontmatter.path === this.props.location}
                  isAside={this.props.isAside}
                  inTransition={this.props.inTransition}
                  key={post.node.frontmatter.path}
                >
                  <Link
                    to={post.node.frontmatter.path}
                    onClick={this.props.linkOnClick}
                  >
                    <Post>
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
                    </Post>
                  </Link>
                </ListItem>
              );
            })}
        </List>
      </Wrapper>
    );
  }
}

export default PostsNavigator;
