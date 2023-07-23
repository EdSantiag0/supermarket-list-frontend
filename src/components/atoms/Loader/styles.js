import styled from 'styled-components'

export const Loader = styled.span`
  width: 240px;
  height: 20px;
  transform: skewX(-45deg);
  background: linear-gradient(#766df4 0 0) left -60px top 0/60px 40px no-repeat #e4e4ed;
  animation: ct3 1s infinite linear;

  @keyframes ct3 {
    100% {
      background-position: right -60px top 0;
    }
  }
`
