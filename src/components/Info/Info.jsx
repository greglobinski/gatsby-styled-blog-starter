import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Other/Icon";
import { ICONS } from "../../utils/constants";
import config from "../../utils/siteConfig";
import logo from "../../../static/logos/logo-lines.svg";

const Wrapper = styled.div`
  background: ${props => props.theme.info.backgrounds.wrapper};
  height: 100%;
  left: 0;
  min-height: ${props => (props.appInitialState ? "100vh" : "0")};
  position: absolute;
  right: 0;
  top: ${props => (props.isRolledDown ? "0" : "-99.5%")};
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1), background 0s;
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside ? props.theme.navigator.sizes.asideWidth : "0"};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: ${props => props.theme.info.sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  max-width: 200px;

  svg {
    fill: red;
    background-color: blue;
  }
`;

const OpenBtn = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: all 1s;
  position: absolute;
  top: 0;
  right: 0;

  > span {
    background: ${props => props.theme.topBar.backgrounds.icon};
    color: ${props => props.theme.topBar.colors.link};
    fill: currentColor;
    border-radius: 100%;
    display: block;
    height: 24px;
    width: 24px;
    padding: 3px;
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 16px;
  }
`;

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(logo);
    return (
      <Wrapper
        isRolledDown={this.props.isRolledDown}
        inTransition={this.props.inTransition}
        innerRef={header => {
          this.screenHeader = header;
        }}
        navigatorIsAside={this.props.navigatorIsAside}
      >
        <OpenBtn onClick={this.props.btnOnClick} aria-label="Unfold">
          <span>
            <Icon icon={ICONS.INFO} />
          </span>
        </OpenBtn>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: logo }} />
          <Logo src={logo} alt="StyledBlog starter for GatsbyJS" />
        </Content>
      </Wrapper>
    );
  }
}

export default Info;
