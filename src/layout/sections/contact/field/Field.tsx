import React from 'react';
import styled from "styled-components";

type FieldPropsType = {
    fieldLabel: string
    placeholder?: string
    isTextArea?: boolean
}

export const Field = (props: FieldPropsType) => {
    return (
        <StyledField>
            <StyledLabel>{props.fieldLabel}</StyledLabel>
            {props.isTextArea ? <StyledInput placeholder={props.placeholder} as={"textarea"}/> :
                <StyledInput placeholder={props.placeholder}/>}
        </StyledField>
    );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label``

const StyledInput = styled.input``