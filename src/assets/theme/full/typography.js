import styled from 'styled-components';
import theme from "styled-theming";

//FOR TEXTS OUTSIDE OF CARDS
const textColor = theme("theme", {
    light: "#00000",
    dark: "#FFFFFF",
    blue: "#AFAFAF",
    gray: "#27293D"
});

export const H1 = styled.h1`
    color: ${textColor};
    
`;
export const H2 = styled.h2`
    color: ${textColor};
    
`;
export const H3 = styled.h3`
    color: ${textColor};
    
`;
export const H4 = styled.h4`
    color: ${textColor};
    
`;
export const H5 = styled.h5`
    color: ${textColor};
    
`;
export const H6 = styled.h6`
    color: ${textColor};
    
`;
export const P = styled.p`
    color: ${textColor};
`;