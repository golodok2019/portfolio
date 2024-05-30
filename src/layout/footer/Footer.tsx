import React from 'react';
import styled from "styled-components";
import {FlexContainer} from '../../components/FlexContainer';
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={"column"} alignItems={"center"}>
                <Name>Aliaksei Holad</Name>
                <FooterItemsList>
                    <FooterItem>
                        <FooterLink aria-label={"LinkedIn"} >
                            <Icon iconId={"linkedInDarkTheme"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink aria-label={"Mail"} >
                            <Icon iconId={"mail"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink aria-label={"GitHub"} >
                            <Icon iconId={"gitHubDarkTheme"}/>
                        </FooterLink>
                    </FooterItem>
                </FooterItemsList>
                <Copyright>© 2024 Aliaksei Holad, All Rights Reserved.</Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
`

const Name = styled.span``

const FooterItemsList = styled.ul`
  display: flex;
  gap: 20px;
`

const FooterItem = styled.li``

const FooterLink = styled.a``

const Copyright = styled.small``