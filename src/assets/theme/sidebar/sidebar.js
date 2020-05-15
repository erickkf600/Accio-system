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

const linkBackground = theme("theme", {
    light: "#000",
    dark: "#20212F",
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
