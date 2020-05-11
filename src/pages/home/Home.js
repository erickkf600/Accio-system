import React from 'react'

function Home() {
    return (
        <div className="content container">
            <div className="card select-date">
                <select name="select-mes">
                    <option value="">Mês</option>
                </select>
                <div className="ano">
                    <p>{(new Date().getFullYear())}</p>
                </div>
            </div>
        </div>
    )
}

export default Home

