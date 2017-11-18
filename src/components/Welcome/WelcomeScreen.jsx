import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
//import Icon from "../Objects/Icon.jsx";
//import { ICONS } from "../../constants";

const Header = styled.header`
  align-items: center;
  background: ${props =>
    props.rolledUp
      ? props => props.theme.bgColors.white
      : props => props.theme.bgColors.second};
  display: flex;
  flex-direction: ${props => (props.rolledUp ? "row" : "column")};
  justify-content: ${props => (props.rolledUp ? "space-between" : "center")};

  padding: ${props => (props.rolledUp ? ".1rem .5rem .0 1rem" : "2rem")};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    height: ${props =>
      !props.rolledUp ? "100%" : props.theme.sizes.welcomeScreenRolledUpHeight};
    left: ${props =>
      props.navigatorIsAside && props.rolledUp
        ? props => props.theme.sizes.postNavigatorAsideWidth
        : "0"};
    override: auto;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const contentEntry = keyframes`
  from {
    opacity: 0;
    transform: scale(.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const EnterBtn = styled.button`
  animation: ${contentEntry} 1s;
  animation-fill-mode: forwards;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  fill: currentColor;
  padding: 10px;
  transition: all 1s;

  > span {
    background: ${props => props.theme.fgColors.first};

    border-radius: 100%;
    display: block;
    height: ${props => (props.rolledUp ? "30" : "60")}px;
    width: ${props => (props.rolledUp ? "30" : "60")}px;
    padding: ${props => (props.rolledUp ? "5" : "10")}px;
  }
`;

const Head = styled.h2`
  animation: ${contentEntry} 1s;
  animation-fill-mode: forwards;
  color: ${props => props.theme.fgColors.white};
  font-weight: 700;
  letter-spacing: -0.04em;
  max-width: 40rem;
`;

const Message = styled.p`
  animation: ${contentEntry} 1s;
  animation-fill-mode: forwards;
  color: ${props => props.theme.fgColors.white};
  line-height: 1.5em;
  margin: 1em 0;
  max-width: 40rem;
  transition: all 1s;
`;

const Logo = styled.span`
  font-size: 1em;
  font-weight: 300;
  line-height: 1;
  margin: 1em 0;
  text-transform: uppercase;

  & > a {
    text-decoration: none;
    color: ${props =>
      props.rolledUp
        ? props => props.theme.fgColors.darkGray
        : props => props.theme.fgColors.first};
    & > b {
      background: ${props => props.theme.fgColors.second};
      color: ${props => props.theme.fgColors.white};
      display: inline-block;
      border-radius: 10%;
      width: 1em;
      height: 1em;
      transform: rotate(10deg);
      text-align: center;
      font-weight: 700;
      z-index: -1;
    }

    > b:first-child {
      transform: rotate(-15deg);
    }
  }
`;

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.screenHeader.addEventListener("transitionend", () =>
      this.props.updateInTransition(false)
    );
  }

  componentDidUpdate() {}

  render() {
    return (
      <Header
        rolledUp={this.props.rolledUp}
        innerRef={header => {
          this.screenHeader = header;
        }}
        navigatorIsAside={this.props.navigatorIsAside}
      >
        <Logo rolledUp={this.props.rolledUp}>
          <Link to="/">
            <b>U</b>ser E<b>x</b>perience Notes
          </Link>
        </Logo>
        {!this.props.rolledUp &&
          !this.props.inTransition && (
            <Head>
              If user experience really matters, some things should work better.
            </Head>
          )}
        {!this.props.rolledUp &&
          !this.props.inTransition && (
            <Message>
              f user experience really matters, some things should work better.f
              user experience really matters, some things should work better.f
            </Message>
          )}
        {!this.props.inTransition && (
          <EnterBtn
            onClick={this.props.buttonOnClick}
            rolledUp={this.props.rolledUp}
            inTransition={this.props.inTransition}
          >
            <span>
              OK
              {/*} <Icon icon={this.props.rolledUp ? ICONS.INFO : ICONS.SIGN_IN} /> */}
            </span>
          </EnterBtn>
        )}
      </Header>
    );
  }
}

export default WelcomeScreen;
