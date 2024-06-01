import React from 'react';
import styled from "styled-components";

type TechnologyPropsType = {
    technologyName: string

}

export const Technology = (props: TechnologyPropsType) => {
    return (
        <StyledTechnology>
            <TechnologyName>{props.technologyName}</TechnologyName>
        </StyledTechnology>
    );
};

const StyledTechnology = styled.li`
  background-color: blueviolet;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
`

const TechnologyName = styled.span``
