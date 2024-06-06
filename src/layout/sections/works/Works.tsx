import React from 'react';
import styled from "styled-components";
import {FlexContainer} from '../../../components/FlexContainer';
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImageWebp from "../../../assets/images/project.webp";
import projectImagePng from "../../../assets/images/project.png";
import { MainContainer } from '../../../styles/MainContainer';

export const Works = () => {
    return (
        <StyledWorks>
            <MainContainer>
                <SectionTitle>Projects</SectionTitle>
                <FlexContainer justifyContent={"space-between"} wrap={"wrap"} alignItems={"center"}>
                    <Work title={"title project"}
                          text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                          srcWebp={projectImageWebp}
                          srcPng={projectImagePng}
                          alt={"My project"}
                          technologiesList={["javascript", "typescript"]}/>

                    <Work title={"insightgram"}
                          text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                          srcWebp={projectImageWebp}
                          srcPng={projectImagePng}
                          alt={"My project"}
                          technologiesList={["C#", "typescript", "React"]}/>
                </FlexContainer>
            </MainContainer>
        </StyledWorks>
    );
};

const StyledWorks = styled.section``