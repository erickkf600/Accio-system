import React from 'react'
import { Card } from '../../assets/theme/cards/card';
function HomeCards() {
    return (
        <div className="grid-cards">
            <Card>
                <div className="card">
                    <div className="pago">
                        <button><i className="fas fa-times"></i></button>
                        <p>Pago  - 20/03/2020</p>
                    </div>
                    <div className="card-head">
                        <p>R$</p>
                        <p>110,00</p>
                    </div>
                    <div className="card-body">
                        <b>Erick</b>
                        <div className="buttons">
                            <button>Detalhes</button>
                            <button>Pago</button>
                        </div>
                    </div>
                </div>
            </Card> 
            <Card>
                <div className="card">
                    <div className="card-head">
                        <p>R$</p>
                        <p>110,00</p>
                    </div>
                    <div className="card-body">
                        <b>Erick</b>
                        <div className="buttons">
                            <button>Detalhes</button>
                            <button>Pago</button>
                        </div>
                    </div>
                </div>
            </Card> 
            <Card>
                <div className="card">
                    <div className="card-head">
                        <p>R$</p>
                        <p>110,00</p>
                    </div>
                    <div className="card-body">
                        <b>Erick</b>
                        <div className="buttons">
                            <button>Detalhes</button>
                            <button>Pago</button>
                        </div>
                    </div>
                </div>
            </Card> 
        </div>
    )
}

export default HomeCards
