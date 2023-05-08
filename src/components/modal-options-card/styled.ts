import styled from "styled-components"

export const ModalOptions = styled.div`
  width: 150px;
  height: 160px;
  position: absolute;
  right: 10px;
  top: 25px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 999;
  background-color: white;
  z-index: 1;
`
export const DivAlignItems = styled.div`
    display: flex;
    margin: 25px;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`
export const Descri = styled.p`
    margin: 0;
`
export const FileImage = styled.img`
    margin-right: 10px;
`