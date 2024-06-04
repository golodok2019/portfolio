import React from 'react';
import styled from "styled-components";
import {Technologies} from "./technologies/Technologies";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    text: string
    src: string
    alt: string
    technologiesList: Array<string>
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={props.alt}/>
            <InformationContainer>
                <Title>{props.title}</Title>
                <Technologies technologiesList={props.technologiesList}/>
                <Text>{props.text}</Text>
            </InformationContainer>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.darkTheme.colors.workBg};
  border-radius: 6px;
  max-width: 522px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
  border-radius: 6px 6px 0;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-bottom: 31px;
`

const InformationContainer = styled.div`
  margin-top: 29px;
  padding: 0 26px;
`