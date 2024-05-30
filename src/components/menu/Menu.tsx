import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu role={"menu"}>
            <ul>
                <li role={"menuitem"}>
                    <a href={"/#"}>Home</a>
                </li>
                <li role={"menuitem"}>
                    <a href={"/#"}>Projects</a>
                </li>
                <li role={"menuitem"}>
                    <a href={"/#"}>Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
  
  a {
    color: ${theme.darkTheme.colors.font};
  }
`