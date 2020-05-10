const DEFAULT = {
    open: false,
}

export default function toggleMenuTheme(state = DEFAULT, action) {
    if (action.type === "TOGGLE_MENU_THEME") {
        return {
            ...state,
            open: !state.open
        }
    }
    return state
}