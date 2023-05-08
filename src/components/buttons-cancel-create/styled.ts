import styled from 'styled-components'

export const ButtonsOrg = styled.div`
  display: flex;
  height: 100%;
  justify-content: end;
  align-items: center;
`

export const ButtonCreate = styled.button`
  background: #00995d;
  border-radius: 24px;
  width: 120px;
  margin-right: 30px;
  height: 40px;
  border: none;
  font-weight: bold;
  color: white;
  :hover {
    cursor: pointer;
  }
`
export const ButtonCancel = styled.button`
  font-weight: bold;
  width: 120px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: #616161;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`