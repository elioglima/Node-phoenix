import React, { useState } from 'react'
import { AppContext } from '../../context'

export default props => {
    const [openModalLogin, setOpenModalLogin] = useState(false)

    function toggleOpenModalLogin() {
        setOpenModalLogin(openModalLogin => !openModalLogin)
    }

    return (
        <AppContext.Provider value={{ openModalLogin, toggleOpenModalLogin }}>
            {props.children}
        </AppContext.Provider>
    )
}