import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Objects/Icon.jsx";
import { ICONS } from "../../constants";

const Wrapper = styled.footer`
  background: ${props => props.theme.bgColors.first};
  bottom: 0;
  height: ${props => props.theme.sizes.bottomBarHeight}px;
  left: 0;
  position: fixed;
  width: 60%;

  a {
    color: ${props => props.theme.fgColors.firstSuperLight};
    display: block;
    height: 100%;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 1.2em;
    font-weight: 300;
    padding-top: 0.6em;

    svg {
      display: inline;
      width: 1.2em;
      height: 1.2em;
      vertical-align: baseline;
      margin: 0 0.5em -0.3em 0;
      fill: ${props => props.theme.bgColors.firstDark};
    }
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    display: none;
  }
`;

const IconWrapper = styled.span`
  background: red;
  display: inline-block;
  width: ${props => props.theme.sizes.bottomBarHeight}px;
  height: ${props => props.theme.sizes.bottomBarHeight}px;
  padding: 10px;
`;

class BottomBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <Icon icon={ICONS.ARROW_LEFT} />
          Back to post list
        </Link>
      </Wrapper>
    );
  }
}

export default BottomBar;
