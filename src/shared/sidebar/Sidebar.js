import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from "styled-components"
import { Aside } from "./../../assets/theme/sidebar/sidebar"
import { Link } from "react-router-dom"
import * as actions from './sidebar.action.jsx'

function Sidebar({ theme, links, activeRoute}) {
    let savedTheme = localStorage.getItem("theme"); 
    return (
        <ThemeProvider theme={{ theme: savedTheme ? savedTheme : theme  }}>
            <Aside>
                <ul className="sideMenu">
                    {links.map((link, i) => (
                        <li key={i} className={`link ${actions.setActiveRoute(link.path)}`} onClick={() => activeRoute(link.name)}>
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
