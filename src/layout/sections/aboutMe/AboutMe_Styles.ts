import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

const StyledAboutMe = styled.section`
  ${SectionTitle} {
    margin-left: 20px;
  }
`

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5em;
  padding-left: 20px;
  letter-spacing: 0.04em;
  position: relative;

  &::before {
    left: 0;
    content: "";
    position: absolute;
    background-image: linear-gradient(0deg, #00F5A0 0%, #00D9F5 100%);
    width: 6px;
    height: 100%;
    border-radius: 2px;
    max-height: 120px;
  }
`

export const S = {
    StyledAboutMe,
    Text
}