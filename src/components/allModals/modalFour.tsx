import * as React from 'react';
import * as C from './style'
import Modal from '@mui/material/Modal';
import '../allModals/index.css'
import Close from '../../icons/close-modal.svg'
import { Link } from 'react-router-dom';

export default function ModalFour() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button className='btn' onClick={handleOpen}>Avaliação psicológica</button>
      <Modal open={open} onClose={handleClose}>
        <C.modalTwo>
          <C.sizeContainer>
            <C.Title>Nova Avaliação Psicológica</C.Title>
            <img width='20px' height='20px' onClick={handleClose} src={Close}></img>
          </C.sizeContainer>
          <C.sizeContainer>
                  <C.inputData type='date'/>
          </C.sizeContainer>
          <C.AlertGreen>
            <C.AlertDescription>Atenção!</C.AlertDescription>
            <C.AlertDescriptionTwo>Você será redirecionado para uma nova página onde irá preencher os dados da avaliação psicológica.</C.AlertDescriptionTwo>
          </C.AlertGreen>
          <C.sizeContainer>
                  <C.description>*Campos obrigatórios</C.description>
                  <C.dualItems> 
                    Cancelar
                    <Link to="/psi"> Prosseguir</Link>
                  </C.dualItems>
          </C.sizeContainer>
        </C.modalTwo>
          </Modal>
    </div>
  )
}
