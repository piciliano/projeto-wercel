import { useState } from 'react'
import * as C from './style'
import Prancheta from '../../icons/Prancheta.svg'
import Social from '../../icons/Social.svg'
import Vector from '../../icons/Vector.png'
import Eng from '../../icons/Engrenagem.svg'
import { Header } from '../header'



export const BarraF = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const changeBar = () => {
        setIsExpanded(!isExpanded)
    }
    const Bar = 
    isExpanded ? 'expanded' : '';

    return(
        <C.divGlobal className='testingg'>
            <Header changeBar={changeBar} />
        <C.BarOne >
        
            <C.BarUtils onClick={changeBar}>
                <C.M><img src={Social} width='20' height='20px'></img></C.M>
                <C.M><img src={Prancheta} width='20' height='20px'></img></C.M>
                <C.M><img src={Vector} width='20' height='20px'></img></C.M>
                <C.M><img src={Eng} width='20' height='20px'></img></C.M>
            </C.BarUtils>
        </C.BarOne>
        
            <C.BarTwo onClick={changeBar} 
                className={Bar}>
                    <C.MbarContainerTwo>
                    <C.MbarTwo>
                        <img src={Social} width='20' height='20px'></img>
                        {isExpanded && <C.Paragraph>Meus pacientes</C.Paragraph>}
                    </C.MbarTwo>
                    <C.MbarTwo>
                        <img src={Prancheta} width='20' height='20px'></img>
                        {isExpanded && <C.Paragraph>Modelos</C.Paragraph>}
                    </C.MbarTwo>   
                    <C.MbarTwo>
                        <img src={Vector} width='20' height='20px'></img>
                        {isExpanded && <C.Paragraph>Cadastros</C.Paragraph>}
                    </C.MbarTwo>
                    <C.MbarTwo>
                        <img src={Eng} width='20' height='20px'></img>
                        {isExpanded && <C.Paragraph>Preferencias</C.Paragraph>}
                    </C.MbarTwo>
                    </C.MbarContainerTwo>
                    
            </C.BarTwo>
            
        </C.divGlobal>
        
    )
}