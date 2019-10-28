import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { onShow } from '../../redux/Actions/show'
import NotFoundOff from '../../components/generics/NotFoundOff'

const Objeto = (props) => {
    const dispatch = useDispatch()
    const onClickPainel = () => {
        console.log('ok')
        dispatch(onShow(''))
    }
    return <NotFoundOff onClick={onClickPainel} />
}

export default Objeto