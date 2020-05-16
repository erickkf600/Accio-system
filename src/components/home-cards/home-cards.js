import React from 'react'
import { Card } from '../../assets/theme/cards/card';
import { connect } from 'react-redux'
import * as actions from './home-cards.jsx'
function HomeCards({ buys }) {
    console.log(buys)
    return (
        <div className="grid-cards">
            {buys?.res?.map((buy, i) => (
            <Card key={i}>
                <div className="card">
                    {/* <div className="pago">
                        <button><i className="fas fa-times"></i></button>
                        <p>Pago  - 20/03/2020</p>
                    </div> */}
                    <div className="card-head">
                        <p>R$</p>
                        <p>{buy.valor}</p>
                    </div>
                    <div className="card-body">
                        <b>{buy.nome}</b>
                        <div className="buttons">
                            <button>Detalhes</button>
                            <button>Pago</button>
                        </div>
                    </div>
                </div>
            </Card> 
            ))}
        </div>
    )
}
export default connect(actions.mapStateToProps)(HomeCards)
