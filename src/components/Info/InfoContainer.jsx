import React from "react";
import { connect } from "react-redux";
import { toggleInfoScreen } from "../../state/store";
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

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: state.navigator.isAside,
    isRolledDown: state.info.isRolledDown,
    inTransition: state.info.inTransition
  };
};

const mapDispatchToProps = dispatch => {
  return { btnOnClick: () => dispatch(toggleInfoScreen()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
