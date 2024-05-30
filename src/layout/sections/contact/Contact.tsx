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
                <Field placeholder={"Your name"} fieldLabel={"Name"} inputIdAndName={"name"}/>
                <Field placeholder={"Your email"} fieldLabel={"Email"} inputIdAndName={"email"} inputType={"email"}/>
                <Field placeholder={"Message for me"} fieldLabel={"Message"} inputIdAndName={"message"} isTextArea/>
                <Button type={"submit"}>Submit</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  min-height: 50vh;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
`