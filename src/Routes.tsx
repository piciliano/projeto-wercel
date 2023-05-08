import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/app/index'
import { Template } from './components/Template'
import { AvaliationPsi } from './pages/psi'
import { AppTeste } from './pages/appTeste'
import { Save } from './pages/save'
import { Login } from './pages/login'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Template />}>
          <Route path="app" element={<App />}/>
          <Route path="psi" element={<AvaliationPsi />}/>
          <Route path="appteste" element={<AppTeste />}/>
          <Route path="save" element={<Save />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
