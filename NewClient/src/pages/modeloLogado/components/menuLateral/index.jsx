import React, { useState, useEffect } from 'react'
import { StNav } from './css'

const Objeto = (props) => {
    const [lines, setLines] = useState(props.lines || [])
    useEffect(() => {        
        setLines(props.lines)
    }, [props.lines])
    return (
        <StNav>
        { lines.map(menu => {
            return (
               <div>
                {menu.text}
               </div>
            )
        })
        }
        </StNav>
    )
}

export default Objeto