import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import SVGelem from "../Other/SVGelem.jsx";
import { ICONS } from "../../utils/constants";

const wrapperShowUp = keyframes`
  0% {
    bottom: -100px;
  }
  50% {
    bottom: -100px;
  }
  100% { 
    bottom: 0;
  }
`;

const Wrapper = styled.footer`
  animation-name: ${wrapperShowUp};
  animation-duration: 1s;
  background: ${props => props.theme.bottomBar.backgrounds.wrapper};
  bottom: 0;
  height: ${props => props.theme.bottomBar.sizes.height}px;
  left: 0;
  position: fixed;
  width: 100%;

  a {
    color: ${props => props.theme.bottomBar.colors.link};
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
      line-height: 0.5;
    }
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    display: none;
  }
`;

const SVGWrapper = styled.span`
  background: ${props => props.theme.bottomBar.backgrounds.icon};
  display: block;
  height: ${props => props.theme.bottomBar.sizes.height}px;
  width: ${props => props.theme.bottomBar.sizes.height}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  svg {
    width: 1.2em;
    height: 1.2em;
    fill: ${props => props.theme.bottomBar.colors.icon};
  }
`;

class BottomBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <SVGWrapper>
            <SVGelem svg={ICONS.HOME} />
          </SVGWrapper>
          <b>back Home</b>
        </Link>
      </Wrapper>
    );
  }
}

export default BottomBar;
