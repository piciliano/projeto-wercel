import { Conditions, ConditionsTwo } from '@/utils/conditions'
import * as C from './style'

export const GeneralInputs = () => {
    return(
        <>
            <C.Container>
                <C.ContainerCollum>
                    {Conditions.map(item => (
                        <>
                        <C.Text key={item.id}>{item.title}</C.Text>
                        <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Sim </C.Label>
                        </C.DivBase>
                        <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Não </C.Label>
                        </C.DivBase>
                        {item.input && ( <> {item.input}
                        <C.InputText/>
                        </>)}
                        </>
                    ))}
                </C.ContainerCollum>
                <C.ContainerCollum>
                {ConditionsTwo.map(item => (
                        <>
                        <C.Text key={item.id}>{item.title}</C.Text>
                        <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Sim </C.Label>
                        </C.DivBase>
                        <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Não </C.Label>
                        </C.DivBase>
                        {item.input && ( <> {item.input}
                        <C.InputText/>
                        </> )}
                        </>
                    ))}
                </C.ContainerCollum>
            </C.Container>
        </>
    )
}