import * as C from './styled'
import Erase from '../../icons/Erase.svg'
import Export from '../../icons/export.svg'
import Edit from '../../icons/edit.svg'

export const ModalOptionsCards = () => {
    return(
        <C.ModalOptions>
            <C.DivAlignItems><C.FileImage src={Edit} alt='edit' /><C.Descri style={{color:'#2F80ED'}} >Editar</C.Descri></C.DivAlignItems>
            <C.DivAlignItems><C.FileImage src={Erase} alt='erase'/><C.Descri style={{color: '#EB5757'}} >Excluir</C.Descri></C.DivAlignItems>
            <C.DivAlignItems><C.FileImage src={Export} alt='export' /><C.Descri style={{color: '#00995D'}} >Exportar</C.Descri></C.DivAlignItems>
        </C.ModalOptions>
    )
}