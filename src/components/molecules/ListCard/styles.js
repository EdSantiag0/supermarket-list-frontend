import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 732px;
  height: 58px;
  min-height: 58px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 0 12px;

  @media (max-width: 830px) {
    max-width: 420px;
  }

  @media (max-width: 420px) {
    max-width: 220px;
  }
`
export const CheckImage = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  position: relative;
  object-fit: contain;
  cursor: pointer;
  margin-right: 12px;
`
export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`
export const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 10%;
  cursor: pointer;
`
export const ArrowIcon = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: 'arrow-icon'
})`
  width: 6px;
  height: 12px;
  object-fit: contain;
`
