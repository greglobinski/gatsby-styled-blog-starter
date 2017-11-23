import React from "react";
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

export default TopBarContainer;
