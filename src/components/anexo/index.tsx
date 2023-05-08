import * as C from '../anexo/style'
import ImportantDocument from '../../icons/documentsImportant.svg'

export const ItemThree = () => {
    return(
        <C.CardRightThree>
            <C.BarIcon/>
            <C.IconDiv>
                <img width='20px' src={ImportantDocument}></img>
            </C.IconDiv>
            <C.DivTitle>
                <C.FormatTitle>Documentos importantes</C.FormatTitle>
                <C.FormatDate>15 de setembro de 2022</C.FormatDate>
                <C.FormatText>Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente Ana Ester Resende. Documentos para serem consultados posteriormente, caso necessário.</C.FormatText>
            </C.DivTitle>
        </C.CardRightThree>
    )
}