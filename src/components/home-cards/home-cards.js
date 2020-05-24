import React from 'react'
import { Card } from '../../assets/theme/cards/card';
import { H2 } from '../../assets/theme/full/typography';
import { connect } from 'react-redux'
import * as actions from './home-cards.jsx'
function HomeCards({ buys }) {
    console.log(buys)
    return (
        <div>
            {buys.res?.length > 0 ? null : <H2 className="select-text">Selecione o Mês</H2> }
            {/* {buys.res?.length === null ? <H2 className="select-text">Nenhuma compra para este Mês</H2> : null } */}
            <div className="grid-cards">
                {/* {buys.res?.length > 0 ? 'Your table code' : 'Data is not available'} */}
                {buys.res?.map((buy, i) => (
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
        </div>
    )
}
export default connect(actions.mapStateToProps)(HomeCards)
