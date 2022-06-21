import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.spacing.side};
  padding-right: ${(props) => props.theme.spacing.side};

  > img {
    width: 125px;
    @media (min-width: 900px) {
      width: 226px;
    }
  }

  > .nav {
    display: none;
    @media (min-width: 900px) {
      display: block;

      > ul {
        display: flex;
        list-style: none;
        color: ${(props) => props.theme.palette.white};

        > li {
          margin-left: 16px;
        }
      }
    }
  }

  > button.menuBtn {
    @media (min-width: 900px) {
      display: none;
    }

    padding: 0;
    outline: none;
    border: none;
    background: none;

    width: 29px;
    height: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.white};

    ::before,
    ::after {
      content: "";
      display: block;
      height: 1px;
      background-color: currentColor;
      transform: translateY(10px);
      transition: 0.3s ease-in-out;
    }

    ::before {
      transform: translateY(-10px);
      box-shadow: 0 10px currentColor;
    }

    > span.srOnly {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
`;
