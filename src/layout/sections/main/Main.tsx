import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/profile.webp";
import {ContactLink} from '../../../components/ContactLink';
import {FlexContainer} from "../../../components/FlexContainer";
import {MainContainer} from "../../../styles/MainContainer";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <MainContainer>
                <FlexContainer alignItems={"center"} justifyContent={"space-between"}>
                    <TextContainer>
                        {/* H1 on WEB DEVELOPER for a better match when searching the internet */}
                        <StyledTitle>web developer</StyledTitle>
                        <StyledGradientContainer>
                            <StyledName>Aliaksei Holad</StyledName>
                        </StyledGradientContainer>
                        <StyledText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                            sunt.</StyledText>
                        <ContactLink>Contact Me</ContactLink>
                    </TextContainer>
                    <Photo src={photo} alt={"My photo"}/>
                </FlexContainer>
            </MainContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`
const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`

const StyledName = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  margin: 10px 0 11px;
`

const StyledTitle = styled.h1`
  color: ${theme.darkTheme.colors.postFont};
  font-family: Tinos, serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`

const StyledGradientContainer = styled.div`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color: transparent;
  -webkit-background-clip: text;
`

const StyledText = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .1em;
  margin: 0 0 41px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  
  a {
    width: 134px;
  }
  
`