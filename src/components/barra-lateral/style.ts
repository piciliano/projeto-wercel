import styled from 'styled-components'

interface PropsDisplay{
  setDisplay: boolean | undefined
}

export const BarOne = styled.div`
  position: absolute;
  top: 70px;
  height: 100vh;
  width: 70px;
  background-color: #00995d;
  position: fixed;
  &.expanded {
    width: 200px;
    z-index: 999;
  }
`
export const BarUtils = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  align-items: start;
  gap: 10px;
  margin-top: 15px;
  flex-direction: column;
`

export const DivVisible = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DivImg = styled.img`
  margin-left: 20px;
  margin-right: 15px;
  background-color: transparent;
`
export const DivTextAndImg = styled.div<PropsDisplay>`
  width: 100%;
  align-items: center;
  margin-top: 30px;
  color: white;
  display: ${props => props.setDisplay ? 'none' : 'block'};
`
export const DivRender = styled.div`
  margin-top: 15px;
  width: 101%;
  background-color: #017849;
  display: flex;
  flex-direction: column;
`
export const divAlign = styled.div`
  width: 100%;
`
export const ImgSeta = styled.img`
  margin-right: 10px;
  :hover{
    cursor: pointer;
  }
`
export const ImgPranchetaOptions = styled.img`
  margin-left: 18px;
  margin-right:18px ;
`
export const DivRenderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TextRenderOptionsDiv = styled.p`
display: flex;
align-items: center;
`
export const DescriOptions = styled.p`
  color: white;
  margin: 0;
  margin-left: 60px;
  margin-bottom: 15px;
`
