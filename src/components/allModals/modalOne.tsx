import * as React from 'react';
import * as C from './style'
import Modal from '@mui/material/Modal';
import '../allModals/index.css'
import Close from '../../icons/close-modal.svg'

export default function ModalOne() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <>
      <button className='btn' onClick={handleOpen}>Sessão</button>
      <Modal open={open} onClose={handleClose}>
        <C.modalOne> 
          <C.sizeContainer>
            <C.Title>NovaSessão</C.Title>
            <img width='20px' height='20px' onClick={handleClose} src={Close}></img>
          </C.sizeContainer>
          <C.Sessions>
             <C.NumberDiv>1</C.NumberDiv>
              <p className='tileDados'>Dados Gerais</p>
          </C.Sessions>
          <C.sizeContainer>
            <C.inputData type='date'/>
            <C.inputData type='date'/>
            <C.inputData type='date'/>
          </C.sizeContainer>
          <C.sizeContainer>
            <C.Sessions>
            <C.NumberDiv>2</C.NumberDiv>
                <p className='tileDados'>Sessão</p>
            </C.Sessions>
              </C.sizeContainer>
              <C.sizeContainer className='contScroll'>
                <C.inputDescritionTitle/>
                <C.inputDescrition type='text'/>
                </C.sizeContainer>
            <C.Sessions>
            <C.NumberDiv>3</C.NumberDiv>
              <p className='tileDados'>Pagamento</p>
            </C.Sessions>
        </C.modalOne>
          </Modal>
    </>
  )
}

