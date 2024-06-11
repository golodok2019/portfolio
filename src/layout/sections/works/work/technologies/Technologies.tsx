import React from 'react';
import {S} from "./Technologies_Styles";

type TechnologiesPropsType = {
    technologiesList: Array<string>
}

export const Technologies: React.FC<TechnologiesPropsType> = (props: TechnologiesPropsType) => {
    return (
        <S.StyledTechnologies>
            {props.technologiesList.map((technologyName, index) => {
                return <S.StyledTechnology key={index}> {technologyName} </S.StyledTechnology>
            })}
        </S.StyledTechnologies>
    );
};
