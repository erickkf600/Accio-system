
const ACTIVE_ROUTE = {
    routeActive: "Home",
}

export default function activeRoute(state = ACTIVE_ROUTE, action) {
    if (action.type === "SET_ACTIVE_ROUTE"){
        return{
            ...state,
            routeActive: action.route
        }
    }
    return state
}