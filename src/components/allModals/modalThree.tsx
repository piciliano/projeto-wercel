import * as React from 'react';
import * as C from './style'
import Modal from '@mui/material/Modal';
import '../allModals/index.css'
import Close from '../../icons/close-modal.svg'

export default function ModalThree() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button className='btn' onClick={handleOpen}>Anexo</button>
      <Modal open={open} onClose={handleClose}>
        <C.modalTwo>
          <C.sizeContainer>
            <C.Title>Novo Anexo</C.Title>
            <img width='20px' height='20px' onClick={handleClose} src={Close}></img>
          </C.sizeContainer>
          <C.sizeContainer>
                  <C.inputData type='date'/>
                  <C.inputTitle type='text' placeholder='Digite'/>
          </C.sizeContainer>
          <C.sizeContainer>
                  <C.inputDescrition type='text'/>
          </C.sizeContainer>
          
          <C.sizeContainer>
            <C.DescriptionCollum>
            Anexar arquivos*
            <C.InputFile>
              Escolha um Arquivo...
              <input type="file" name="file" />
            </C.InputFile> 
            </C.DescriptionCollum>     
          </C.sizeContainer>
          <C.sizeContainer>
                  <C.description>*Campos obrigatórios</C.description>
                  <C.dualItems> 
                    Cancelar
                    <C.Create>Criar</C.Create>
                  </C.dualItems>
          </C.sizeContainer>
        </C.modalTwo>
          </Modal>
    </div>
  )
}
