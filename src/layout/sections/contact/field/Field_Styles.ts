import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const StyledField = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
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

export const S = {
    StyledField,
    StyledLabel,
    StyledInput
}