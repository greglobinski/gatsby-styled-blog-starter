import React from "react";
import Info from "./Info";

class InfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfoInTransition = this.updateInfoInTransition.bind(this);
    this.state = {
      screenRolledUp: false,
      screenInTransition: false
    };
  }

  updateInfoInTransition(val) {
    this.setState(() => ({ screenInTransition: val }));
  }

  render() {
    return (
      <Info
        isRolledDown={this.props.isRolledDown}
        inTransition={this.props.inTransition}
        btnOnClick={this.props.btnOnClick}
        navigatorIsAside={this.props.navigatorIsAside}
      />
    );
  }
}

export default InfoContainer;
