import { bindActionCreators } from "redux"
import * as RouterActions from './../../store/actions/RouterActions/getActiveRoute'

export const mapStateToProps = state => ({
    theme: state.themeReducer.theme,
    links: state.setRoutes,
    routeActive: state.activeRoute
})

export const setActiveRoute = (link) => {
    let selectedItem
    let path = window.location.pathname
    switch (path) {
        case "/":
            selectedItem = '/home'
            break;
        case "/home":
            selectedItem = '/home'
            break;
        case "/add-compra":
            selectedItem = '/add-compra'
            break;
        case "/usuarios":
            selectedItem = '/usuarios'
            break;
        case "/add-usuario":
            selectedItem = '/add-usuario'
            break;
    
        default:
            break;
    }
    return selectedItem.indexOf(link) !== -1 ? "active" : "";
}
//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(RouterActions, dispatch)