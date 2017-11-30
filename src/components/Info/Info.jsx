import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "gatsby-link";
import SVGelem from "../Other/SVGelem.jsx";
import { ICONS, LOGOS } from "../../utils/constants";
import config from "../../utils/siteConfig";

const Wrapper = styled.div`
  background: ${props => props.theme.info.backgrounds.wrapper};
  height: 100%;
  left: 0;
  min-height: ${props => (props.appInitialState ? "100vh" : "0")};
  position: absolute;
  right: 0;
  top: ${props => (props.isRolledDown ? "0" : "-100%")};
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1), background 0s;
  overflow: auto;
  z-index: 2;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside ? props.theme.navigator.sizes.asideWidth : "0"};
  }
`;

const Content = styled.div`
  color: ${props => props.theme.info.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 1.05em;
  height: 100%;
  justify-content: center;
  line-height: 1.5;
  max-width: ${props => props.theme.info.sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 2em;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    p {
      font-size: 1.1em;
    }
  }

  a {
    border-bottom: 1px solid ${props => props.theme.info.colors.linkHover};
    color: ${props => props.theme.info.colors.link};
    font-weight: bold;
    text-shadow: 2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px -2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 2px ${props => props.theme.info.backgrounds.wrapper},
      -2px 0 ${props => props.theme.info.backgrounds.wrapper},
      2px 0 ${props => props.theme.info.backgrounds.wrapper};
    display: inline-block;
    line-height: 1.1;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: ${props => props.theme.info.colors.linkHover};
      border-color: ${props => props.theme.info.colors.link};
    }
  }
`;

const Logo = styled.span`
  display: block;
  margin-bottom: 1em;
  width: 250px;
  max-width: 80%;
  fill: ${props => props.theme.info.colors.text};
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 64px;
  height: 64px;
  position: relative;
  margin: 1em 0 0 -0.5em;

  > span {
    background: ${props => props.theme.info.backgrounds.btn};
    color: ${props => props.theme.info.colors.btn};
    fill: currentColor;
    border-radius: 100%;
    display: block;
    height: 44px;
    width: 44px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    padding: 16px;
  }
`;

const Info = props => (
  <Wrapper
    isRolledDown={props.isRolledDown}
    inTransition={props.inTransition}
    navigatorIsAside={props.navigatorIsAside}
  >
    <Content>
      <Logo>
        <SVGelem svg={LOGOS.MAIN} />
      </Logo>
      <p>
        This is the <em>gatsby-styled-blog-starter</em> <b>demo site</b>. To
        download the code and get some instructions visit the Github{" "}
        <a
          href="https://github.com/greglobinski/gatsby-styled-blog-starter"
          target="_blank"
          rel="noopener"
        >
          repository
        </a>{" "}
        . To be informed about updates follow{" "}
        <a
          href="https://twitter.com/greglobinski"
          target="_blank"
          rel="noopener"
        >
          @greglobinski
        </a>
      </p>
      <CloseBtn onClick={props.btnOnClick} aria-label="Close">
        <span>
          <SVGelem svg={ICONS.CLOSE} />
        </span>
      </CloseBtn>
    </Content>
  </Wrapper>
);

export default Info;

//
