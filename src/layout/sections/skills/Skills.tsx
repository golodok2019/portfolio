import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {MainContainer} from "../../../styles/MainContainer";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        //TODO: Change to greed
        <StyledSkills>
            <MainContainer>
                <SectionTitle>Skills</SectionTitle>
                <FlexContainer wrap={"wrap"} gap={"120px"} justifyContent={"space-between"}>
                    <Skill iconId={"reactJs"} skillTitle={"react js"}/>
                    <Skill iconId={"javaScript"} skillTitle={"javascript"}/>
                    <Skill iconId={"typeScript"} skillTitle={"typescript"}/>
                    <Skill iconId={"mongoDb"} skillTitle={"mongo db"}/>
                    <Skill iconId={"jest"} skillTitle={"jest"}/>
                    <Skill iconId={"expressJs"} skillTitle={"express js"}/>
                    <Skill iconId={"docker"} skillTitle={"docker"}/>
                    <Skill iconId={"reactNative"} skillTitle={"react native"}/>
                    <Skill iconId={"redux"} skillTitle={"redux"}/>
                    <Skill iconId={"postgreSql"} skillTitle={"postgresql"}/>
                    <Skill iconId={"git"} skillTitle={"GIT"} viewBox={"0 0 256 256"}/>
                    <Skill iconId={"styledComponents"} skillTitle={"styled components"}/>
                </FlexContainer>
            </MainContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

    @media ${theme.media.mobile}{
      ${FlexContainer}{
        gap: 60px;
      }
    }

`