import styled from 'styled-components'

export const BarOne = styled.div`
width: 70px;
height: 100vh;
background-color: #00995D;
position: absolute;
:hover{
  cursor: pointer;
}
`
export const BarUtils =styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const M = styled.div`
  margin: 15px;
`
export const MbarTwo = styled.div`
  display: flex;
  width: 70%;
  align-items:center;
  justify-content: start;
  img{
    :hover{
      cursor: pointer;
    }
  }
`
export const MbarContainerTwo = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const Paragraph = styled.p`
font-size: 15px;
color: white;
padding-top: 2px;
margin-left: 5px;
margin-top: 15px;
`
export const BarTwo = styled.div`
:hover{
  cursor: pointer;
}
width: 1px;
height: 100vh;
background-color: #00995D;
transition: width 0.3s ease-in-out;
  &.expanded {
    width: 200px;
    height:100vh;
    position: relative;
  }
`
export const divGlobal = styled.div`
  position: fixed;
  top: 70px;
`

export default BarTwo