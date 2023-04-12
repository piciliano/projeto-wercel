import  EditorText  from '@/components/TextEditor'
import * as C from './style'
import ModalSave from '@/components/modalSave'

export const Save = () => {
    return(
        <C.Container>
      <C.ContPsi>
        <C.PageTitle>
          <C.Entrevista>Observação Comportamental</C.Entrevista>
          <C.DivButtons>
            <C.Next> 
                Salvar
            </C.Next>
          </C.DivButtons>
        </C.PageTitle>
        <C.divBlock >
                <C.DivBase>
                  <C.Description>
                    Síntese das observações comportamentais
                  </C.Description>
                  <EditorText/>
                </C.DivBase>
               <C.DivBaseTwo>
                <C.Next>
                  <ModalSave></ModalSave>
                </C.Next>
               </C.DivBaseTwo>    
        </C.divBlock>   
      </C.ContPsi>
    </C.Container>
    )
}