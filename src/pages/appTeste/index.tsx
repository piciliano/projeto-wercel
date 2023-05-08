import * as C from './style'
import InputsIntro from '@/utils/inputs-app'
import { ButtonsDouble } from '@/components/next-save'
import { useState } from 'react'
import BottonAdd from '../../icons/botaoadd.svg'
import './index.css'
import React from 'react'

export const AppTeste = () => {
  const [inputsIntroState, setInputsIntroState] = useState(InputsIntro)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleTeste, setIsVisibleTeste] = useState(false)

  const changeHidden = () => {
    setIsVisible(!isVisible)
  }
  const changeHiddenTeste = () => {
    setIsVisibleTeste(!isVisibleTeste)
  }
  const Hidden = isVisible ? 'visible' : ''
  const HiddenButton = isVisibleTeste ? 'visibleTeste' : ''
  const handleInputChange = (index: number, isChecked: boolean) => {
    const updatedInputsIntroState = [...inputsIntroState]
    updatedInputsIntroState[index].isChecked = isChecked
    setInputsIntroState(updatedInputsIntroState)
  }
  const isCheckedArray = InputsIntro.map(item => item.isChecked)
  const optionCheckBox = isCheckedArray.some(value => value)
  
  return (
    <>
      <C.Teste className={HiddenButton}>
        <C.DivChecksDisplayNone className={Hidden}>
          {inputsIntroState.map((item, index) => (
            <div key={index}>
              <C.DivFlexCheck>
                <input 
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={e => handleInputChange(index, e.target.checked)}
                />
                <C.DetailsCheck>{item.title}</C.DetailsCheck>
              </C.DivFlexCheck>
            </div>
          ))}
          {optionCheckBox === true && <C.DetailsButton onClick={changeHidden}>Aplicar</C.DetailsButton>}
        </C.DivChecksDisplayNone>
      </C.Teste>
      <C.Container>
        <C.ContPsi>
          <C.PageTitle>
            <C.Entrevista>Aplicação de Teste</C.Entrevista>
            <ButtonsDouble />
          </C.PageTitle>
          <C.divBlock>
            <C.Please className={Hidden}>Por favor, adicione um teste</C.Please>
            <C.ImgBotton className={Hidden} onClick={changeHiddenTeste} src={BottonAdd} alt="botton" />
          </C.divBlock>
          <C.DivVisible className={Hidden}>
            {InputsIntro.map((item, index) => (
              <React.Fragment key={index}>
                {item.isChecked === true && (
                  <C.DivBase >
                    <C.ContainerTitle>
                      <p>{item.title}</p>
                      <img src={item.icon}></img>
                    </C.ContainerTitle>
                    <C.DivBaseInput>
                      {item.inputs.map((intro, index) => (
                        <C.DivBaseInputFlex key={index}>
                          <label htmlFor="inputOne">{intro.descri}</label>
                          <C.SelectInput id="inputOne" type={intro.model} />
                        </C.DivBaseInputFlex>
                      ))}
                    </C.DivBaseInput>
                    <C.DivBaseInputFlex>
                      <label htmlFor="inputText">{item.labelText}</label>

                      {item.title != 'Personalidade' && <C.TextInput id="inputText" placeholder={item.placeHolder} />}
                      <C.FlexContainer>
                        <div>
                          {item.inputsExpandsOne?.map((inputs, index) => (
                            <>
                              {inputs.descri && (
                                <C.FlexContainer key={index}>
                                  <C.ContainerDualInputs>
                                    <label htmlFor="inputsOne">{inputs.descri}</label>
                                    <C.SelectInputOne id="inputsOne" type={inputs.model} />
                                  </C.ContainerDualInputs>
                                </C.FlexContainer>
                              )}
                            </>
                          ))}
                        </div>
                        <div>
                          {item.inputsExpandsTwo?.map((inputs, index) => (
                            <>
                              {inputs.descri && (
                                <C.FlexContainer key={index}>
                                  <C.ContainerDualInputs>
                                    <label htmlFor="inputsOne">{inputs.descri}</label>
                                    <C.SelectInputOne id="inputsOne" type={inputs.model} />
                                  </C.ContainerDualInputs>
                                </C.FlexContainer>
                              )}
                            </>
                          ))}
                        </div>
                      </C.FlexContainer>
                    </C.DivBaseInputFlex>
                  </C.DivBase>
                )}
              </React.Fragment>
            ))}
            <ButtonsDouble />
          </C.DivVisible>
        </C.ContPsi>
      </C.Container>
    </>
  )
}
