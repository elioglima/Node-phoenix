import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { StBase } from './css'
import MenuItem from './components/menuItem'
import MeuPerfil from './components/meuPerfil'
import { history } from '../../../../redux'

const Objeto = (props) => {

    const dispatch = useDispatch()
    const stateDataChange = useSelector(state => state.dataChange);
    const [lines, setLines] = useState(props.lines || [])

    useEffect(() => {
        setLines(props.lines)
    }, [props.lines])


    const onClick = f => {
        if (!f) return
        dispatch(f)
    }

    const showSelected = (id) => {
        let selected_route = history.location.pathname
        selected_route = selected_route.replace('/', '')
        return selected_route == id
    }

    return (
        <StBase>
            <MeuPerfil />
            {
                lines.map((menu, key) => {
                    return (
                        <div key={'menu' + key}>
                            <MenuItem {...menu} actived={showSelected(menu.id)} onClick={e => onClick(menu.onClick)} />
                        </div>
                    )
                })
            }
        </StBase>
    )
}

export default Objeto