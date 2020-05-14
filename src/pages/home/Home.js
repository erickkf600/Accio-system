import React from 'react'
import * as actions from './home.action.jsx'
import { connect } from 'react-redux'
function Home({theme}) {
    let savedTheme = localStorage.getItem("theme"); 
    let actualTheme;
    if (!savedTheme){
        actualTheme = theme.theme
    }else{
        actualTheme = savedTheme
    }
    console.log(actualTheme)
    return (
            <div className="content container">
                    <div className={`card ${actualTheme}`}>
                    <div className="select-date">
                        <select name="select-mes">
                            <option value="">Mês</option>
                        </select>
                        <div className="ano">
                            <p>{(new Date().getFullYear())}</p>
                        </div>
                    </div>

                    </div>
            </div>
    )
}

export default connect(actions.mapStateToProps)(Home)

