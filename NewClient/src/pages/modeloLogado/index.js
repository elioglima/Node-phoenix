import React from 'react'

import TextField from '../../components/html/TextField'
import ImageField from '../../components/html/ImageField'

import {
    StPage,
    StContainer,
    StHeader,
    StFooter,
    StBase,
    StNav,
    StSelection,
    StBody,
    StBodyScrool,

    StHeaderBase,

} from './css/styles'


const CpHeader = () => {
    return (
        <StHeaderBase>
            <img src={require('../../assets/images/icoPesquisa.svg')} />
            <TextField noBorder={true} />
        </StHeaderBase>
    )
}

export default props => {

    return (
        <StPage>
            <StContainer>
                <StBase>
                    { props.nav && <StNav>{props.nav}</StNav>}
                    <StSelection>
                        { props.header && <StHeader><CpHeader/></StHeader>}
                        <StBody>
                            <StBodyScrool>{props.body}</StBodyScrool>
                        </StBody>
                        { props.footer && <StFooter>{props.footer}</StFooter>}
                    </StSelection>
                </StBase>
            </StContainer>
        </StPage>
    )
}