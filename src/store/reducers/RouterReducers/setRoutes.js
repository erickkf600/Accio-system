import { Home, AddCompra, Usuarios, AddUsuarios } from '../../../router-config/LazyImport'
const ROUTES = [
    {
        path: "/home",
        name: "Home",
        icon: "fas fa-home",
        component: Home
    },
    {
        path: "/add-compra",
        name: "Adicionar Compra",
        icon: "far fa-credit-card",
        component: AddCompra
    },

    {
        path: "/usuarios",
        name: "Usuários",
        icon: "fa fa-users",
        component: Usuarios
    },
    {
        path: "/add-usuario",
        name: "Adicionar Usuario",
        icon: "fa fa-user",
        component: AddUsuarios
    },
]
export default function setRoutes(state = ROUTES) {
    return state
}