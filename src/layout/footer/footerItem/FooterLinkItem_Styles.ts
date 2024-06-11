import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const FooterLink = styled.a`
  //Color for icons
  color: ${theme.darkTheme.colors.fontColorOnGradient};
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

export const S = {
    FooterLink,
    Caption
}
