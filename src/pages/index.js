const config = require("../utils/siteConfig");
import React from "react";
import { connect } from "react-redux";
import {
  updatePostsData,
  navigatorIsAside,
  navigatorInTransition
} from "../state/store";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";

class BlogIndex extends React.Component {
  componentWillMount() {
    let isWideScreen =
      typeof window !== "undefined"
        ? document.documentElement.clientWidth > 776
        : false;

    const posts = get(this, "props.data.allMarkdownRemark.edges");
    this.props.updatePostsData(posts);
    this.props.updateNavigatorIsAside(false);
    setTimeout(() => {
      this.props.navigatorInTransition(false);
    }, isWideScreen ? 500 : 0);
  }

  render() {
    return <Helmet title={config.siteTitle} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: state.navigator.isAside,
    navigatorIsActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePostsData: data => dispatch(updatePostsData(data)),
    updateNavigatorIsAside: val => dispatch(navigatorIsAside(val)),
    navigatorInTransition: val => dispatch(navigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogIndex);

export const pageQuery = graphql`
  query IndexQuery {
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
                  sizes(maxWidth: 240) {
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
