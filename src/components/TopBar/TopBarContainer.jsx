import React from "react";
import { connect } from "react-redux";
import { toggleInfoScreen } from "../../state/store";
import TopBar from "./TopBar";

class TopBarContainer extends React.Component {
  render() {
    return (
      <TopBar
        btnOnClick={this.props.btnOnClick}
        navigatorIsAside={this.props.navigatorIsAside}
        navigatorIsActive={this.props.navigatorIsActive}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: state.navigator.isAside,
    navigatorIsActive: state.posts.length
  };
};

const mapDispatchToProps = dispatch => {
  return { btnOnClick: () => dispatch(toggleInfoScreen()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
