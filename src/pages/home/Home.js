import React from 'react'
import * as actions from './home.action.jsx'
import { connect } from 'react-redux'
import { Card } from '../../assets/theme/cards/card.js';
function Home({theme}) {
    let savedTheme = localStorage.getItem("theme"); 
    let actualTheme;
    if (!savedTheme){
        actualTheme = theme.theme
    }else{
        actualTheme = savedTheme
    }
    return (
            <div className="content container">
                <Card>
                    <div className="select-date">
                        <select name="select-mes">
                            <option value="">Mês</option>
                        </select>
                        <div className="ano">
                            <p>{(new Date().getFullYear())}</p>
                        </div>
                    </div>
                </Card>
            </div>
    )
}

export default connect(actions.mapStateToProps)(Home)

