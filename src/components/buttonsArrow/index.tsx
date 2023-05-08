import * as C from './styled'
import ArrowOne from '../../icons/arrwoOne.svg'
import ArrowTwo from '../../icons/arrowtwo.svg'
import ArrowThree from '../../icons/arrowthree.svg'
import { useLocation } from 'react-router-dom'
import ArrowComplete from '../../icons/arrowComplete.svg'
import ArrowTwoMarker from '../../icons/arrowTwoMarker.svg'
import ArrwTwoComplete from '../../icons/arrowTwoComplete.svg'
import ArrowObs from '../../icons/arrowObs.svg'

export const DivArrowButton = () => {
  const location = useLocation()
  console.log(location)
  return (
    <C.DivButtonArrow>
      {location.pathname === '/appteste' || location.pathname === '/save' ? (
        <C.ButtonArrow src={ArrowComplete} />
      ) : (
        <C.ButtonArrow src={ArrowOne} />
      )}
      {location.pathname === '/appteste' ? (
        <C.ButtonArrow src={ArrowTwoMarker} />
      ) : location.pathname === '/save' ? (
        <C.ButtonArrow src={ArrwTwoComplete} />
      ) : (
        <C.ButtonArrow src={ArrowTwo} />
      )}

      {location.pathname === '/save' ? <C.ButtonArrow src={ArrowObs} /> : <C.ButtonArrow src={ArrowThree} />}
    </C.DivButtonArrow>
  )
}
