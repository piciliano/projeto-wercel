import styled from 'styled-components'

export const Container = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContPsi = styled.div`
  border-radius: 20px;
  width: 75%;
  background-color: white;
`
export const PageTitle = styled.div`
  width: 99.5%;
  height: 55px;
  display: flex;
  margin-top: 3px;
  justify-content: space-between;
  border-radius: 10px 0px 0px 10px;
  border-bottom: 1px solid #f2f2f2;
  border-left: 5px solid #00995d;
  align-items: center;
`
export const Entrevista = styled.p`
  color: #00995d;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-left: 20px;

`
export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DivButtonsTwo = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 81%;
  margin-left: 20px;
`
export const DivButton = styled.div`
  width: 100%;
  height: 100px;
`

export const AddBtn = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
  width: 105px;
  background: #2f80ed;
  outline: none;
  border: none;
  border-radius: 20px;
  height: 30px;
  color: white;
  :hover {
    cursor: pointer;
  }
`
export const DivBase = styled.div`
  width: 95%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 2px;
  border-radius: 10px;
  margin-bottom: 15px;
`
export const DivBaseInput = styled.div`
  margin-top: 40px;
  display: flex;
`
export const SelectInput = styled.input`
  width: 122px;
  height: 35px;
  margin-right: 8px;
  border-radius: 5px;
  background-color: #e0e0e0;
  outline: none;
  border: 1px solid #bdbdbd;
`
export const TextInput = styled.textarea`
  width: 535px;
  margin-bottom: 20px;
  height: 35px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #e0e0e0;
  &::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 8px;
  }
`
export const DivVisible = styled.div`
  display: none;
  padding-left: 20px;
  padding-top: 20px;
  width: 85%;
  &.visible {
    display: block;
  }
`
export const ContainerTitle = styled.div`
  width: 97.5%;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffff;

  p{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`
export const divBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 40px;

`
export const Please = styled.p`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #4F4F4F;
  margin-bottom: 0;
  margin-left: 18px;
  &.visible{
    display: none;
  }
`
export const DivBaseInputFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const DivCheck = styled.div`
  display: flex;
  margin: 100px;
  width: 200px;
  height: 200px;
  flex-direction: column;
`
export const DivChecksDisplayNone = styled.div`
  position: absolute;
  top: 244px;
  left: 65px;
  width:225px ;
  padding: 20px;
  margin: 100px;;
  border-radius: 0px 0px 16px 16px;
  background-color: white;
  &.visible {
    display: none;
  }
  `
  export const DivFlexCheck = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: center;
  `
  export const DetailsCheck = styled.p`
    font-weight: bold;
    margin: 0;
    width: 100%;
    margin-left: 5px;
  `
  export const DetailsButton = styled.button`
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 35px;
    width:160px ;
    border: none;
    color: white;
    background-color: #00995D;
    justify-content: center;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 24px;
    :hover{
      cursor: pointer;
    }
  `
  export const ImgBotton = styled.img`
    margin-top: 20px;
    margin-left: 15px;
    :hover{
      cursor: pointer;
    }
    &.visible{
      display: none;
    }
  `
  export const Teste = styled.div`
    display: none;
    &.visibleTeste{
      display: block;
    }
  `
  export const FlexContainer = styled.div`
    display: flex;
  `
  export const ContainerDualInputs = styled.div`
    display: flex;
    flex-direction: column;
  `
  export const SelectInputOne = styled.input`
  width: 200px;
  height: 35px;
  margin-right: 8px;
  border-radius: 5px;
  background-color: #e0e0e0;
  outline: none;
  border: 1px solid #bdbdbd;
`
export const testing = styled.div`
  display: flex;
`