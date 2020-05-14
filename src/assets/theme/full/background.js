import styled from 'styled-components';
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
    default: "#F5F6FA",
    dark: "linear-gradient(#1e1e2f, #1e1e24)",
    light: "#F5F6FA",
    blue: "#fff",
    gray: "#E6E6E6",
});

export const textColor = theme("theme", {
    default: "#1d253b",
    dark: "#fff",
    light: "#000",
    blue: "#AFAFAF",
    gray: "#212529"
});

export const Container = styled.div`
  background:  ${backgroundColor};
  color: ${textColor};
  position: relative;
  height: 100vh;
  header{
    i, p, b{
      color: ${textColor};
    }
  }
`;
