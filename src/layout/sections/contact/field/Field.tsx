import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
                <StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder} as={"textarea"}/>:
                <StyledInput id={props.inputIdAndName} name={props.inputIdAndName} placeholder={props.placeholder}
                             type={props.inputType}/>}
        </StyledField>
    );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;

  textarea{
    resize: none;
    height: 165px;
  }
`

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
`

const StyledInput = styled.input.attrs((type) => ({
    type: type || "text"
}))`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${theme.darkTheme.colors.font};
  border-radius: 6px;
  padding: 15px 18px;
  background-color: ${theme.darkTheme.colors.primaryBg};
  color: ${theme.darkTheme.colors.font};

  &::placeholder {
    color: ${theme.darkTheme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.darkTheme.colors.font};
  }
`