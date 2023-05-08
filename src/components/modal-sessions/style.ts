import styled from 'styled-components'

interface StyledProps {
  setBackground?: string
}
interface Props {
  isVisible: boolean
}


export const CardRightOne = styled.div<StyledProps>`
  width: 100%;
  margin-top: 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  border-left: ${({ setBackground }) => (setBackground === 'Sessão' ? '2px solid #00995D' : '')};
  border-left: ${({ setBackground }) => (setBackground === 'Fato relevante' ? '2px solid #2F80ED' : '')};
  border-left: ${({ setBackground }) => (setBackground === 'Documentos importantes' ? '2px solid #9D28AC' : '')};
  border-left: ${({ setBackground }) => (setBackground === 'Avaliação Psicológica' ? '2px solid #EA1E61' : '')};
`
export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
`
export const FormatTitle = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`
export const FormatDate = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 5px;
  color: #616161;
`
export const FormatText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`
export const IconDiv = styled.div<StyledProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: -20px;

  background: ${({ setBackground }) => (setBackground === 'Sessão' ? '#00995D' : '')};
  background: ${({ setBackground }) => (setBackground === 'Fato relevante' ? '#2F80ED' : '')};
  background: ${({ setBackground }) => (setBackground === 'Documentos importantes' ? '#9D28AC' : '')};
  background: ${({ setBackground }) => (setBackground === 'Avaliação Psicológica' ? '#EA1E61' : '')};
`
export const BarEfect = styled.div<StyledProps>`
  height: 20px;
  border: none;
  width: 3px;
  position: absolute;
  bottom: 40px;

  background: ${({ setBackground }) => (setBackground === 'Sessão' ? ' #00995D' : '')};
  background: ${({ setBackground }) => (setBackground === 'Fato relevante' ? '#2F80ED' : '')};
  background: ${({ setBackground }) => (setBackground === 'Documentos importantes' ? '#9D28AC' : '')};
  background: ${({ setBackground }) => (setBackground === 'Avaliação Psicológica' ? '#EA1E61' : '')};
`
export const FilterLine = styled.div`
  height: 20px;
  margin-top: 10px;
  display: flex;
  position: relative;
`
export const Line = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 650px;
  height: 10px;
  margin-right: 5px;
`
export const FilterTitle = styled.p`
  margin: 0;
  color: #bdbdbd;
`
export const FilterSearch = styled.p`
  margin: 0;
  margin-left: 5px;
`
export const OptionsFilter = styled.div<Props>`
  position: absolute;
  z-index: 9999;
  right: 0px;
  top: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
export const ButtonRectangle = styled.img`
  :hover {
    cursor: pointer;
  }
`
export const ListOptions = styled.p`
  margin: 0;
  padding: 20px;
  :hover {
    background-color: #c5f2e0;
    cursor: pointer;
    color: #00995d;
    font-weight: bold;
  }
`
export const MaxCaracteres = styled.span`
  color: #2f80ed;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`
export const PontosImg = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  :hover {
    cursor: pointer;
  }
`
