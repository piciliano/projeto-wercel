import { useState } from 'react'
import * as C from './style'
import Icons from '@/utils/bar-icons'
import { Header } from '../header'
import React from 'react'
import SetaModels from '../../icons/setaModal.svg'
import barText from '@/utils/bar-icons'
import Prancheta from '../../icons/Prancheta.svg'

type barIconsProps = {
  text: string
  icons: string
  isBlockModels?: boolean | undefined
}

export const BarraF = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isBlock, setIsBlock] = useState(false)

  const changeBar = () => {
    setIsExpanded(!isExpanded)
  }
  const changeDisplay = () => {
    setIsBlock(!isBlock)
  }
  const BarOne = isExpanded ? 'expanded' : ''
  const [iconsProps, setIconsProps] = useState<Array<barIconsProps>>(barText)
  const handleItemClick = (index: number) => {
    const newIcons = [...iconsProps]
    newIcons[index].isBlockModels = !newIcons[index].isBlockModels
    changeDisplay()
    setIconsProps(newIcons)
  }

  return (
    <>
      <Header changeBar={changeBar} />
      <C.BarOne className={BarOne}>
        <C.BarUtils>
          {Icons.map((items, index) => (
            <React.Fragment key={index}>
              <C.DivTextAndImg setDisplay={items.isBlockModels}>
                <div style={{ display: 'flex' }}>
                  <C.DivImg src={items.icons} alt="" />
                  <C.divAlign>
                    {isExpanded && (
                      <C.DivVisible>
                        {items.text}
                        {items.text === 'Modelos' &&(
                          <C.ImgSeta onClick={() => handleItemClick(index)} src={SetaModels}></C.ImgSeta>
                        )}
                        {items.text === 'Cadastros' &&(
                          <C.ImgSeta  src={SetaModels}></C.ImgSeta>
                        )}
                      </C.DivVisible>
                    )}
                  </C.divAlign>
                </div>
              </C.DivTextAndImg>
              {items.text === 'Modelos' && isBlock && BarOne === 'expanded' && (
                <C.DivRender>
                  <C.DivRenderOptions>
                    <C.TextRenderOptionsDiv style={{ color: 'white' }}>
                      <C.ImgPranchetaOptions src={Prancheta} />
                      Modelos
                    </C.TextRenderOptionsDiv>
                    <C.ImgSeta onClick={() => handleItemClick(index)} src={SetaModels} />
                  </C.DivRenderOptions>
                  <C.DescriOptions>Entrevistas</C.DescriOptions>
                  <C.DescriOptions>Roteiro de testes</C.DescriOptions>
                  <C.DescriOptions>Documentos</C.DescriOptions>
                </C.DivRender>
              )}
            </React.Fragment>
          ))}
        </C.BarUtils>
      </C.BarOne>
    </>
  )
}
