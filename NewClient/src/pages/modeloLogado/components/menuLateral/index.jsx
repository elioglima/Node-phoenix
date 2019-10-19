import React, { useState, useEffect } from 'react'
import { StBase } from './css'
import MenuItem from './components/menuItem' 
import MeuPerfil from './components/meuPerfil' 

const Objeto = (props) => {
    const [lines, setLines] = useState(props.lines || [])
    useEffect(() => {        
        setLines(props.lines)
    }, [props.lines])
    return (
        <StBase>
            <MeuPerfil  />

        { lines.map((menu, key) => {
            return (
               <div key={'menu'+key}>
                    <MenuItem {...menu}   />
               </div>
            )
        })
        }
        </StBase>
    )
}

export default Objeto