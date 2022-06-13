import styled from "styled-components";

export const Hero = styled.div`
  background-image: url(cafe.jpg);
  background-position: center;
  background-size: cover;
  border-color: ${(props) => props.theme.palette.darkgray};
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* ::after {
    content: url(/arrow.svg);
    display: block;
    width: 0.16rem;
    padding: 0.18rem 0.15rem 0.1rem;
    border-radius: 50% 50% 0 0;
    background-color: ${(props) => props.theme.palette.white};
    line-height: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  } */

  height: 100svh;
  @media (min-width: 900px) {
    height: 100vh;
    justify-content: flex-end;
    ::after {
      width: 0.31rem;
      padding: 0.35rem 0.31rem 0.16rem;
    }
  }
`;

export const Title = styled.h1`
  @media (min-width: 900px) {
    width: 50%;
    text-align: center;
  }
`;

// // css ネストパターン

// export const Items = styled.ul`
//   display: flex;
// `;
// export const Item = styled.li`
//   list-style: none;
// `;

// export const Items2 = styled.ul`
//   display: flex;
//   > li {
//     list-style: none;
//   }
// `;
