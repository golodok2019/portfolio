import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Field} from "./field/Field";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Your name"} fieldLabel={"Name"}/>
                <Field placeholder={"Your email"} fieldLabel={"Email"}/>
                <Field placeholder={"Message for me"} fieldLabel={"Message"} isTextArea/>
                <Button type={"submit"}>Submit</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: cornflowerblue;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
`