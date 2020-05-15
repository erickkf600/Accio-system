import styled from 'styled-components';
import theme from "styled-theming";

const backgroundColor = theme("theme", {
    light: "#673AB7",
    dark: "#27293D",
    blue: "#1953b0",
    gray: "#23C1CC",
});

const textColor = theme("theme", {
    light: "#FFFFFF",
    dark: "#fff",
    blue: "#fff",
    gray: "#fff"
});


export const Dropdown = styled.div`
    background: ${backgroundColor};
    color: ${textColor};
    border-radius: 0 0 8px 8px;
    height: 134px;
    padding: 14px;
    .arrow{
        color: ${backgroundColor};
    }
`;
