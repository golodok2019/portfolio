import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../styles/Theme";

type TechnologiesPropsType = {
    technologiesList: Array<string>
}

export const Technologies = (props: TechnologiesPropsType) => {
    return (
        <StyledTechnologies>
            {props.technologiesList.map((technologyName, index)=>{
                return  <StyledTechnology key={index}> {technologyName} </StyledTechnology>
            })}
        </StyledTechnologies>
    );
};

const StyledTechnologies = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  margin: 11px 0 19px;
  flex-wrap: wrap;
`

const StyledTechnology = styled.span`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.darkTheme.colors.fontColorOnGradient};
`