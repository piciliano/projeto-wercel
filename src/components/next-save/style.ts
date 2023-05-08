import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1em;
  width: 320px;
margin: 0 15px;
`

export const ContSave = styled.div`
  width: 180px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #00995d;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  padding: 0 2em;
`

export const ContNext = styled(ContSave)`
  background: transparent;
  color: #00995d;
  border: 1px solid #00995d;
  box-shadow: none;
`
export const Details = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`
