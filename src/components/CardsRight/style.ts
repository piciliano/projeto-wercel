import styled from 'styled-components'

interface Props {
    isVisible: boolean
}

export const BoxSizeTwo = styled.div`
  width: 73%;
  border-radius: 10px;
  padding-bottom: 40px;
`
export const CardsRight = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const CardsRightOne = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardsRightTwo = styled.div`
  width: 95%;
  height: 50%;
  border-top: 0.1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
`
export const Service = styled.div`
  width: 60%;
  margin-left: 5px;
  margin-right: 15px;
  outline: none;
  border-radius: 8px;
  padding: 2px;
  color: #e0e0e0;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
`
export const Option = styled.option``
export const iconsEnd = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
export const IconsSum = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 18px;
    margin-right: 5px;
    cursor: pointer;
  }
`
export const ImgRectangle = styled.img`
  :hover {
    cursor: pointer;
  }
`
export const DivModalOptions = styled.div<Props>`
  width: 55%;
  border: 1px solid;
  position: absolute;
  top: 45px;
  left: 80px;
  background-color: #ffff;
  border-radius: 8px;
  border: none;
  padding: 10px;
  z-index: 999;
  display: ${(props) => (props.isVisible? 'block' : 'none')};
`
export const DivRadio = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`
export const TitlesDuo = styled.p`
  margin-left: 10px;
  font-weight: bold;
`
