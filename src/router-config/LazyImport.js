import React, { Suspense, lazy } from 'react'

function LazyImport(Component) {
    const ComponentLoadable = lazy(Component)
    return props => (
        <Suspense fallback={<div>Loading...</div>}>
            <ComponentLoadable {...props} />
        </Suspense>
    );
}

export default LazyImport
//LAZY LOAD MODULES
export const Home = LazyImport(() => import('../pages/home/Home'/* webpackChunkName: 'home' */))
export const AddCompra = LazyImport(() => import('../pages/adicionar-compra/AddCompra'/* webpackChunkName: 'add-compra' */))
export const Usuarios = LazyImport(() => import('../pages/usuarios/Usuarios'/* webpackChunkName: 'usuarios' */))
export const AddUsuarios = LazyImport(() => import('../pages/adicionar-usuario/AddUsuario'/* webpackChunkName: 'add-usuario' */))