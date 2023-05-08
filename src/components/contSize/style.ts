import styled from 'styled-components'

export const ContSize = styled.div`
  width: 90%;
  margin-left: 5vw;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
export const BoxSizeOne = styled.div`
  width: 25%;
`
export const CardContOne = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  color: #00995d;
  padding-bottom: 15px;
`
export const ImgLapis = styled.img`
  margin-top: 20px;
  :hover{
    cursor: pointer;
  }
`
export const CardsContTwo = styled.div`
  width: 100%;
  /* height: 180px; */
  border-radius: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextDualTitles = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
`
export const TextDetails = styled.div`
  width: 70%;
  margin-top: 15px;
  display: flex;
`
export const TextDetailsInfo = styled.p`
  color: gray;
  margin: 1px;
  width: 55%;
`
export const DemandObject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`
export const boxDetails = styled.div`
  padding: 10px;
  text-align: start;
  width: 85%;
  color: gray;
`
export const imgOpen = styled.img`
  :hover {
    cursor: pointer;
  }
`
export const modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: 45%;
  background-color:#ffff;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.2);
`
export const titleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`
export const titleFormat = styled.p`
  color: #00995D;
  font-weight: 700;
  font-size: 25px;
`
export const CloseButton = styled.img`
  :hover{
    cursor: pointer;
  }
`
export const DivButtonsBorder = styled.div`
margin-top: 30px;
height: 80px;
border-top: 2px solid #E0E0E0;
width: 100%;
`

