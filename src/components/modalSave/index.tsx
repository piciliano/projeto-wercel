import * as React from 'react'
import * as C from './style'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import IconSave from '../../icons/butsave.svg'

export default function ModalSave() {
  const Navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    Navigate('/app')
  }

  return (
    <div>
      <div style={{display:'flex', alignItems:'center'}} className="btn" onClick={handleOpen}>
        <img src={IconSave}  alt="save" />
        Salvar
      </div>
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
