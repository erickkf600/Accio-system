import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

const SetTheme = ({ children, theme }) => {
    let SelectedTheme = localStorage.getItem("theme");
    return (
        <ThemeProvider theme={{ theme: SelectedTheme ? SelectedTheme : "default" }}>
            {children}
        </ThemeProvider>
    );
};

export default connect(state => ({
    theme: state.themeReducer.theme
}))(SetTheme);