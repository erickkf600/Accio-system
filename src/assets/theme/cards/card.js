import styled from 'styled-components';
import theme from "styled-theming";

const backgroundColor = theme("theme", {
    light: "#FFFFFF",
    dark: "#27293D",
    blue: "#AFAFAF",
    gray: "#FFFFFF",
});

const textColor = theme("theme", {
    light: "#673AB7",
    dark: "#FFFFFF",
    blue: "#FFFFFF",
    gray: "#27293D"
});

export const Card = styled.div`
    background: ${backgroundColor};
    color: ${textColor};
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.13);
    border-radius: 5px;
    border-color: ${textColor};
    
`;