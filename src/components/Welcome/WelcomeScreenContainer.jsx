import React from "react";
import WelcomeScreen from "./WelcomeScreen";

class WelcomeScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleScreen = this.toggleScreen.bind(this);
    this.updateSreenInTransition = this.updateSreenInTransition.bind(this);
    this.state = {
      screenRolledUp: true,
      screenInTransition: false
    };
  }

  toggleScreen() {
    this.setState(prevState => ({
      screenRolledUp: !prevState.screenRolledUp,
      screenInTransition: true
    }));
  }

  updateSreenInTransition(val) {
    this.setState(() => ({ screenInTransition: val }));
  }

  render() {
    return (
      <WelcomeScreen
        buttonOnClick={this.toggleScreen}
        rolledUp={this.state.screenRolledUp}
        inTransition={this.state.screenInTransition}
        updateInTransition={this.updateSreenInTransition}
        navigatorIsAside={this.props.navigatorIsAside}
      />
    );
  }
}

export default WelcomeScreenContainer;
