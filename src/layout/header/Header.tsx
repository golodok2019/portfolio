import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {MainContainer} from "../../styles/MainContainer";

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
  padding: 40px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`