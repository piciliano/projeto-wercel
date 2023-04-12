import { Life, LifeTwo } from '@/utils/professionalLife'
import * as C from '../generalRadius01/style'

export const GeneralInputsThree = () => {
    return(
    <>
      <C.Container>
        <C.ContainerCollum>
          {Life.map(item => (
            <>
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
                    <C.DivBase>
                      <C.InputRadius key={index} id="radio" type="radio" value={select}></C.InputRadius>
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
            </>
          ))}
        </C.ContainerCollum>

        <C.ContainerCollum>
          {LifeTwo.map(item => (
              <>
              <C.Text key={item.id}>{item.title}</C.Text>
              {!item.hidden && (
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
                    <C.DivBase>
                      <C.InputRadius key={index} id="radio" type="radio" value={select}></C.InputRadius>
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
            </>
          ))}
        </C.ContainerCollum>
      </C.Container>
    </>
  )
}
