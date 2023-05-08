import * as C from './style'
import IconSave from '../../icons/butsave.svg'
import IconNext from '../../icons/nextbutton.svg'
import { useLocation, useNavigate } from 'react-router-dom'

export const ButtonsDouble = () => {
  const Navigate = useNavigate()
  const Locate = useLocation()

  const handleJump = () => {
    Locate.pathname === '/psi' ? Navigate('/appteste') : Navigate('/save')
  }

  return (
    <C.Container>
      <C.ContSave>
        <img src={IconSave} />
        <C.Details>Salvar</C.Details>
      </C.ContSave>

      <C.ContNext onClick={handleJump}>
        <p>Pular</p>
        <img src={IconNext} />
      </C.ContNext>
    </C.Container>
  )
}

