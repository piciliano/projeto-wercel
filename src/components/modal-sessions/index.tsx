import * as C from './style'
import Rectangle from '../../icons/rectangle.svg'
import { useState } from 'react'




export const ModalSessions = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <C.FilterLine>
        <C.Line></C.Line>
        <C.OptionsFilter isVisible={isVisible}>
          <C.ListOptions>Todos</C.ListOptions>
          <C.ListOptions>Sessão</C.ListOptions>
          <C.ListOptions>Fato Relevante</C.ListOptions>
          <C.ListOptions>Anexo</C.ListOptions>
          <C.ListOptions>Avaliação Psicológica</C.ListOptions>
        </C.OptionsFilter>
        <C.FilterTitle>Filtrar por:</C.FilterTitle>
        <C.FilterSearch>Todos</C.FilterSearch>
        <C.ButtonRectangle src={Rectangle} onClick={() => setIsVisible(!isVisible)} alt="rectangle" />
      </C.FilterLine>
      
    </>
  )
}