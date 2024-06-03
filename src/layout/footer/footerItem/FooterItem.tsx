import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";

type FooterItemPropsType = {
    iconId: string
    caption: string
    viewBox?: string
}

export const FooterItem = (props: FooterItemPropsType) => {
    return (
        <StyledFooterItem>
            <FlexContainer direction={"column"} alignItems={"center"} gap={"9px"}>
                <FooterLink>
                    <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                    <Caption>{props.caption}</Caption>
                </FooterLink>
            </FlexContainer>
        </StyledFooterItem>
    );
};

const StyledFooterItem = styled.li``

const FooterLink = styled.a`
  //Color for icons
  color: ${theme.darkTheme.colors.socialLinkColor};
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  cursor: pointer;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  
  &:hover{
    transform: translateY(-4px);
  }
`

const Caption = styled.span`
  color: ${theme.darkTheme.colors.font};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12em;
  margin-top: 9px;
`