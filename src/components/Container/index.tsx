import * as C from './style'
import Lupa from '@/icons/Lupa.svg'
import { ContSize } from '../contSize'

export const Container = () => {
    return(
        <C.Container>
            <C.Box>
                <C.BoxLinks> 
                    <C.Box1><a>Dados cadastrais</a></C.Box1>
                    <C.Box2><a>Prontuário</a></C.Box2>
                </C.BoxLinks>
                <C.BoxInput>
                    <C.input placeholder='O que você está procurando?'/>
                    <img  src={Lupa} width='20px' height='20px'></img>
                </C.BoxInput>
            </C.Box>
            <ContSize/>
        </C.Container>
    )
}
