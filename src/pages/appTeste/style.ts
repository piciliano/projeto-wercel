import styled from "styled-components";

export const Container = styled.div`
    width: 93%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContPsi = styled.div`
    border-radius:20px ;
    
    width: 75%;
    background-color: white;
`
export const PageTitle = styled.div `
    width: 99.5%;
    height: 55px;
    display: flex;
    margin-top:3px ;
    justify-content: space-between;
    border-radius: 10px 0px 0px 10px ;
    border-bottom: 1px solid #F2F2F2;
    border-left: 5px solid #00995D;
    align-items: center;
`
export const Entrevista = styled.p `
    color: #00995D;
    font-size: 25px;
    margin-left:20px ;
`
export const DivButtons = styled.div `
    display: flex;
    align-items:center;
    justify-content: space-between;
`
export const Next = styled.button`
    width: 100px;
    height: 26px;
    border-radius:50px;
    outline:none;
    border: 1px solid #00995D;
    color: #00995D;
    margin-left: 10px;
    margin-right: 10px;
`
export const DivButtonsTwo = styled.div `
    margin-top: 15px ;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 81%;
    margin-left: 20px ;
`
export const DivButton = styled.div`
    width: 100%;
    height: 100px;
`
export const SaveButton = styled.button`
margin-top: 25px ;
margin-left: 10px ;
width: 100px;
background: #00995D ;
outline: none;
border: none;
border-radius: 20px ;
height: 30px;
color: white;
`
export const NextButton = styled.button`
margin-left: 15px ;
width: 100px;
outline: none;
border: 1px solid #00995D;
border-radius: 20px ;
height: 30px;
color:#00995D ;
`
export const AddBtn = styled.button`
margin-top: 15px ;
margin-left: 15px ;
width: 105px;
background: #2F80ED;
outline: none;
border: none;
border-radius: 20px ;
height: 30px;
color: white;
:hover{
    cursor: pointer;
}
`
export const DivBase = styled.div`
    width: 95%;
    background-color: #F2F2F2;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 2px;
    border-radius: 10px;
    margin-bottom: 15px;
`
export const DivBaseInput = styled.div`
    margin-top: 40px;
`
export const SelectInput = styled.select`
    width: 132px;
    height: 35px;
    margin-right: 8px;
    border-radius: 5px;
    background-color: #E0E0E0;
`
export const TextInput = styled.textarea`
    width: 550px;
    margin-bottom: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #E0E0E0;
`
export const DivVisible = styled.div`
    display: none;
    padding-left: 20px;
    padding-top: 20px;
    width: 85%;
    &.block {
        display: block;
    }
`
export const ContainerTitle = styled.div`
    width: 97.5%;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;   
    align-items : center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #ffff;

`
export const divBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 40px;
    &.block {
        display: none;
    }
`
export const Please = styled.p`
    margin-bottom: 0;
    margin-left: 18px;

`