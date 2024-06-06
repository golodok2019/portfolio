import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {MainContainer} from "../../../styles/MainContainer";

export const Skills = () => {
    return (
        <StyledSkills>
            <MainContainer>
                <SectionTitle>Skills</SectionTitle>
                <FlexContainer wrap={"wrap"} gap={"120px"} justifyContent={"space-between"}>
                    <Skill iconId={"reactJs"} skillTitle={"REACT JS"}/>
                    <Skill iconId={"javaScript"} skillTitle={"JAVASCRIPT"}/>
                    <Skill iconId={"typeScript"} skillTitle={"TYPESCRIPT"}/>
                    <Skill iconId={"mongoDb"} skillTitle={"MONGO DB"}/>
                    <Skill iconId={"jest"} skillTitle={"JEST"}/>
                    <Skill iconId={"expressJs"} skillTitle={"EXPRESS JS"}/>
                    <Skill iconId={"docker"} skillTitle={"DOCKER"}/>
                    <Skill iconId={"reactNative"} skillTitle={"REACT NATIVE"}/>
                    <Skill iconId={"redux"} skillTitle={"REDUX"}/>
                    <Skill iconId={"git"} skillTitle={"GIT"} viewBox={"0 0 256 256"}/>
                    <Skill iconId={"styledComponents"} skillTitle={"STYLED COMPONENTS"}/>
                </FlexContainer>
            </MainContainer>
        </StyledSkills>
    );
};

const StyledSkills = styled.section``