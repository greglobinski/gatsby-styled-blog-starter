import React from "react";
import styled from "styled-components";
import Author from "./Author/Author";
const config = require("../../utils/siteConfig");

const Wrapper = styled.article`
  max-width: ${props => props.theme.post.sizes.maxWidth};
  margin: 0 auto;

  a {
    border-bottom: 1px solid ${props => props.theme.post.colors.linkHover};
    color: ${props => props.theme.post.colors.link};
    font-weight: bold;
    text-shadow: 2px 2px ${props => props.theme.post.backgrounds.wrapper},
      -2px 2px ${props => props.theme.post.backgrounds.wrapper},
      -2px -2px ${props => props.theme.post.backgrounds.wrapper},
      -2px 2px ${props => props.theme.post.backgrounds.wrapper},
      -2px 0 ${props => props.theme.post.backgrounds.wrapper},
      2px 0 ${props => props.theme.post.backgrounds.wrapper};
    display: inline-block;
    line-height: 1.1;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.post.colors.linkHover};
      border-color: ${props => props.theme.post.colors.link};
    }
  }
`;

const Header = styled.header``;

const Title = styled.h1`
  color: ${props => props.theme.post.colors.title};
  font-size: 1.9em;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0 0 0.4em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    font-size: 2.6em;
    letter-spacing: -0.03em;
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    font-size: 3.2em;
    letter-spacing: -0.04em;
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.post.colors.subTitle};
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: 0em;
  margin: 0 0 0.4em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    font-size: 1.7em;
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    font-size: 2em;
  }
`;

const Meta = styled.div`
  font-size: 0.9em;
  margin: 2rem 0 3rem;
`;

const PostDate = styled.span`
  background: ${props => props.theme.post.backgrounds.meta};
  border-left: 2px solid ${props => props.theme.post.colors.metaBorder};
  color: ${props => props.theme.post.colors.meta};
  padding: 0.3em 0.7em 0.4em;
`;

const Content = styled.div`
  color: ${props => props.theme.post.colors.text};
  line-height: 1.5;

  .gatsby-resp-image-link {
    margin: 2.5em 0;
  }

  h2,
  h3 {
    color: ${props => props.theme.post.colors.title};
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.15;
    margin: 1em 0 0.7em;
    letter-spacing: -0.01em;

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.M}) {
      letter-spacing: -0.02em;
      font-size: 1.7em;
    }
    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.XL}) {
      letter-spacing: -0.03em;
      font-size: 1.9em;
    }
  }

  p {
    margin: 0 0 1em;
    font-size: 1.05em;

    strong {
      letter-spacing: -0.01em;
      color: ${props => props.theme.post.colors.bold};
    }

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.M}) {
      font-size: 1.1em;
    }
    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.XL}) {
      font-size: 1.2em;
    }
  }

  blockquote {
    border: 5px solid ${props => props.theme.post.colors.blockquoteFrame};
    font-style: italic;
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;

    p {
      margin: 0;
    }

    &::after,
    &::before {
      background: ${props => props.theme.post.backgrounds.wrapper};
      content: "";
      height: 5px;
      left: 50%;
      margin-left: -47%;
      position: absolute;
      top: -5px;
      width: 94%;
    }
    &::after {
      top: auto;
      bottom: -5px;
    }

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.L}) {
      padding: 1em 1.8em 1em 2em;
    }
  }

  .gatsby-resp-image-link {
    margin-left: -1.5em;
    margin-right: -1.5em;
    border: none;

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.M}) {
      margin-left: -3.2em;
      margin-right: -3.2em;
    }
    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.XL}) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const Footer = styled.footer``;

const Copyright = styled.p`
  color: ${props => props.theme.post.colors.copyright};
  font-size: 0.8em;
  padding: 4em 0 2em;
  text-align: right;
`;

const Article = ({ post }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{post.frontmatter.title}</Title>
        <SubTitle>{post.frontmatter.subTitle}</SubTitle>
        <Meta>
          <PostDate>{post.frontmatter.date}</PostDate>
        </Meta>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer>
        <Author />
        <Copyright>{config.copyright}</Copyright>
      </Footer>
    </Wrapper>
  );
};

export default Article;
