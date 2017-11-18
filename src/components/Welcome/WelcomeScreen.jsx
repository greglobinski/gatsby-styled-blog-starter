import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Objects/Icon.jsx";
import { ICONS } from "../../constants";

const Wrapper = styled.div`
  background: ${props =>
    props.isRolledUp
      ? props => props.theme.bgColors.white
      : props => props.theme.bgColors.firstDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${props => (props.appInitialState ? "100vh" : "0")};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1), background 0s;
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    height: ${props =>
      !props.isRolledUp
        ? "100%"
        : props.theme.sizes.welcomeScreenRolledUpHeight};
    left: ${props =>
      props.navigatorIsAside && props.isRolledUp
        ? props => props.theme.sizes.postNavigatorAsideWidth
        : "0"};
    override: auto;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const welcomeEntry = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
`;

const Welcome = styled.div`
  animation: ${welcomeEntry} 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  padding: 2em;
  transition: all 1s;
`;

const Head = styled.h2`
  color: ${props => props.theme.fgColors.white};
  font-weight: 700;
  letter-spacing: -0.04em;
  max-width: 40rem;
`;

const Message = styled.p`
  color: ${props => props.theme.fgColors.white};
  line-height: 1.5em;
  margin: 1em 0;
  max-width: 40rem;
  transition: all 1s;
`;

const CLoseBtn = styled.button`
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
    height: ${props => (props.isRolledUp ? "30" : "60")}px;
    width: ${props => (props.isRolledUp ? "30" : "60")}px;
    padding: ${props => (props.isRolledUp ? "5" : "10")}px;
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.span`
  display: block;
  font-size: 1em;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;

  & > a {
    text-decoration: none;
    color: ${props =>
      props.isRolledUp
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

const OpenBtn = styled.button`
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
    height: 24px;
    width: 24px;
    padding: 3px;
  }
`;

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper
        isRolledUp={this.props.isRolledUp}
        innerRef={header => {
          this.screenHeader = header;
        }}
        navigatorIsAside={this.props.navigatorIsAside}
        appInitialState={this.props.appInitialState}
      >
        {this.props.isRolledUp && (
          <Header>
            <Logo>
              <Link to="/">
                <b>U</b>ser E<b>x</b>perience Notes
              </Link>
            </Logo>
            <OpenBtn onClick={this.props.btnOnClick} aria-label="Unfold">
              <span>
                <Icon icon={ICONS.INFO} />
              </span>
            </OpenBtn>
          </Header>
        )}

        {!this.props.isRolledUp && (
          <Welcome>
            <Head>
              If user experience really matters, some things should work better.
            </Head>
            <Message>
              f user experience really matters, some things should work better.f
              user experience really matters, some things should work better.f
            </Message>
            <CLoseBtn onClick={this.props.btnOnClick} aria-label="Roll up">
              <span>
                <Icon icon={ICONS.SIGN_IN} />
              </span>
            </CLoseBtn>
          </Welcome>
        )}
      </Wrapper>
    );
  }
}

export default WelcomeScreen;
