import { createContext } from 'react'

export const AppContext = createContext({
    openModalLogin: false,
    toggleOpenModalLogin: () => {}
})