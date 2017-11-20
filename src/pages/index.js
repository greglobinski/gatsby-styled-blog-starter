import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

class BlogIndex extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    this.props.updatePostsData(posts);
    this.props.updateNavigatorIsAside(false);
  }

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return <Helmet title={siteTitle} />;
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            subTitle
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 300, rotate: 0) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
