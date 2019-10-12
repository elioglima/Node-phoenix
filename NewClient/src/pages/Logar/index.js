import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

    const { Registro, KeyClient } = useSelector(state => state.consultaDocumento)
    // const dispatch = useDispatch()
    
    useEffect(() => {
        console.log(KeyClient,Registro)
    }, [])
    
    return (
        <>
        tese
            {/* <Carousel />
            <Vantagens />
            <Facilidades />
            <TypingBanner />
            <Comments /> */}
        </>
    )
}

export default Home