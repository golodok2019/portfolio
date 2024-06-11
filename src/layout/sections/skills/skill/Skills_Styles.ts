import styled from "styled-components";
import {font} from "../../../../styles/Common";

const StyledSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  height: min( calc( (100vw - 360px)/(1440 - 360) * (164 - 120) + 120px ), 164px);
  width:  min( calc( (100vw - 360px)/(1440 - 360) * (120 - 88) + 88px ), 120px);
`

const SkillTitle = styled.h3`
  ${font({weight: 400, FMin: 12, FMax: 16})}
  line-height: 1.5em;
  text-transform: uppercase;
  margin-top: 0.5em;
  letter-spacing: 0.13em;
  text-align: center;
`

export const S = {
  StyledSkill,
  SkillTitle
}