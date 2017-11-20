import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Other/Icon.jsx";
import { ICONS } from "../../utils/constants";

const Wrapper = styled.header`
  align-items: center;
  background: ${props =>
    props.navigatorIsAside
      ? props => props.theme.topBar.backgrounds.wrapperPost
      : props => props.theme.topBar.backgrounds.wrapper};
  box-shadow: ${props =>
    props.navigatorIsAside
      ? "0 1px 0px rgba(2, 2, 0, 0.05)"
      : "0 1px 1px rgba(2, 2, 0, 0.2)"};
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.topBar.sizes.height}px;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    height: ${props => props.theme.topBar.sizes.height + 12}px;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside
        ? props => props.theme.navigator.sizes.asideWidth
        : "0"};
  }
`;

const Logo = styled.span`
  display: block;
  font-size: 1em;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;
  margin-left: 1rem;

  & > a {
    text-decoration: none;
    color: ${props =>
      props.navigatorIsAside
        ? props => props.theme.topBar.colors.linkPost
        : props => props.theme.topBar.colors.link};
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
    background: ${props => props.theme.topBar.backgrounds.icon};
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

class TopBar extends React.Component {
  render() {
    return (
      <Wrapper navigatorIsAside={this.props.navigatorIsAside}>
        <Logo navigatorIsAside={this.props.navigatorIsAside}>
          <Link to="/">User Experience Notes</Link>
        </Logo>
        <OpenBtn onClick={this.props.btnOnClick} aria-label="Unfold">
          <span>
            <Icon icon={ICONS.INFO} />
          </span>
        </OpenBtn>
      </Wrapper>
    );
  }
}

export default TopBar;
