import React from 'react'
import * as actions from './home.action.jsx'
import { Card } from '../../assets/theme/cards/card.js';
import HomeCards from '../../components/home-cards/home-cards.js';
import { connect } from 'react-redux'
import { MESES } from './../../mocks/mounths.mock'
function Home({ selectMounth }) {
    return (
        <div className="content container home">
            <Card>
                <div className="select-date">
                    <select name="select-mes" onChange={selectMounth}>
                        <option value="">Mês</option>
                        {MESES.map((mes, i) => (
                            <option key={i} value={mes.value}>{mes.nome_show}</option>
                        ))}
                    </select>
                    <div className="ano">
                        <p>{actions.ano}</p>
                    </div>
                </div>
            </Card>
            <HomeCards />

            {/* <p>Loading</p> */}
        </div>
    )
}

export default connect(null, actions.mapDispatchToProps)(Home)