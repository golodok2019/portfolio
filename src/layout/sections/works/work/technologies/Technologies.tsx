import React from 'react';
import styled from "styled-components";
import {Technology} from "./technology/Technology";

type TechnologiesPropsType = {
    technologiesList: Array<string>
}

export const Technologies = (props: TechnologiesPropsType) => {
    return (
        <StyledTechnologies>
            {props.technologiesList.map((technologyName, index)=>{
                return <Technology key={index} technologyName={technologyName}/>
            })}
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: row;
`