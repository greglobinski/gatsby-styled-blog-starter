import React from "react";
import PostsNavigator from "./PostsNavigator";

class PostsNavigatorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PostsNavigator
        posts={this.props.posts}
        linkOnClick={this.props.linkOnClick}
        isAside={this.props.isAside}
        inTransition={this.props.inTransition}
        isHidden={this.props.isHidden}
      />
    );
  }
}

export default PostsNavigatorContainer;
