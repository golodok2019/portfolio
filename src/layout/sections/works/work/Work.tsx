import React from 'react';
import {Technologies} from "./technologies/Technologies";
import {LinkStyledLikeButton} from '../../../../components/LinkStyledLikeButton';
import {S} from "./Work_Styles";

type WorkPropsType = {
    title: string
    text: string
    srcWebp: string
    srcPng: string
    alt: string
    technologiesList: Array<string>
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageContainer>
                <picture>
                    <source srcSet={props.srcWebp} type={"image/webp"}/>
                    <S.Image src={props.srcPng} alt={props.alt}/>
                </picture>
                <LinkStyledLikeButton>View Code</LinkStyledLikeButton>
            </S.ImageContainer>
            <S.InformationContainer>
                <S.Title>{props.title}</S.Title>
                <Technologies technologiesList={props.technologiesList}/>
                <S.Text>{props.text}</S.Text>
            </S.InformationContainer>
        </S.StyledWork>
    );
};
