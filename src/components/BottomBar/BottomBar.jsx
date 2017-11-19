import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import Icon from "../Objects/Icon.jsx";
import { ICONS } from "../../constants";

const wrapperShowUp = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

const Wrapper = styled.footer`
  animation-name: ${wrapperShowUp};
  animation-duration: 1s;
  background: ${props => props.theme.bgColors.first};
  bottom: 0;
  height: ${props => props.theme.sizes.bottomBarHeight}px;
  left: 0;
  position: fixed;

  a {
    color: ${props => props.theme.fgColors.white};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;

    b {
      font-size: 1.2em;
      font-weight: 300;
      padding: 0 0.6em;
      margin: 0;
      float: left;
      line-height: 0;
      margin-top: -0.2em;
      background: red;
    }
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    display: none;
  }
`;

const IconWrapper = styled.span`
  background: ${props => props.theme.bgColors.firstDark};
  display: block;
  height: ${props => props.theme.sizes.bottomBarHeight}px;
  width: ${props => props.theme.sizes.bottomBarHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  svg {
    width: 1.2em;
    height: 1.2em;
    fill: ${props => props.theme.bgColors.white};
  }
`;

class BottomBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <IconWrapper>
            <Icon icon={ICONS.HOME} />
          </IconWrapper>
          <b>Home</b>
        </Link>
      </Wrapper>
    );
  }
}

export default BottomBar;
