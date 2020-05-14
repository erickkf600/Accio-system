import styled from 'styled-components';
import theme from "styled-theming";

const backgroundColor = theme("theme", {
    default: "#F5F6FA",
    dark: "#27293D",
    light: "#f00",
    blue: "linear-gradient(#1953b0, #0b2f6b)",
    gray: "#23C1CC",
});

const textColor = theme("theme", {
    default: "#1d253b",
    dark: "#fff",
    light: "#000",
    blue: "#fff",
    gray: "#fff"
});

const linkBackground = theme("theme", {
    default: "#1d253b",
    dark: "#20212F",
    light: "#000",
    blue: "#AFAFAF",
    gray: "#18A0A9"
});

export const Aside = styled.div`
    background: ${backgroundColor};
    color: ${textColor};
    position: fixed;
    box-shadow: 0px 20px 100px 2px rgba(0,0,0,0.6);
    height: 100vh;
    .link a, .link i{
        color: ${textColor};
    }
    .link:hover{
        background: ${linkBackground};
    }
    .active{
        background: ${linkBackground};
        
    }
`;
