import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import photo from "../../../assets/images/profile.webp";
import {FlexContainer} from "../../../components/FlexContainer";
import {MainContainer} from "../../../styles/MainContainer";

export const Main = () => {
    return (
        <StyledMain>
            <MainContainer>
                <FlexContainer alignItems={"center"} justifyContent={"space-between"}>
                    <div>
                        {/* H1 on WEB DEVELOPER for a better match when searching the internet */}
                        <StyledTitle>WEB DEVELOPER</StyledTitle>
                        <StyledName>Aliaksei Holad</StyledName>
                        <p style={{maxWidth: "500px"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet
                            sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                        <button style={{width: "134px", height: "45px"}}>Contact Me</button>
                    </div>
                    <Photo src={photo} alt={"My photo"} />
                </FlexContainer>
                <Icon iconId={"scrollDarkTheme"}/>
            </MainContainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
`
const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`

const StyledName = styled.h2`
`

const StyledTitle = styled.h1`
`