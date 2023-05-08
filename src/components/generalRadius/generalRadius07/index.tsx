import React from 'react'
import * as C from '../generalRadius01/style'
import { ActivityTwo, Activty } from '@/utils/activity'

export const GeneralInputsSeven = () => {
    return(
        <>
            <C.Container>
                <C.ContainerCollum>
                    {Activty.map(item => (
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
                        </ React.Fragment>
                    ))}
                </C.ContainerCollum>
                <C.ContainerCollum>
                {ActivityTwo.map(item => (
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