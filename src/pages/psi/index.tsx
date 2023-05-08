import * as C from './style'
import Save from '../../icons/save.svg'
import './index.css'
import Interrogacao from '../../icons/interrogacao.svg'

import { GeneralInputs } from '@/components/generalRadius/generalRadius01'
import { GeneralInputsTwo } from '@/components/generalRadius/generalRadius02'
import { GeneralInputsThree } from '@/components/generalRadius/generalRadius03'
import { GeneralInputsFour } from '@/components/generalRadius/generalRadius04'
import { GeneralInputsFive } from '@/components/generalRadius/generalRadius05'
import { GeneralInputsSix } from '@/components/generalRadius/generalRadius06'
import { GeneralInputsSeven } from '@/components/generalRadius/generalRadius07'
import { ButtonsDouble } from '@/components/next-save'

export const AvaliationPsi = () => {
    return(
        <>
        <C.Container> 
            <C.ContPsi >
            <C.PageTitle>
                <C.Entrevista>Entrevista Psicológica</C.Entrevista>
                <C.DivButtons>
                   <ButtonsDouble/>
                </C.DivButtons>
            </C.PageTitle>
            <C.DivButtonsTwo>
                <p>Sintese da entrevista</p>
                <img  width='20px' height='16px' src={Interrogacao}></img>
            </C.DivButtonsTwo>
            <C.InputText defaultValue="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."/>
                <p className='avaliate'>Condições para realização da avaliação</p>
                <GeneralInputs></GeneralInputs>
                <p className='avaliate'>Histórico familiar</p>
                <GeneralInputsTwo></GeneralInputsTwo>
                <p className='avaliate'>Vida profissional</p>
                <GeneralInputsThree></GeneralInputsThree>
                <p className='avaliate'>Vida escolar</p>
                <GeneralInputsFour></GeneralInputsFour>
                <p className='avaliate'>Saúde</p>
                <GeneralInputsFive></GeneralInputsFive>
                <p className='avaliate'>Hábitos e conduta social</p>
                <GeneralInputsSix></GeneralInputsSix>
                <p className='avaliate'>Complementos para atividade remunerada como condutor</p>
                <GeneralInputsSeven></GeneralInputsSeven>
                <C.DivButton>
                    <ButtonsDouble/>
                </C.DivButton>
            </C.ContPsi>
        </C.Container>
        </>
    )
}