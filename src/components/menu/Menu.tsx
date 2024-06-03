import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {LinkStyledLikeButton} from "../LinkStyledLikeButton";

export const Menu = () => {
    return (
        <StyledMenu role={"menu"}>
            <StyledList>
                <li role={"menuitem"}>
                    <StyledLink href={"/#"}>Home</StyledLink>
                </li>
                <li role={"menuitem"}>
                    <StyledLink href={"/#"}>Projects</StyledLink>
                </li>
                <li role={"menuitem"}>
                    <LinkStyledLikeButton href={"/#"}>Contact</LinkStyledLikeButton>
                </li>
            </StyledList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

`

const StyledList = styled.ul`
  display: flex;
  gap: 9rem;

  li:nth-child(2) {
    margin-left: auto;
  }
`

const StyledLink = styled.a`
  color: ${theme.darkTheme.colors.font};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    border-bottom: 2px solid;
    border-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%) 1;
  }
`