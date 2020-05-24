import React from 'react'
import { Card } from '../../assets/theme/cards/card.js';
import { MESES } from './../../mocks/mounths.mock'
function AddCompra() {
    return (
        <div className="content container">
            <Card className="cadCard">
                <form>
                    <div className="row">
                        <input type="text" placeholder="Nome da Compra"/>
                        <select name="select-card">
                            <option value="">Usuario</option>
                            <option value="nubank">Erick</option>
                            <option value="pag">Thaisa</option>
                            <option value="credcard">Lucas</option>
                            <option value="credcard">Wemerson</option>
                        </select>
                    </div>
                    <div className="row">
                        <select name="select-card">
                            <option value="">Cartão</option>
                            <option value="nubank">Nubank</option>
                            <option value="pag">PAG</option>
                            <option value="credcard">CredCard</option>
                            <option value="credcard">Digio</option>
                        </select>
                        <select name="select-mes">
                            <option value="">Mês</option>
                            {MESES.map((mes, i) => (
                                <option key={i} value={mes.value}>{mes.nome_show}</option>
                            ))}
                        </select>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Valor" />
                        <select name="select-card">
                            <option value="">Parcelas</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <button>Cadastrar</button>
                </form>
            </Card>
        </div>
    )
}

export default AddCompra

