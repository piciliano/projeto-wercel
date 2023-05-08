import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const LoginArea = styled.div`
  width: 35%;
  height: 40%;
  background-color: #017849;
  background: #017849;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
`
export const ImgLogo = styled.img`
  position: absolute;
  left: 0px;
  bottom: 5%;
  z-index: 1;
  width: 40%;
`
export const ImgLogoDois = styled.img`
  position: absolute;
  left: 10%;
  top: 8%;
  z-index: 1;
  width: 14%;
`
export const ImgWexer = styled.img`
  width: 50%;
`
export const ImgWexerPsi = styled.img`
  width: 20%;
  margin-bottom: 30px;
`
export const input = styled.input`
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  outline: none;
  padding: 3%;
`
export const divInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10%;
  margin-bottom: 10px;
`
export const divButton = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  background: #017849;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 100%;
  color: white;
  border: 1px solid white;
  :hover {
    cursor: pointer;
  }
`
export const ForgotPassword = styled.p`
  margin: 0;
  margin-top: 5%;
  margin-bottom: 10px;
  text-decoration: underline;
  color: white;
  font-size: 12px;
  text-align: end;
  :hover {
    cursor: pointer;
  }
`
export const Create = styled.p`
  color: white;
  margin: 0;
  margin-top: 10px;
`
