import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: end;
  align-items: center;
`
export const EspecificationOne = styled.p`
  color: #00995d;
  font-size: 24px;
  padding-left: 70px;
  padding-right: 50px;
  margin: 0;
`
export const EspecificationTwo = styled.p`
  padding-left: 80px;
  padding-right: 60px;
`
export const ButtonOk = styled.button`
  background-color: #017849;
  width: 50%;
  border-radius: 24px;
  border: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`
export const ButtonSave = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    margin-right: 10px;
  }
`
