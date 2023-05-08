import * as C from './style'
import Lixeira from '@/icons/lixeira.svg'
import Caneta from '@/icons/caneta.svg'
import Sessao from '@/icons/sessao.svg'
import Fato from '@/icons/fato.svg'
import Anexo from '@/icons/anexo.svg'
import Avaliacao from '@/icons/avaliacao.png'
import { ModalSessions } from '../modal-sessions'
import ModalOne from '../allModals/modalOne'
import ModalTwo from '../allModals/modalTwo'
import ModalThree from '../allModals/modalThree'
import ModalFour from '../allModals/modalFour'
import Rectangle from '@/icons/rectangle.svg'
import { useState } from 'react'
import { TypeSession } from '../type-session'
import { TypeRelevantFact } from '../relevant-fact'
import { TypeAttachment } from '../attachment'

export const CardsRight = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <C.BoxSizeTwo>
      <C.CardsRight>
        <C.CardsRightOne>
          <b>Serviço:</b>
          <C.Service>
            <C.Option>Novo acompanhamento </C.Option>
            <C.ImgRectangle onClick={() => setIsVisible(!isVisible)} src={Rectangle} alt="rectangle" />
          </C.Service>
          <C.DivModalOptions isVisible={isVisible}>
            <C.DivRadio>
              <input type="radio" />
              <C.TitlesDuo>Porte de Arma</C.TitlesDuo>
            </C.DivRadio>
            <C.DivRadio>
              <input type="radio" />
              <C.TitlesDuo>Adicionar Novo Serviço</C.TitlesDuo>
            </C.DivRadio>
          </C.DivModalOptions>
          <b>Data Inicial:</b> 19/10/2022
          <C.iconsEnd>
            <img width="25px" src={Caneta}></img>
            <img width="25px" src={Lixeira}></img>
          </C.iconsEnd>
        </C.CardsRightOne>
        <C.CardsRightTwo>
          <C.IconsSum>
            <img src={Sessao}></img>
            <ModalOne />
          </C.IconsSum>
          <C.IconsSum>
            <img src={Fato}></img>
            <ModalTwo />
          </C.IconsSum>
          <C.IconsSum>
            <img src={Anexo}></img>
            <ModalThree />
          </C.IconsSum>
          <C.IconsSum>
            <img src={Avaliacao}></img>
            <ModalFour />
          </C.IconsSum>
        </C.CardsRightTwo>
      </C.CardsRight>
      <ModalSessions />
      {<TypeSession />}
      {<TypeRelevantFact />}
      {<TypeAttachment/>}
    </C.BoxSizeTwo>
  )
}
