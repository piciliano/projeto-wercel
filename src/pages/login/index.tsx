import * as C from './styled'
import './index.css'
import Logo from '../../icons/Wexer1.svg'
import LogoDois from '../../icons/Wexer2.svg'
import LogoLogin from '../../icons/imgWever.svg'
import LogoPsi from '../../icons/imgPsi.svg'
import { useState } from 'react'
import { loginService } from '@/services/login-service'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      const response = await loginService({ email, password })
      localStorage.setItem('token', response.token)
      navigate('/app')
    } catch (er) {
      if (er instanceof Error) {
        setError(er.message)
        return
      }
      setError('Deu erro')
    }
  }

  return (
    <C.Container>
      <C.ImgLogo src={Logo} />
      <C.ImgLogoDois src={LogoDois} />
      <form>
        
        <C.LoginArea>
        
          <C.ImgWexer src={LogoLogin} />
          <C.ImgWexerPsi src={LogoPsi} />
          <div style={{color:'red'}}>{error}</div>
          <C.divInputs>
            <label htmlFor="login" style={{ color: 'white' }}>
              Login:
            </label>
            <C.input id="login" type="text" onChange={e => setEmail(e.target.value)} />
          </C.divInputs>
          <C.divInputs>
            <label htmlFor="password" style={{ color: 'white', marginTop: '5%' }}>
              Senha:
            </label>
            <C.input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          </C.divInputs>
          <C.divButton>
            <C.ForgotPassword>Esqueci a senha</C.ForgotPassword>
            <C.Button onClick={login}>Entrar</C.Button>
          </C.divButton>
          <C.Create>Cadastre-se Gratuitamente</C.Create>
        </C.LoginArea>
      </form>
    </C.Container>
  )
}
