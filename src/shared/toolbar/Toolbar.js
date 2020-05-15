import React from 'react'
import { connect } from 'react-redux'
import * as actions from './toolbar.action.jsx'
import { Dropdown } from "./../../assets/theme/menu-theme/menu-theme"

function Toolbar({ activeRoute, colors, changeTheme, toggle, toggleMenu, links }) {
    return (
        <header>
            <div className="left">
                <button><i className="fas fa-bars"></i></button>
                <p>{actions.setActiveRoute(links, activeRoute)}</p>
            </div>
            <div className="right">
                <button onClick={() => toggleMenu()}><i className="fas fa-fill-drip" /></button>
                <div className={`chooseTheme ${toggle.open ? 'show' : ''}`}>
                    <Dropdown>
                        <i className="arrow fas fa-caret-up"></i>
                        <p>Temas</p>
                        <ul>
                            {colors.map(color => (
                                <li
                                    key={color.theme}
                                    className={`${color.theme} ${'active'}`}
                                    onClick={() => changeTheme(color)}></li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
                <button onClick={() => window.location.reload()}><i className="fas fa-sync-alt"></i></button>
                <b>Erick</b>
            </div>
        </header>
    )
}

export default connect(
    actions.mapStateToProps,
    actions.mapDispatchToProps)
(Toolbar)
