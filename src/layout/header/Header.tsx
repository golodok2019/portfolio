import React from 'react';
import styled from "styled-components";
import { FlexContainer } from '../../components/FlexContainer';
import {Menu} from "../../components/menu/Menu";
import {MainContainer} from "../../styles/MainContainer";

export const Header = () => {
    return (
        <StyledHeader>
            <MainContainer>
                <FlexContainer justifyContent={"center"}>
                    <Menu/>
                </FlexContainer>
            </MainContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header``