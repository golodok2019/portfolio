import React from 'react';
import styled from "styled-components";
import {Technology} from "./technology/technology";

type TechnologiesPropsType = {
    technologiesList: Array<string>
}

export const Technologies = (props: TechnologiesPropsType) => {
    return (
        <StyledTechnologies>
            {props.technologiesList.map((technologyName)=>{
                return <Technology technologyName={technologyName}/>
            })}
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
`