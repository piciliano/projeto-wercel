import { Condute, ConduteTwo } from '@/utils/condute'
import * as C from '../generalRadius01/style'

export const GeneralInputsSix = () => {
    return(
        <>
            <C.Container>
                <C.ContainerCollum>
                    {Condute.map(item => (
                        <>
                        <C.Text key={item.id}>{item.title}</C.Text>
                        {!item.hidden && (
                            <>
                            <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Sim </C.Label>
                        </C.DivBase>
                        <C.DivBase>
                        <C.InputRadius id='radio' type='radio'></C.InputRadius>
                        <C.Label htmlFor='radio'> Não </C.Label>
                        </C.DivBase>
                        </>
                        )}
                        
                        {item.input && ( <> {item.input}
                        <C.InputText/>
                        </>)}
                        </>
                    ))}
                </C.ContainerCollum>
                <C.ContainerCollum>
                {ConduteTwo.map(item => (
                        <>
                        <C.Text key={item.id}>{item.title}</C.Text>
                        {!item.hidden && (
                            <>
                            <C.DivBase>
                            <C.InputRadius id='radio' type='radio'></C.InputRadius>
                            <C.Label htmlFor='radio'> Sim </C.Label>
                            </C.DivBase>
                            <C.DivBase>
                            <C.InputRadius id='radio' type='radio'></C.InputRadius>
                            <C.Label htmlFor='radio'> Não </C.Label>
                            </C.DivBase>
                            </>
                        )}
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