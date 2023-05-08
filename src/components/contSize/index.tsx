import * as C from './style'
import Patient from '@/icons/paciente.svg'
import Nascimento from '@/icons/nascimento.svg'
import Profission from '@/icons/profissao.svg'
import Schooll from '@/icons/escolaridade.svg'
import LapisD from '@/icons/lapisD.svg'
import { CardsRight } from '../CardsRight/cardsRight'
import { useEffect, useState } from 'react'
import Modal from "@mui/material/Modal/Modal"
import Close from '@/icons/close-modal.svg'
import TextEditorModal from '../modal-text-editor'
import { ButtonsCancelAnCreate } from '../buttons-cancel-create'
import { PacientService } from '@/services/Pacient/pacient'

export const ContSize = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [pacient, setPacient] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [profession, setProfession] = useState<string>('')
    const [school, setSchool] = useState<string>('')

    useEffect(() => {
      PacientService().then((response: any) => {
        setPacient(response.name)
        setDate(response.birthdate)
        setProfession(response.profession)
        setSchool(response.schooling)
      })
  },[])

  const dateFormat = date.substring(0, 10)

  return (
    <C.ContSize >
      <C.BoxSizeOne>
        <C.CardContOne>
          <C.TextDetails style={{ color: 'black' }}>
            <b>Identificação do paciente</b>
          </C.TextDetails>
          <C.TextDetails>
            <img style={{ marginRight: '10px' }} src={Patient}></img>Paciente
          </C.TextDetails>
          <C.TextDetailsInfo>{pacient}</C.TextDetailsInfo>
          <C.TextDetails>
            <img style={{ marginRight: '10px' }} src={Nascimento}></img>Nascimento
          </C.TextDetails>
          <C.TextDetailsInfo>{dateFormat}</C.TextDetailsInfo>
          <C.TextDetails>
            <img style={{ marginRight: '10px' }} src={Profission}></img>Profissão
          </C.TextDetails>
          <C.TextDetailsInfo>{profession}</C.TextDetailsInfo>
          <C.TextDetails>
            <img style={{ marginRight: '10px' }} src={Schooll}></img>Escolaridade
          </C.TextDetails>
          <C.TextDetailsInfo>{school}</C.TextDetailsInfo>
        </C.CardContOne>
        <C.CardsContTwo>
          <C.DemandObject>
            <C.TextDualTitles>
              <b>Demandas e objetivos</b>
            </C.TextDualTitles>
            <C.ImgLapis width="20px" height="20px" src={LapisD}></C.ImgLapis>
          </C.DemandObject>
          <C.boxDetails>
            No dia 12 de fevereiro de 2015, a paciente Ana, 22 anos, solteira e residente na cidade de Manaus, procurou
            atendimento psicológico em virtude de estar apresentando...
          </C.boxDetails>
        </C.CardsContTwo>
        <C.CardsContTwo>
          <C.DemandObject>
            <C.TextDualTitles>
              <b>Anotações pessoais</b>
            </C.TextDualTitles>
            <C.ImgLapis onClick={handleOpen} width="20px" height="20px" src={LapisD}></C.ImgLapis>
          </C.DemandObject>
          <C.boxDetails>
            Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da
            paciente. Tal como: inquietação e medos.
          </C.boxDetails>
        </C.CardsContTwo>
      </C.BoxSizeOne>
      <CardsRight />
      <Modal open={open} onClose={handleClose}>
        <C.modal>
          <C.titleModal>
        <C.titleFormat>Anotações Pessoais</C.titleFormat>
        <C.CloseButton onClick={handleClose} src={Close} width='20px'height='20px' alt="close" />
        </C.titleModal>
        <TextEditorModal/>
        <C.DivButtonsBorder>
        <ButtonsCancelAnCreate/>
        </C.DivButtonsBorder>
        </C.modal>
      </Modal>
    </C.ContSize>
  )
}
