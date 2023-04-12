import * as C from './style'
import Lixeira from '../../icons/lixeira.svg'
import Caneta from '../../icons/caneta.svg'
import Sessao from '../../icons/sessao.svg'
import Fato from '../../icons/fato.svg'
import Anexo from '../../icons/anexo.svg'
import Avaliacao from '../../icons/avaliacao.png'
import { Sessions } from '../session'
import { Fate } from '../Fate'
import { ItemThree } from '../anexo'
import { Relevant } from '../fateRelevant'
import ModalOne from '../allModals/modalOne'
import ModalTwo from '../allModals/modalTwo'
import ModalThree from '../allModals/modalThree'
import ModalFour from '../allModals/modalFour'


export const CardsRight = () => {
    return(
        <C.BoxSizeTwo>
                <C.CardsRight>
                    <C.CardsRightOne>
                        <b>Serviço:</b> 
                        <C.Service>
                            <C.Option>Novo Acompanhamento</C.Option>
                        </C.Service>
                        <b>Data Inicial:</b> 19/10/2022
                        <C.iconsEnd>
                            <img width='25px' src={Caneta}></img>
                            <img width='25px' src={Lixeira}></img></C.iconsEnd>
                        </C.CardsRightOne>
                    <C.CardsRightTwo>
                        <C.IconsSum><img src={Sessao}></img><ModalOne/></C.IconsSum>
                        <C.IconsSum><img src={Fato}></img><ModalTwo/></C.IconsSum>
                        <C.IconsSum><img src={Anexo}></img><ModalThree/></C.IconsSum>
                        <C.IconsSum><img src={Avaliacao}></img><ModalFour/></C.IconsSum>
                   </C.CardsRightTwo>
                </C.CardsRight>
                    <Sessions/><Fate/><ItemThree/><Relevant/><Sessions/>
                </C.BoxSizeTwo>
    )
}