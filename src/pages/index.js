import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  updatePostsData,
  setNavigatorIsAside,
  setNavigatorInTransition,
} from '../state/store';

const config = require('../utils/siteConfig');

class BlogIndex extends React.Component {
  componentWillMount() {
    const isWideScreen =
      typeof window !== 'undefined'
        ? document.documentElement.clientWidth > 776
        : false;

    const posts = this.props.data.allMarkdownRemark.edges;
    this.props.updatePostsData(posts);
    this.props.setNavigatorIsAside(false);
    if (typeof window !== 'undefined') {
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

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  navigatorIsAside: state.navigator.isAside,
  navigatorIsActive: state.posts.length,
});

const mapDispatchToProps = dispatch => ({
  updatePostsData: data => dispatch(updatePostsData(data)),
  setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
  setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val)),
});

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
