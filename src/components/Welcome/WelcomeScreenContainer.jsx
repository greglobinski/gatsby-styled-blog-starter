import React from "react";
import WelcomeScreen from "./WelcomeScreen";

class WelcomeScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateSreenInTransition = this.updateSreenInTransition.bind(this);
    this.state = {
      screenRolledUp: false,
      screenInTransition: false
    };
  }

  updateSreenInTransition(val) {
    this.setState(() => ({ screenInTransition: val }));
  }

  render() {
    return (
      <WelcomeScreen
        isRolledUp={this.props.isRolledUp}
        inTransition={this.props.inTransition}
        btnOnClick={this.props.btnOnClick}
        navigatorIsAside={this.props.navigatorIsAside}
        appInitialState={this.props.appInitialState}
      />
    );
  }
}

export default WelcomeScreenContainer;
