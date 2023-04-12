import * as React from 'react';
import * as C from './style'
import Modal from '@mui/material/Modal';

export default function ModalSave() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button className='btn' onClick={handleOpen}>Salvar</button>
      <Modal open={open} onClose={handleClose}>
        <C.Container>
            <C.EspecificationOne>Avaliação Psicológica salva com sucesso!</C.EspecificationOne>
            <C.EspecificationTwo>Você irá visualizar esta avaliação no prontuário do paciente</C.EspecificationTwo>
            <C.ButtonOk onClick={handleClose}>ok</C.ButtonOk>
        </C.Container>
          </Modal>
    </div>
  )
}
