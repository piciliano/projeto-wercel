import styled from "styled-components";

export const Container = styled.div`
    padding-top: 70px;
    padding-left: 70px;
    /* width: 94.4%; */
    /* height: 92.3vh; */
    display: flex;
    background-color: #f2f2f2;
    flex-direction: column;
    
`
export const Box = styled.div`
    border-radius: 5px;
    background-color: #FFFFFF;
    width: 90%;
    height: 60px;
    margin-top: 3vh;
    margin-left: 5vw;
    display: flex;
    justify-content: space-between;
`
export const BoxLinks = styled.div`
    display: flex;
    margin: 10px;
    width: 40%;
`
export const Box1 = styled.div`
    border-bottom: 0.5px solid #f2f2f2;
    border-right: 0.5px solid #f2f2f2;
    width: 50%;
    margin: 1px 0px 1px 0px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
    :hover{
        cursor: pointer;
    }
`
export const Box2 = styled.div`
    border-bottom: 0.5px solid #017849;
    width: 50%;
    margin: 1px 0px 1px 0px;
    border-right: 0.5px solid #f2f2f2;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #017849;
    :hover{
        cursor: pointer;
    }
`
export const BoxInput = styled.div`
    width: 30%;
    margin: 7px;
    height: 45px;
    display: flex;
    align-items: center;
    border: 0.5px solid #f2f2f2;
    border-radius: 5px;
`
export const input = styled.input`
width: 90%;
font-size: 14px;
padding: 2px;
padding-left: 5px;
outline: none;
border: none;
&&::placeholder{
    color: #9e9e9e;
    font-size: 15px;
}
`