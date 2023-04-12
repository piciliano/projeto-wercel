import * as C from './style'
import Save from '../../icons/save.svg'
import Lixeira from '../../icons/lixeira.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const AppTeste = () => {
    const [isBlock, setIsBlock] = useState(false)

    const changeBlock = () => {
        setIsBlock(!isBlock)
    }
    const Visible = 
    isBlock ? 'block' : '';
  return (
    
    <C.Container>
      <C.ContPsi>
        <C.PageTitle>
          <C.Entrevista>Aplicação de Teste</C.Entrevista>
          <C.DivButtons>
            <img width="100px" height="100px" src={Save}></img>
            <C.Next> 
                <Link style={{color:'green',textDecoration:'none'}} to="/save">Pular</Link>
            </C.Next>
          </C.DivButtons>
        </C.PageTitle>
        <C.divBlock className={Visible}>
            <C.Please>Por favor, adicione um teste</C.Please>
            <C.AddBtn onClick={changeBlock} >Adicionar</C.AddBtn>
        </C.divBlock>
        <C.DivVisible className={Visible}>
        <C.DivBase>
        <C.ContainerTitle>Atençao Concentrada/Seletiva
                <img width='25px' src={Lixeira}></img>
            </C.ContainerTitle>
            <C.DivBaseInput>
              <C.SelectInput /><C.SelectInput /><C.SelectInput /><C.SelectInput />
            </C.DivBaseInput>
            <C.DivBaseInput>
              <C.TextInput />
            </C.DivBaseInput>
          </C.DivBase>
          
          <C.DivBase>
          <C.ContainerTitle>Memória
          <img width='25px' src={Lixeira}></img>
          </C.ContainerTitle>
            <C.DivBaseInput> <C.SelectInput /><C.SelectInput /><C.SelectInput /><C.SelectInput />
            </C.DivBaseInput>
            <C.DivBaseInput>
              <C.TextInput />
            </C.DivBaseInput>
          </C.DivBase>
          
          <C.DivBase>
          <C.ContainerTitle>Inteligência
          <img width='25px' src={Lixeira}></img>
          </C.ContainerTitle>
            <C.DivBaseInput> <C.SelectInput /><C.SelectInput /><C.SelectInput /><C.SelectInput />
            </C.DivBaseInput>
            <C.DivBaseInput>
              <C.TextInput />
            </C.DivBaseInput>
          </C.DivBase>
          <C.DivBase>
          <C.ContainerTitle>Personalidade
          <img width='25px' src={Lixeira}></img>
          </C.ContainerTitle>
            <C.DivBaseInput> <C.SelectInput /><C.SelectInput /><C.SelectInput /><C.SelectInput />
            </C.DivBaseInput>
            <C.DivBaseInput>
              <C.TextInput />
            </C.DivBaseInput>
          </C.DivBase>
          <C.DivButtonsTwo></C.DivButtonsTwo>
          <C.AddBtn>Adicionar</C.AddBtn>
          <C.DivButton>
            <C.SaveButton>Salvar</C.SaveButton>
            <C.NextButton>
            <Link style={{color:'green',textDecoration:'none'}} to="/save">Pular</Link>
            </C.NextButton>
          </C.DivButton>
        </C.DivVisible>

      </C.ContPsi>
    </C.Container>
  )
}
