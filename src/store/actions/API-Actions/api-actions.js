import axios from "axios";

export function getParams(mes, ano) {
    return(dispatch) => {
        return axios.get(`http://localhost/api-syscard/compras/resume?mes=${mes}&ano=${ano}`)
            .then((response) => {
                dispatch(setData(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export function setData(data) {
    return {
        type: "SET_DATA",
        data: data
    }
}