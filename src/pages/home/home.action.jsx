import { bindActionCreators } from "redux"
import * as FethApi from './../../store/actions/API-Actions/api-actions'

export const ano = (new Date().getFullYear())


export const mapDispatchToProps = dispatch => ({
    selectMounth: (e) => dispatch(FethApi.getParams(e.target.value, (new Date().getFullYear())))
});
