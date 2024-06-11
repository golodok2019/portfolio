import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {LinkStyledLikeButton} from "../../../components/LinkStyledLikeButton";

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;

  @media ${theme.media.mainContainerWrap} {
    svg {
      margin-top: 30px;
    }
  }
`

const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 340px;
    height: 340px;
  }
`

const StyledName = styled.h2`
  ${font({weight: 600, FMax: 72, FMin: 40, color: "transparent"})};
`

const StyledTitle = styled.h1`
  ${font({weight: 400, FMax: 20, FMin: 16, color: theme.darkTheme.colors.developmentPostFont, family: "Tinos, serif"})};
  text-transform: uppercase;
`

const StyledGradientContainer = styled.div`
  background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  color: transparent;
  -webkit-background-clip: text;
`

const StyledText = styled.p`
  letter-spacing: 0.04em;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  text-align: left;

  ${StyledName} {
    margin: 11px;
  }

  ${LinkStyledLikeButton} {
    width: 140px;
    margin: 30px 0 0;
  }

  @media ${theme.media.mainContainerWrap} {
    ${StyledName} {
      margin: 12px 0 16px;
    }

    ${LinkStyledLikeButton} {
      margin: 16px auto 0;
    }

    text-align: center;
  }
`

export const S = {
    StyledMain,
    Photo,
    StyledName,
    StyledTitle,
    StyledGradientContainer,
    StyledText,
    TextContainer
}