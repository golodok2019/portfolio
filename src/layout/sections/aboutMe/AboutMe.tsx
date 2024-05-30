import React from 'react';
import styled from "styled-components";
import { FlexContainer } from '../../../components/FlexContainer';
import {SectionTitle} from "../../../components/SectionTitle";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <FlexContainer justifyContent={"center"}>
                <Line>
                    <Text>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber
                        built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                        within this chamber during the Neolithic period, representing at least nine or ten individuals.</Text>
                </Line>
            </FlexContainer>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  min-height: 30vh;
`

const Text = styled.p`
  margin-left: 10px;
`

const Line = styled.div`
 border-left: 5px solid gold;
  max-width: 70%;
`