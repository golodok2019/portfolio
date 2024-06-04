import React from 'react';
import styled from "styled-components";
import {FlexContainer} from '../../components/FlexContainer';
import {FooterItem} from "./footerItem/FooterItem";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={"column"} alignItems={"center"}>
                <Name>Aliaksei Holad</Name>
                <FooterItemsList>
                    <FooterItem iconId={"linkedInDarkTheme"} caption={"linkedin"}/>
                    <FooterItem iconId={"mail"} caption={"mail"}/>
                    <FooterItem iconId={"gitHubDarkTheme"} caption={"github"} viewBox={"0 -3 38 38"}/>
                </FooterItemsList>
                <Copyright>© 2024 Aliaksei Holad, All Rights Reserved.</Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin: 190px 0 50px;
  gap: 40px;
`

const Name = styled.span`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: capitalize;
`

const FooterItemsList = styled.ul`
  display: flex;
  gap: 70px;
  margin: 40px 0;
`

const Copyright = styled.small`
  opacity: 0.5;
  text-transform: capitalize;
`