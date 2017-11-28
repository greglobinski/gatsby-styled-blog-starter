import React from "react";
import { connect } from "react-redux";
import { navigatorIsAside } from "../../state/store";
import PostsNavigator from "./PostsNavigator";

class PostsNavigatorContainer extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.posts.length && (
          <PostsNavigator
            location={this.props.location}
            posts={this.props.posts}
            linkOnClick={this.props.linkOnClick}
            isAside={this.props.isAside}
            inTransition={this.props.inTransition}
            isHidden={this.props.isHidden}
          />
        )}
      </div>
    );
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
    linkOnClick: () => {
      dispatch(navigatorIsAside(true, true));
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PostsNavigatorContainer
);
