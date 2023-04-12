import * as C from './style'
import Patient from '../../icons/paciente.svg'
import Nascimento from '../../icons/nascimento.svg'
import Profission from '../../icons/profissao.svg'
import Schooll from '../../icons/escolaridade.svg'
import LapisD from '../../icons/lapisD.svg'
import { CardsRight } from '../CardsRight/cardsRight'

export const ContSize = () => {
    return(
        <C.ContSize>
            <C.BoxSizeOne>
                <C.CardContOne>
                    <C.TextDetails style={{color:'black'}}><b>Identificação do paciente</b></C.TextDetails>
                    <C.TextDetails><img style={{marginRight:'10px'}} src={Patient}></img>Paciente</C.TextDetails>
                        <C.TextDetailsInfo>Ana Ester Resende</C.TextDetailsInfo>
                    <C.TextDetails><img style={{marginRight:'10px'}} src={Nascimento}></img>Nascimento</C.TextDetails>
                        <C.TextDetailsInfo>10/09/2020</C.TextDetailsInfo>
                    <C.TextDetails><img style={{marginRight:'10px'}} src={Profission}></img>Profissão</C.TextDetails>
                            <C.TextDetailsInfo>Designer</C.TextDetailsInfo>
                    <C.TextDetails><img style={{marginRight:'10px'}} src={Schooll}></img>Escolaridade</C.TextDetails>
                        <C.TextDetailsInfo>Superior incompleto</C.TextDetailsInfo>
                </C.CardContOne>
                <C.CardsContTwo>
                    <C.DemandObject><p><b>Demandas e objetivos</b></p><img width='20px' height='20px' src={LapisD}></img></C.DemandObject>
                    <C.boxDetails>No dia 12 de fevereiro de 2015, a paciente Ana, 22 anos, solteira e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando...</C.boxDetails>
                </C.CardsContTwo>
                <C.CardsContTwo>
                <C.DemandObject>
                        <p><b>Anotações pessoais</b></p><img width='20px' height='20px' src={LapisD}></img>
                </C.DemandObject> 
                        <C.boxDetails>Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da paciente. Tal como: inquietação e medos.</C.boxDetails> 
                </C.CardsContTwo>
            </C.BoxSizeOne>
            <CardsRight/>
        </C.ContSize>
    )
}