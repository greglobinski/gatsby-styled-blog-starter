import React from "react";
import { connect } from "react-redux";
import { navigatorIsAside, navigatorInTransition } from "../../state/store";
import PostsNavigator from "./PostsNavigator";

class PostsNavigatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  linkOnClick() {
    if (!this.props.isAside) {
      this.props.updateIsAside(true);

      setTimeout(() => {
        this.props.updateInTransition(false);
      }, 800);
    }
  }

  render() {
    return !!this.props.posts.length ? (
      <PostsNavigator
        location={this.props.location}
        posts={this.props.posts}
        linkOnClick={this.linkOnClick}
        isAside={this.props.isAside}
        inTransition={this.props.inTransition}
        isHidden={this.props.isHidden}
      />
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    isAside: state.navigator.isAside,
    inTransition: state.navigator.inTransition,
    isActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateIsAside: val => dispatch(navigatorIsAside(val)),
    updateInTransition: val => dispatch(navigatorInTransition(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PostsNavigatorContainer
);
