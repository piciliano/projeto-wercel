import styled from 'styled-components'

export const modalOne = styled.div`
  position: absolute;
  top: 50%;
  height: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 8px;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  overflow: scroll;
`
export const modalTwo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 8px;
  width: 45%;
  background-color: white;
  display: flex;
  flex-direction: column;
`
export const sizeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  img {
    margin-right: 20px;
    :hover {
      cursor: pointer;
    }
  }
`
export const ContInputsCollum = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: #00995d;
  font-size: 30px;
  margin: 0;
  padding: 0;
`
export const description = styled.p`
  color: gray;
  font-size: 15px;
  margin: 0;
  padding: 0;
  margin-left: 20px;
`
export const inputData = styled.input`
  width: 92%;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  outline: none;
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`
export const inputTitle = styled.input`
  width: 99%;
  border-radius: 8px;
  height: 28px;
  border: 1px solid #bdbdbd;
`
export const inputDescrition = styled.input`
  width: 100%;
  height: 200px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
`
export const inputDescritionTitle = styled.input`
  width: 100%;
  border-radius: 9px;
  height: 30px;
  outline: none;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-bottom: 15px;
`
export const dualItems = styled.div`
  display: flex;
  align-items: center;
`
export const Create = styled.button`
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #00995d;
  color: white;
  padding: 5px;
  width: 100px;
  margin: 5px;
  margin-left: 20px;
  margin-right: 20px;
`
export const AlertGreen = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  border-radius: 10px;
  background-color: #c5f2e0;
  margin-left: 10px;
  margin-bottom: 30px;
  padding: 10px;
`
export const InputFile = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #2f80ed;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 5px;

  &:hover {
    background-color: #303f9f;
  }
  input[type='file'] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: inline-block;
  }
`
export const DescriptionCollum = styled.div`
  display: flex;
  flex-direction: column;
`
export const AlertDescription = styled.p`
  color: green;
  font-size: 20px;
  margin: 0;
`
export const AlertDescriptionTwo = styled.p`
  color: green;
  font-size: 17px;
  margin-bottom: 15px;
`
export const Sessions = styled.div`
  display: flex;
  align-items: center;
  img {
  }
`
export const NumberDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: #00995d;
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Prox = styled.button`
  background: #00995d;
  border-radius: 24px;
  border: none;
  color: #ffff;
  width: 150px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`
export const LineContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
`
export const divEnvolver = styled.div`
  margin: 15px;
`
export const configFateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`
export const configFateDivTwo = styled.div`
   display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`
export const divColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const inputDateFour = styled.input`
  width: 30%;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  outline: none;
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`
