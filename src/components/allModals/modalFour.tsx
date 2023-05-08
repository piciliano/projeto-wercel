import * as React from 'react'
import * as C from './style'
import Modal from '@mui/material/Modal'
import '../allModals/index.css'
import Close from '../../icons/close-modal.svg'
import { useNavigate } from 'react-router-dom'

export default function ModalFour() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const navigate = useNavigate()
  return (
    <div>
      <button className="btn" onClick={handleOpen}>
        Avaliação psicológica
      </button>
      <Modal open={open} onClose={handleClose}>
        <C.modalTwo>
          <C.divEnvolver>
          <C.sizeContainer>
            <C.Title>Nova Avaliação Psicológica</C.Title>
            <img width="20px" height="20px" onClick={handleClose} src={Close}></img>
          </C.sizeContainer>
          <C.sizeContainer>
            <C.divColumn>
            <label>Data*</label>
            <C.inputDateFour type="date" />
            </C.divColumn>
          </C.sizeContainer>
          </C.divEnvolver>
          <C.AlertGreen>
            <C.AlertDescription>Atenção!</C.AlertDescription>
            <C.AlertDescriptionTwo>
              Você será redirecionado para uma nova página onde irá preencher os dados da avaliação psicológica.
            </C.AlertDescriptionTwo>
          </C.AlertGreen>
          <C.LineContainer>
            <C.sizeContainer>
            
              <C.description>*Campos obrigatórios</C.description>
              <C.dualItems>
                Cancelar
                <C.Prox
                  onClick={() => {
                    navigate('/psi')
                  }}
                >
                  Prosseguir
                </C.Prox>
              </C.dualItems>
            </C.sizeContainer>
            
          </C.LineContainer>
        </C.modalTwo>
      </Modal>
    </div>
  )
}
