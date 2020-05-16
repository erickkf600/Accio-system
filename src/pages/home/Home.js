import React from 'react'
import * as actions from './home.action.jsx'
import { connect } from 'react-redux'
import { Card } from '../../assets/theme/cards/card.js';
import HomeCards from '../../components/home-cards/home-cards.js';
function Home({theme}) {
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
                <HomeCards />
            </div>
    )
}

export default connect(actions.mapStateToProps)(Home)

