const config = require("../utils/siteConfig");
import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import styled from "styled-components";
import Seo from "../components/Other/Seo";
import Author from "../components/Article/Author/Author";
import Article from "../components/Article/Article";

const Wrapper = styled.main`
  background: ${props => props.theme.post.backgrounds.wrapper};
  bottom: 0;
  left: 0;
  margin-top: ${props => props.theme.topBar.sizes.height}px;
  overflow: auto;
  padding: 1.5rem 1.5rem 5.5rem;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 2rem 3.5rem 2.5rem;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props => props.theme.navigator.sizes.asideWidth};
    padding: 2.5rem 3.5rem 3.5rem;
  }
`;

class BlogPostTemplate extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Wrapper>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Seo postPath={post.frontmatter.path} postNode={post} postSEO />
        <Article post={post} />
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
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
  }
`;
