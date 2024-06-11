import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const StyledMenu = styled.nav`
  position: relative;
  top: 40px;
  
  @media ${theme.media.mobile}{
    top: 20px;
  }
`

export const StyledList = styled.ul`
  display: flex;

  li:nth-child(2) {
    margin-left: auto;
  }
  
  li:last-child {
    margin-left: 90px;
    
    @media ${theme.media.mobile}
    {
      margin-left: 35px;
    }
  }
`

export const StyledLink = styled.a`
  color: ${theme.darkTheme.colors.font};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    border-bottom: 2px solid;
    border-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%) 1;
  }
`