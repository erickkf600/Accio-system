const DEFAULT = {
    theme: "light",
}
export default function themeReducer(state = DEFAULT, action) {
    if (action.type === "CHANGE_THEME"){
        localStorage.setItem("theme", action.color.theme);
        return {
            ...state,
            theme: action.color
        }
    }
    return state
}