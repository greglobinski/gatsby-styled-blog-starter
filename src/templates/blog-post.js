import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import styled from "styled-components";

import Bio from "../components/Bio";

const Wrapper = styled.main`
  padding: 1.5rem 1.5rem 2.5rem;
  background: ${props => props.theme.bgColors.white};

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 2rem 3.5rem 2.5rem;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    bottom: 0;
    left: ${props => props.theme.sizes.postNavigatorAsideWidth};
    margin-top: ${props => props.theme.sizes.welcomeScreenRolledUpHeight};
    overflow: auto;
    padding: 2.5rem 3.5rem 3.5rem;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Article = styled.article`
  max-width: ${props => props.theme.sizes.postArticleMaxWidth};
  margin: 0 auto;
`;

const Header = styled.header``;

const Title = styled.h1`
  color: ${props => props.theme.fgColors.headBold};
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 0.4em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    font-size: 2.6em;
    letter-spacing: -0.04em;
  }
  @media screen and (min-width: ${props =>
      props.theme.mediaQueryTresholds.XL}) {
    font-size: 3.2em;
    letter-spacing: -0.05em;
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.fgColors.head};
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.4em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.S}) {
    font-size: 1.4em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    font-size: 1.6em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    font-size: 2em;
  }
`;

const Meta = styled.div`
  font-size: 0.9em;
  margin: 2rem 0 3rem;
`;

const PostDate = styled.span`
  background: ${props => props.theme.bgColors.grayLight};
  border-left: 1px solid ${props => props.theme.fgColors.first};
  color: ${props => props.theme.fgColors.lightText};
  padding: 0.3em 0.7em 0.4em;
`;

const Content = styled.div`
  color: ${props => props.theme.fgColors.text};
  line-height: 1.5;

  .gatsby-resp-image-link {
    margin: 2.5em 0;
  }

  h2,
  h3 {
    color: ${props => props.theme.fgColors.headThin};
    font-size: 1.8em;
    font-weight: 300;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 1em 0 0.7em;
  }

  p {
    margin: 0 0 1em;

    strong {
      letter-spacing: -0.01em;
      color: ${props => props.theme.fgColors.lightText};
    }

    @media screen and (min-width: ${props =>
        props.theme.mediaQueryTresholds.M}) and (orientation: portrait) {
      font-size: 1.2em;
    }
  }

  blockquote {
    border: 5px solid #eee;
    font-style: italic;
    margin: 2.5em 0;
    padding: 1em 2em;
    position: relative;

    p {
      margin: 0;
    }

    &::after,
    &::before {
      background: white;
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
  }
`;

const Footer = styled.footer``;

class BlogPostTemplate extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    //this.props.updateLayoutFunction(posts)
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Wrapper>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Article>
          <Header>
            <Title>{post.frontmatter.title}</Title>
            <SubTitle>{post.frontmatter.subTitle}</SubTitle>
            <Meta>
              <PostDate>{post.frontmatter.date}</PostDate>
            </Meta>
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <Footer />
        </Article>
      </Wrapper>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        subTitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
