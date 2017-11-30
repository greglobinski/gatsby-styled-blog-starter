const config = require("../utils/siteConfig");
import React from "react";
import { connect } from "react-redux";
import {
  updatePostsData,
  setNavigatorIsAside,
  setNavigatorInTransition
} from "../state/store";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import PostsNavigatorContainer from "../components/Navigator/PostsNavigatorContainer";

class BlogIndex extends React.Component {
  componentWillMount() {
    let isWideScreen =
      typeof window !== "undefined"
        ? document.documentElement.clientWidth > 776
        : false;

    const posts = this.props.data.allMarkdownRemark.edges;
    this.props.updatePostsData(posts);
    this.props.setNavigatorIsAside(false);
    if (typeof window !== `undefined`) {
      this.props.setNavigatorInTransition(true);

      setTimeout(() => {
        this.props.setNavigatorInTransition(false);
      }, isWideScreen ? 500 : 0);
    }
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
    setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
    setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val))
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
