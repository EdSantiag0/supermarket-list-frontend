import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-align: ${({ aling }) => aling || 'center'};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: black;
  margin-left: ${({ ml }) => ml || 0}px;

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`
export const Subtitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ aling }) => aling || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 420px) {
    max-width: 3000px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
export const SmallText = styled.span`
  text-align: ${({ aling }) => aling || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`
