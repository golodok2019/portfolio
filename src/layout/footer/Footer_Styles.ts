import styled from "styled-components";
import {font} from "../../styles/Common";

const StyledFooter = styled.footer`
  margin: 190px 0 50px;
  gap: 40px;
`

const Name = styled.span`
  ${font({weight: 500, FMax: 20, FMin: 18})}
  letter-spacing: 0.06em;
  text-transform: capitalize;
`

const FooterLinkItemsList = styled.ul`
  display: flex;
  gap: 70px;
  margin: 40px 0 60px;
`

const Copyright = styled.small`
  font-size: 14px;
  opacity: 0.5;
  text-transform: capitalize;
`

export const S = {
    StyledFooter,
    Name,
    FooterLinkItemsList,
    Copyright
}