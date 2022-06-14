import { ThemeProvider, createGlobalStyle } from "styled-components";

export const theme = {
  palette: {
    primary: "#ff953a",
    darkgray: "#222222",
    midgray: "#414141",
    gray: "#888888",
    white: "#ffffff",
  },
  typography: {
    default: {
      fontSize: "16px",
      fontFamily: "sans-serif",
      lineHeight: 1.8,
      fontWight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
} as const;

const GlobalStyle = createGlobalStyle`
  html {
    color: #222222;
    /* font-size: ${theme.typography.default.fontSize}; */
    font-size: 16px;
    font-family: ${theme.typography.default.fontFamily};
    line-height: ${theme.typography.default.lineHeight};  
  } 
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
  /* img { */
    /* max-width: 100%; */
    /* height: auto; */
    /* vertical-align: bottom; */
  /* } */
`;

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProps> = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
