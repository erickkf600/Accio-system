import { combineReducers } from "redux"

import themeReducer from './ThemeReducers/themeReducer'
import activeRoute from './RouterReducers/activeRoute'
import setRoutes from './RouterReducers/setRoutes'
import colors from './ThemeReducers/colors'
import toggleMenuTheme from "./ThemeReducers/toggle-menu-theme"


export default combineReducers({
    themeReducer,
    toggleMenuTheme,
    activeRoute,
    setRoutes,
    colors
})