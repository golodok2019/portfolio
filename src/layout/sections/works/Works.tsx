import React from 'react';
import styled from "styled-components";
import {FlexContainer} from '../../../components/FlexContainer';
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImage from "../../../assets/images/project.webp";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <FlexContainer justifyContent={"space-around"}>
                <Work title={"TITLE PROJECT"}
                      text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                      src={projectImage}
                      alt={"My project"}
                      technologiesList={["javascript", "typescript"]}/>

                <Work title={"I N S I G H T G R A M"}
                      text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                      src={projectImage}
                      alt={"My project"}
                      technologiesList={["C#", "typescript", "React"]}/>

            </FlexContainer>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: cadetblue;
`