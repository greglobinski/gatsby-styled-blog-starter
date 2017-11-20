import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Objects/Icon.jsx";
import { ICONS } from "../../utils/constants";

const Wrapper = styled.header`
  align-items: center;
  background: ${props =>
    props.navigatorIsAside
      ? props => props.theme.bgColors.white
      : props => props.theme.bgColors.firstLight};
  box-shadow: ${props =>
    props.navigatorIsAside
      ? "0 1px 0px rgba(2, 2, 0, 0.05)"
      : "0 1px 1px rgba(2, 2, 0, 0.2)"};
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.sizes.topBarHeight}px;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    height: ${props => props.theme.sizes.topBarHeight + 12}px;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside
        ? props => props.theme.sizes.postNavigatorAsideWidth
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
        ? props => props.theme.fgColors.first
        : props => props.theme.fgColors.white};

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

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 16px;
  }
`;

class TopBar extends React.Component {
  render() {
    return (
      <Wrapper navigatorIsAside={this.props.navigatorIsAside}>
        <Logo navigatorIsAside={this.props.navigatorIsAside}>
          <Link to="/">
            <b>U</b>ser E<b>x</b>perience Notes
          </Link>
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
