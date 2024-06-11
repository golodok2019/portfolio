import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {LinkStyledLikeButton} from "../../../../components/LinkStyledLikeButton";

const StyledWork = styled.div`
  background-color: ${theme.darkTheme.colors.workBg};
  border-radius: 6px;
  width: 362px;
  flex-grow: 1;

  @media ${theme.media.desktop} {
    max-width: 522px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
  border-radius: 6px 6px 0;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`

const Text = styled.p`
  letter-spacing: 0.04em;
  margin-bottom: 31px;
`

const InformationContainer = styled.div`
  margin-top: 29px;
  padding: 0 26px;
`

const ImageContainer = styled.div`
  position: relative;

  ${LinkStyledLikeButton} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.darkTheme.colors.lineWorkColor};
    height: 1px;
    width: 100%;
    opacity: 0.6;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${LinkStyledLikeButton} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${LinkStyledLikeButton} {
      opacity: 1;
    }
  }
`

export const S = {
    StyledWork,
    Image,
    ImageContainer,
    Title,
    Text,
    InformationContainer
}