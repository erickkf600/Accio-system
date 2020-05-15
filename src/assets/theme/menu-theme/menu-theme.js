import styled from 'styled-components';
import theme from "styled-theming";

const backgroundColor = theme("theme", {
    light: "#673AB7",
    dark: "#27293D",
    blue: "linear-gradient(#1953b0, #0b2f6b)",
    gray: "#23C1CC",
});

const textColor = theme("theme", {
    light: "#FFFFFF",
    dark: "#fff",
    blue: "#fff",
    gray: "#fff"
});

const selected = theme("theme", {
    light: "#000",
    dark: "#20212F",
    blue: "#AFAFAF",
    gray: "#18A0A9"
});

export const Dropdown = styled.div`
    background: ${backgroundColor};
    color: ${textColor};
    border-radius: 0 0 8px 8px;
    height: 134px;
    padding: 14px;
    i{
        color: ${backgroundColor} !important;
    }
`;
