import React from 'react';
import styled from "styled-components";
import profileWebp from "../../../assets/images/profile.webp";
import profilePng from "../../../assets/images/profile.png"
import {LinkStyledLikeButton} from '../../../components/LinkStyledLikeButton';
import {FlexContainer} from "../../../components/FlexContainer";
import {MainContainer} from "../../../styles/MainContainer";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <MainContainer>
                <FlexContainer alignItems={"center"} justifyContent={"space-around"} wrap={"wrap-reverse"}>
                    <TextContainer>
                        {/* H1 on WEB DEVELOPER for a better match when searching the internet */}
                        <StyledTitle>web developer</StyledTitle>
                        <StyledGradientContainer>
                            <StyledName>Aliaksei Holad</StyledName>
                        </StyledGradientContainer>
                        <StyledText>Good day! This is my portfolio. Here, you can get to know more about me, my skills,
                            and view some of my work.</StyledText>
                        <LinkStyledLikeButton>Contact Me</LinkStyledLikeButton>
                    </TextContainer>
                    <picture>
                        <source srcSet={profileWebp} type={"image/webp"}/>
                        <Photo src={profilePng} alt={"My photo"}/>
                    </picture>
                </FlexContainer>
                <a href={"/#"} aria-label={"Link to the bottom"}><Icon iconId={"scrollDarkTheme"} width={"32"}
                                                                       height={"32"} viewBox={"0 0 32 32"}/></a>
            </MainContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;

  @media ${theme.media.mainContainerWrap} {
    svg {
      margin-top: 30px;
    }
  }
`

const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 340px;
    height: 340px;
  }
`

const StyledName = styled.h2`
  ${font({weight: 600, FMax: 72, FMin: 40, color: "transparent"})};
`

const StyledTitle = styled.h1`
  ${font({weight: 400, FMax: 20, FMin: 16, color: theme.darkTheme.colors.developmentPostFont, family: "Tinos, serif"})};
  text-transform: uppercase;
`

const StyledGradientContainer = styled.div`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color: transparent;
  -webkit-background-clip: text;
`

const StyledText = styled.p`
  letter-spacing: 0.04em;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  text-align: left;

  ${StyledName} {
    margin: 11px;
  }

  ${LinkStyledLikeButton} {
    width: 140px;
    margin: 30px 0 0;
  }

  @media ${theme.media.mainContainerWrap} {
    ${StyledName} {
      margin: 12px 0 16px;
    }

    ${LinkStyledLikeButton} {
      margin: 16px auto 0;
    }

    text-align: center;
  }
`