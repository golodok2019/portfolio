import React from 'react';
import profileWebp from "../../../assets/images/profile.webp";
import profilePng from "../../../assets/images/profile.png"
import {LinkStyledLikeButton} from '../../../components/LinkStyledLikeButton';
import {FlexContainer} from "../../../components/FlexContainer";
import {MainContainer} from "../../../styles/MainContainer";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <MainContainer>
                <FlexContainer alignItems={"center"} justifyContent={"space-around"} wrap={"wrap-reverse"}>
                    <S.TextContainer>
                        {/* H1 on WEB DEVELOPER for a better match when searching the internet */}
                        <S.StyledTitle>web developer</S.StyledTitle>
                        <S.StyledGradientContainer>
                            <S.StyledName>Aliaksei Holad</S.StyledName>
                        </S.StyledGradientContainer>
                        <S.StyledText>Good day! This is my portfolio. Here, you can get to know more about me, my
                            skills,
                            and view some of my work.</S.StyledText>
                        <LinkStyledLikeButton>Contact Me</LinkStyledLikeButton>
                    </S.TextContainer>
                    <picture>
                        <source srcSet={profileWebp} type={"image/webp"}/>
                        <S.Photo src={profilePng} alt={"My photo"}/>
                    </picture>
                </FlexContainer>
                <a href={"/#"} aria-label={"Link to the bottom"}><Icon iconId={"scrollDarkTheme"} width={"32"}
                                                                       height={"32"} viewBox={"0 0 32 32"}/></a>
            </MainContainer>
        </S.StyledMain>
    );
};
