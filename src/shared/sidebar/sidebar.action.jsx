import { bindActionCreators } from "redux"
import * as RouterActions from './../../store/actions/RouterActions/getActiveRoute'

export const mapStateToProps = state => ({
    theme: state.themeReducer.theme,
    links: state.setRoutes
})


//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(RouterActions, dispatch)