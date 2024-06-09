import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {MainContainer} from "../../styles/MainContainer";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <MainContainer>
                <Menu/>
            </MainContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: ${theme.darkTheme.colors.primaryBg};
  
  @media ${theme.media.mobile}{
    height: 60px;
  }
`