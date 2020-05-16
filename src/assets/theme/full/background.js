import styled from 'styled-components';
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
    light: "#E6E6E6",
    dark: "linear-gradient(#1e1e2f, #1e1e24)",
    blue: "#fff",
    gray: "#E6E6E6",
});

export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
    blue: "#AFAFAF",
    gray: "#212529"
});

export const Container = styled.div`
  background:  ${backgroundColor};
  position: relative;
  min-height: 100vh;
  header{
    i, p, b{
      color: ${textColor};
    }
  }
`;
