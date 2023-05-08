import styled from 'styled-components'

interface StyledProps {
  setBorder: string
}

export const ContainerOptions = styled.div<StyledProps>`
  width: 94%;
  height: 40px;
  margin-left: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  border-radius: ${({ setBorder }) => (setBorder === 'Aplicação de teste' ? '0px' : '')};
  border-top: ${({ setBorder }) => (setBorder === 'Aplicação de teste' ? '0px' : '')};
  border-bottom: ${({ setBorder }) => (setBorder === 'Aplicação de teste' ? '0px' : '')};
  border-radius: ${({ setBorder }) => (setBorder === 'Observação Comportamental' ? '0px 0px 8px 8px; ' : '')};
  border: ${({ setBorder }) => (setBorder === 'Observação Comportamental' ? '0px 1px' : '')};
`
export const TitleOptions = styled.p`
  padding-left: 10px;
`
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
`
export const Status = styled.p`
  margin: 0;
  border: none;
  border-radius: 16px;
  width: 85px;
  text-align: center;
  padding: 2px;
  background-color: #c5f2e0;
  margin-right: 15px;
  color: #017849;
  font-weight: 20px;
`
export const DivButtons = styled.div`
  display: flex;
  margin-left: 15px;
  margin-bottom: 20px;
`
export const Emitir = styled.p`
  margin-bottom: 5px;
  color: #4f4f4f;
  margin-left: 15px;
`
export const ImgFormat = styled.img`
  margin-right: 10px;
`
