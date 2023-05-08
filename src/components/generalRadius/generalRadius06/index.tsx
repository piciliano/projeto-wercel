import { Condute, ConduteTwo } from '@/utils/condute'
import * as C from '../generalRadius01/style'
import React from 'react'

export const GeneralInputsSix = () => {
    return(
        <>
            <C.Container>
                <C.ContainerCollum>
                    {Condute.map(item => (
                        <React.Fragment key={item.id}>
                        <C.Text >{item.title}</C.Text>
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
                        </React.Fragment>
                    ))}
                </C.ContainerCollum>
                <C.ContainerCollum>
                {ConduteTwo.map(item => (
                        <React.Fragment key={item.id}>
                        <C.Text >{item.title}</C.Text>
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
                        </React.Fragment>
                    ))}
                </C.ContainerCollum>
            </C.Container>
        </>
    )
}