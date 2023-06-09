
import { LifeSchool, LifeSchoolTwo } from '@/utils/schoolLife'
import * as C from '../generalRadius01/style'
import React from 'react'

export const GeneralInputsFour = () => {
    return(
    <>
      <C.Container>
        <C.ContainerCollum>
          {LifeSchool.map(item => (
            <React.Fragment key={item.id}>
              <C.Text key={item.id}>{item.title}</C.Text>
              {!item.options && (
                <>
                  <C.DivBase>
                    <C.InputRadius id="radio" type="radio"></C.InputRadius>
                    <C.Label htmlFor="radio"> Sim </C.Label>
                  </C.DivBase>
                  <C.DivBase>
                    <C.InputRadius id="radio" type="radio"></C.InputRadius>
                    <C.Label htmlFor="radio"> Não </C.Label>
                  </C.DivBase>
                </>
              )}
              {item.options && (
                <>
                  {item.options.map((select, index) => (
                    <C.DivBase key={index}>
                      <C.InputRadius  id="radio" type="radio" value={select}></C.InputRadius>
                      <C.Label htmlFor="radio"> {select} </C.Label>
                    </C.DivBase>
                  ))}
                </>
              )}
              {item.input && (
                <>
                  {item.input}
                  <C.InputText />
                </>
              )}
            </React.Fragment>
          ))}
        </C.ContainerCollum>
        <C.ContainerCollum>
          {LifeSchoolTwo.map(item => (
              <React.Fragment key={item.id}>
              <C.Text >{item.title}</C.Text>
                <>
                <C.DivBase>
                <C.InputRadius id="radio" type="radio"></C.InputRadius>
                <C.Label htmlFor="radio"> Sim </C.Label>
              </C.DivBase>
              <C.DivBase>
                <C.InputRadius id="radio" type="radio"></C.InputRadius>
                <C.Label htmlFor="radio"> Não </C.Label>
              </C.DivBase>
              </>
              {item.input && (
                <>
                  {item.input}
                  <C.InputText />
                </>
              )}
            </React.Fragment>
          ))}
        </C.ContainerCollum>
      </C.Container>
    </>
  )
}
