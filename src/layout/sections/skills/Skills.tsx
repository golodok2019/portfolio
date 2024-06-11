import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {MainContainer} from "../../../styles/MainContainer";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const skillData = [
    {
        iconId: "reactJs",
        skillTitle: "react js"
    },
    {
        iconId: "javaScript",
        skillTitle: "javascript"
    },
    {
        iconId: "typeScript",
        skillTitle: "typescript"
    },
    {
        iconId: "mongoDb",
        skillTitle: "mongo db"
    },
    {
        iconId: "jest",
        skillTitle: "jest"
    },
    {
        iconId: "expressJs",
        skillTitle: "express js"
    },
    {
        iconId: "docker",
        skillTitle: "docker"
    },
    {
        iconId: "reactNative",
        skillTitle: "react native"
    },
    {
        iconId: "redux",
        skillTitle: "redux"
    },
    {
        iconId: "postgreSql",
        skillTitle: "postgresql"
    },
    {
        iconId: "git",
        skillTitle: "git",
        viewBox: "0 0 256 256"
    },
    {
        iconId: "styledComponents",
        skillTitle: "styled Components"
    },
]

export const Skills: React.FC = () => {
    return (
        //TODO: Change to greed
        <StyledSkills>
            <MainContainer>
                <SectionTitle>Skills</SectionTitle>
                <FlexContainer wrap={"wrap"} gap={"120px"} justifyContent={"space-between"}>
                    {skillData.map((skill, index) => {
                        return <Skill key={index} iconId={skill.iconId} skillTitle={skill.skillTitle}
                                      viewBox={skill.viewBox}/>
                    })}
                </FlexContainer>
            </MainContainer>
        </StyledSkills>
    );
};

export const StyledSkills = styled.section`
  @media ${theme.media.tablet} {
    ${FlexContainer} {
      gap: 60px;
    }
  }
`