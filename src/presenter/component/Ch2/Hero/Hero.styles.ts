import styled from "styled-components";

export const Hero = styled.div`
  background-image: url(/cafe.jpg);
  background-position: center center;
  background-size: cover;

  border-color: ${(props) => props.theme.palette.darkgray};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: calc(var(--vh, 1vh) * 100);
  @media (min-width: 900px) {
    height: 100vh;
    justify-content: flex-end;
    ::after {
      width: 0.31rem;
      padding: 0.35rem 0.31rem 0.16rem;
    }
  }
`;

export const ArrowImg = styled.img`
  /* width: 32px; */
  height: 28px;
  padding: 10px;
  border-radius: 50% 50% 0 0;
  background-color: ${(props) => props.theme.palette.white};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const Title = styled.h1`
  @media (min-width: 900px) {
    width: 50%;
    text-align: center;
  }
`;
