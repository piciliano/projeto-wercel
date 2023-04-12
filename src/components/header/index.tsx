import * as C from './styled'
import Logo from '../../icons/logo.svg'
import Icon from '../../icons/setaprabaixo.png'
import Fill from '../../icons/Fill.png'

type Props = {
    changeBar: () => void
}

export const Header = ( {changeBar}:Props ) => {
    return(
        <C.Header>
            <C.ContLogo>
                <C.contLogoOne>
                    <img src={Logo} alt=''></img>
                </C.contLogoOne>
                <C.contLogoTwo>
                    <img onClick={changeBar} src={Fill} width="20px" height="10px" alt=''></img>
                </C.contLogoTwo>
            </C.ContLogo>
                <C.ContTwo>
                    Bem vindo(a), Fulano <img src={Icon} width="7" height="5"></img>
                <C.ContThree>
            </C.ContThree>
            </C.ContTwo>
        </C.Header>
    )
}
