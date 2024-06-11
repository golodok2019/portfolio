import React from 'react';
import {FlexContainer} from '../../../components/FlexContainer';
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImageWebp from "../../../assets/images/project.webp";
import projectImagePng from "../../../assets/images/project.png";
import {MainContainer} from '../../../styles/MainContainer';

const workData = [
    {
        title: "title project",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        srcWebp: projectImageWebp,
        srcPng: projectImagePng,
        alt: "title project",
        technologiesList: ["javascript", "typescript"]
    },
    {
        title: "social network",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        srcWebp: projectImageWebp,
        srcPng: projectImagePng,
        alt: "social network",
        technologiesList: ["C#", "typescript", "React", "Postgre", "CSS", "HTML"]
    }
]

export const Works: React.FC = () => {
    return (
        <section>
            <MainContainer>
                <SectionTitle>Projects</SectionTitle>
                <FlexContainer justifyContent={"space-between"} wrap={"wrap"} alignItems={"flex-start"} gap={"20px"}>
                    {workData.map((work, index) => {
                        return <Work key={index}
                                     title={work.title}
                                     text={work.text}
                                     srcWebp={work.srcWebp}
                                     srcPng={work.srcPng}
                                     alt={work.alt}
                                     technologiesList={work.technologiesList}/>
                    })}
                </FlexContainer>
            </MainContainer>
        </section>
    );
};