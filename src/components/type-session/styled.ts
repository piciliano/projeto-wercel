import styled from 'styled-components'

export const CardRightOne = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  border-left: 2px solid #00995D;
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
export const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: -20px;
  background-color: #00995D;
`
export const BarEfect = styled.div`
  height: 20px;
  border: none;
  width: 3px;
  position: absolute;
  bottom: 40px;
  background-color: green;
`

export const ButtonRectangle = styled.img`
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








// border-left: ${({ setBackground }) => (setBackground === 'Sessão' ? '2px solid #00995D' : '')};