import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/app/index'
import { Template } from "./components/Template";
import { AvaliationPsi } from "./pages/psi";
import { AppTeste } from "./pages/appTeste";
import { Save } from "./pages/save";

export function RoutesApp () {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Template/>}>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="psi" element={<AvaliationPsi/>}></Route>
                    <Route path="appteste" element={<AppTeste/>}></Route>
                    <Route path="save" element={<Save/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}