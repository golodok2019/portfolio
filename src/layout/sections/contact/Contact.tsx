import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Field} from "./field/Field";
import {MainContainer} from '../../../styles/MainContainer';
import {LinkStyledLikeButton} from '../../../components/LinkStyledLikeButton';
import styled from "styled-components";

export const Contact: React.FC = () => {
    return (
        <section>
            <MainContainer>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"your name"} fieldLabel={"Name"} inputIdAndName={"name"}/>
                    <Field placeholder={"your email"} fieldLabel={"Email"} inputIdAndName={"email"}
                           inputType={"email"}/>
                    <Field placeholder={"message for me"} fieldLabel={"Message"} inputIdAndName={"message"} isTextArea/>
                    <LinkStyledLikeButton as={"button"} type={"submit"}>Submit</LinkStyledLikeButton>
                </StyledForm>
            </MainContainer>
        </section>
    );
};

export const StyledForm = styled.form`
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 25px;
`