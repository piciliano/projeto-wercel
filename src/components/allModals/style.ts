import styled from "styled-components";

export const modalOne = styled.div`
 position: absolute;
  top: 50%;
  height: 500px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-Radius: 8px;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: scroll;
`
export const modalTwo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-Radius: 8px;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const sizeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  img{
    margin-right: 20px;
    :hover{
      cursor: pointer;
    }
  }
`
export const Title = styled.p`
  color: #00995D;
  font-size: 30px;
  margin: 0;
  padding: 0;
`
export const description = styled.p`
  color: gray;
  font-size: 15px;
  margin: 0;
  padding: 0;
`
export const inputData = styled.input`
  width: 30%;
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`
export const inputTitle = styled.input `
  width: 60%;
`
export const inputDescrition = styled.input`
  width: 100%;
  height: 200px;
`
export const inputDescritionTitle = styled.input`
  width: 100%;
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
  background-color: #00995D ;
  color: white;
  padding: 5px;
  width: 100px;
  margin: 5px;
  margin-left: 20px;
`
export const AlertGreen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  border-radius: 10px;
  background-color: #C5F2E0;
`
export const InputFile = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #2F80ED;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 5px;

  &:hover {
    background-color: #303f9f;
  }
  input[type="file"] {
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
export const AlertDescription = styled.p `
color: green;
font-size: 20px;
margin: 0;
padding-left: 20px;
padding-top: 15px;
`
export const AlertDescriptionTwo = styled.p `
color: green;
font-size: 17px;
margin: 0;
padding-left: 20px;
padding-top: 15px;
margin-bottom: 15px;
`
export const Sessions = styled.div`
  display: flex;
  align-items: center;
  img{
    margin-top: 20px;
  }
`
export const NumberDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: #00995D ;
  color:white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`