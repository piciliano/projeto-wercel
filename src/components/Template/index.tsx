import { Outlet, useLocation } from 'react-router-dom'
import { Normalize } from 'styled-normalize'
import { BarraF } from '../barra-lateral'
import { DivArrowButton } from '../buttonsArrow'

export const Template = () => {

  const location = useLocation()

  return (
    <div className="App">
      <Normalize />
      <BarraF />
      {location.pathname !== "/" && <DivArrowButton />}
      <Outlet />
    </div>
  )
}
