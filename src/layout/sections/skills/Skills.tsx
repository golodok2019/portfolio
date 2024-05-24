import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexContainer wrap={"wrap"}>
                <Skill iconId={"javaScript"} skillTitle={"JAVASCRIPT"}/>
                <Skill iconId={"typeScript"} skillTitle={"TYPESCRIPT"}/>
                <Skill iconId={"mongoDb"} skillTitle={"MONGO DB"}/>
                <Skill iconId={"jest"} skillTitle={"JEST"}/>
                <Skill iconId={"expressJs"} skillTitle={"EXPRESS JS"}/>
                <Skill iconId={"docker"} skillTitle={"DOCKER"}/>
                <Skill iconId={"reactJs"} skillTitle={"REACT JS"}/>
                <Skill iconId={"reactNative"} skillTitle={"REACT NATIVE"}/>
                <Skill iconId={"styledComponents"} skillTitle={"STYLED COMPONENTS"}/>
                <Skill iconId={"redux"} skillTitle={"REDUX"}/>
                <Skill iconId={"git"} skillTitle={"GIT"}/>
            </FlexContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: aqua;
  min-height: 100vh;
`