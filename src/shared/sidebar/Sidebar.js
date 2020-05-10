import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from "styled-components"
import { Aside } from "./../../assets/theme/sidebar/sidebar"
import { Link } from "react-router-dom"
import * as actions from './sidebar.action.jsx'

function Sidebar({ theme, links, activeRoute}) {
    let savedTheme = localStorage.getItem("theme"); 
    let actualTheme;
    if (!savedTheme){
        actualTheme = theme.theme
    }else{
        actualTheme = savedTheme
    }
    return (
        <ThemeProvider theme={{ theme: actualTheme }}>
            <Aside>
                <ul className="sideMenu">
                    {links.map((link, i) => (
                        <li key={i} className="link" onClick={() => activeRoute(link.name)}>
                            <Link to={link.path}><i className={link.icon}></i>{link.name}</Link>
                        </li>
                    ))}
                    <li className="link"><i className="fa fa-sign-out-alt"></i>Sair</li>
                </ul>
            </Aside>
        </ThemeProvider>
    )
}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(Sidebar)
