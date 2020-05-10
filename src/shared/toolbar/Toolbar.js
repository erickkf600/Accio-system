import React from 'react'
import { connect } from 'react-redux'
import * as actions from './toolbar.action.jsx'

function Toolbar({ activeRoute, colors, changeTheme, toggle, toggleMenu, links }) {
    return (
        <header>
            <p>{actions.setActiveRoute(links, activeRoute)}</p>
            <div className="right">
                <button onClick={() => toggleMenu()}><i className="fas fa-fill-drip" /></button>
                <div className={`chooseTheme ${toggle.open ? 'show' : ''}`}>
                    <p>Temas</p>
                    <ul>
                        {colors.map(color => (
                            <li
                                key={color.theme}
                                className={color.theme}
                                onClick={() => changeTheme(color)}></li>
                        ))}
                    </ul>
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
