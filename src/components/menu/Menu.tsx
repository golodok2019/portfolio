import React from 'react';
import {LinkStyledLikeButton} from "../LinkStyledLikeButton";
import {StyledMenu, StyledList, StyledLink} from "./Menu_Styles";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledList role={"menu"}>
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
