import React from 'react';
import styled from "styled-components";
import {Technologies} from "./technologies/Technologies";

type WorkPropsType = {
    title: string
    text: string
    src: string
    alt: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={props.alt}/>
            <Title>{props.title}</Title>
            <Technologies></Technologies>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: coral;
  max-width: 522px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`

const Link = styled.a``

const Title = styled.h3``

const Text = styled.p``