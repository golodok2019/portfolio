import styled from "styled-components";
import {theme} from "../styles/Theme";

export const ContactLink = styled.a`
  padding: 12px 20px 13px;
  border-radius: 6px;
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color: ${theme.darkTheme.colors.fontSecondary};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`