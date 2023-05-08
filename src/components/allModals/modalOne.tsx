import * as React from 'react'
import * as C from './style'
import Modal from '@mui/material/Modal'
import '../allModals/index.css'
import Close from '../../icons/close-modal.svg'
import { InputsSessionOne } from '@/utils/sessions'
import { sessionPost } from '@/services/time-line/modal-session'

export default function ModalOne() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')


  return (
    <>
      <button className="btn" onClick={handleOpen}>
        Sessão
      </button>
      <Modal open={open} onClose={handleClose}>
        <C.modalOne>
          <C.sizeContainer>
            <C.Title>NovaSessão</C.Title>
            <img width="20px" height="20px" onClick={handleClose} src={Close}></img>
          </C.sizeContainer>
          <C.Sessions>
            <C.NumberDiv>1</C.NumberDiv>
            <p className="tileDados">Dados Gerais</p>
          </C.Sessions>
          <C.sizeContainer>
            {InputsSessionOne.map((item, index) => (
              <C.ContInputsCollum key={index}>
                <label htmlFor="inputSession">{item.label}</label>
                <C.inputData id="inputSession" type={item.type} placeholder={item.placeHolder} />
              </C.ContInputsCollum>
            ))}
          </C.sizeContainer>
          <C.sizeContainer>
            <div style={{ borderBottom: '1px solid #EEEEEE', width: '100%', paddingBottom: '10px' }}>
              <C.Sessions>
                <C.NumberDiv>2</C.NumberDiv>
                <p style={{ margin: '0' }} className="tileDados">
                  Sessão
                </p>
              </C.Sessions>
            </div>
          </C.sizeContainer>
          <form>
          <C.sizeContainer className="contScroll">
            <div style={{ width: '100%' }}>
              <label>Titulo*</label>
              <C.inputDescritionTitle  onChange={e => setTitle(e.target.value)}/>
            </div>
            <div style={{ width: '100%' }}>
              <label>Resumo da sessão*</label>
              <C.inputDescrition onChange={e => setContent(e.target.value)} type="text" />
            </div>
          </C.sizeContainer>
          </form>
          <C.LineContainer>
            <C.description>*Campos obrigatórios</C.description>
            <C.dualItems>
              Cancelar
              <C.Create>Criar</C.Create>
            </C.dualItems>
          </C.LineContainer>
        </C.modalOne>
      </Modal>
    </>
  )
}
