import * as C from './styled'
import ArrowOne from '../../icons/arrwoOne.svg'
import ArrowTwo from '../../icons/arrowtwo.svg'
import ArrowThree from '../../icons/arrowthree.svg'

export const DivArrowButton = () => {
    return(
        <C.DivButtonArrow>
            <C.ButtonArrow src={ArrowOne}></C.ButtonArrow>
            <C.ButtonArrow src={ArrowTwo}></C.ButtonArrow>
            <C.ButtonArrow src={ArrowThree}></C.ButtonArrow>      
        </C.DivButtonArrow>
    )
}