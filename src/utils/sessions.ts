type InputSessionOne = {
      label: string
      type: string
      placeHolder: string
    }

type InputSessionTwo = {
        label: string
        type: string
        placeHolder: string
      }

  
  export const InputsSessionOne : InputSessionOne [] = [
        { label: 'Data*', type: 'text', placeHolder: '24/01/2023' },
        { label: 'Hora de início*', type: 'text', placeHolder: '12:00' },
        { label: 'Hora fim*', type: 'text',  placeHolder: '13:00'}
      ]


   export const InputsSessionTwo : InputSessionTwo [] = [
        { label:'Título*', type:'Resumo da sessão', placeHolder: 'Digite'},
        { label:'Resumo da sessão', type:'Resumo da sessão', placeHolder: 'Text'},
    ]
    

