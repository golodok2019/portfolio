import React from 'react';
import styled from "styled-components";
import {FlexContainer} from '../../../components/FlexContainer';
import {SectionTitle} from "../../../components/SectionTitle";
import {MainContainer} from "../../../styles/MainContainer";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <MainContainer>
                <SectionTitle>About me</SectionTitle>
                <FlexContainer>
                    <Line/>
                    <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted
                        of a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber
                        built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were
                        placed
                        within this chamber during the Neolithic period, representing at least nine or ten
                        individuals.</Text>
                </FlexContainer>
            </MainContainer>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  ${SectionTitle} {
    margin-left: 1.5rem;
  }
`

const Text = styled.p`

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
  padding-left: 1.5rem;
  letter-spacing: 0.04em;
  position: relative;
  
  &::before {
    left: 0;
    content: "";
    position: absolute;
    background-image: linear-gradient(0deg, #00F5A0 0%, #00D9F5 100%);
    width: 0.5rem;
    height: 100%;
    border-radius: 2px;
  }
`

const Line = styled.div`
  
`