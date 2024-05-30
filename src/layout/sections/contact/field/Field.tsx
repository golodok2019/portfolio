import React from 'react';
import styled from "styled-components";

type FieldPropsType = {
    fieldLabel: string
    inputIdAndName: string
    placeholder?: string
    inputType?: string
    isTextArea?: boolean
}

export const Field = (props: FieldPropsType) => {
    return (
        <StyledField>
            <StyledLabel htmlFor={props.inputIdAndName}>{props.fieldLabel}</StyledLabel>
            {props.isTextArea ?
                <StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder} as={"textarea"}/> :
                <StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder} type={props.inputType}/>}
        </StyledField>
    );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label``

const StyledInput = styled.input.attrs((type) => ({
    type: type || "text"
}))``