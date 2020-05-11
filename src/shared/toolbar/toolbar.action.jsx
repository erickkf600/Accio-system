import { bindActionCreators } from "redux"
import * as themeActions from './../../store/actions/ThemeActions/theme'


export const setActiveRoute = (links, activeRoute) => {
    for (let i = 0; i < links.length; i++) {
        if (window.location.pathname.indexOf(links[i].path) !== -1){
            return links[i].name
        }  
    }
    return activeRoute
}

//RETORNA OS DADOS DO REDUCE 
export const mapStateToProps = state => ({
    activeRoute: state.activeRoute.routeActive,
    colors: state.colors,
    toggle: state.toggleMenuTheme,
    links: state.setRoutes
})
//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(themeActions, dispatch)


