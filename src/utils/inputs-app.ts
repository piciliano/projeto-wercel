import Lixeira from '../icons/lixeira.svg'

type InputsIntroTips = {
  title: string
  icon: string
  inputs: {
    descri: string
    model: string
  }[]
  labelText?: string
  placeHolder?: string
  isChecked: boolean
  inputsExpandsOne?: {
    descri?: string
    model?: string
  }[]
  inputsExpandsTwo?: {
    descri?: string
    model?: string
  }[]
}

const InputsIntro: InputsIntroTips[] = [
  {
    title: 'Atenção concentrada/Seletiva',
    icon: Lixeira,
    inputs: [
      { descri: 'Nome', model: 'text' },
      { descri: 'Número de pontos', model: 'text' },
      { descri: 'Percentil', model: 'text' },
      { descri: 'Resultado', model: 'text' }
    ],
    labelText: 'Obs',
    placeHolder: 'Descrição da observação',
    isChecked: false
  },
  {
    title: 'Memória',
    icon: Lixeira,
    inputs: [
      { descri: 'Nome', model: 'text' },
      { descri: 'Número de pontos', model: 'text' },
      { descri: 'Percentil', model: 'text' },
      { descri: 'Resultado', model: 'text' }
    ],
    labelText: 'Obs',
    placeHolder: 'Descrição da observação',
    isChecked: false
  },
  {
    title: 'Inteligência',
    icon: Lixeira,
    inputs: [
      { descri: 'Nome', model: 'text' },
      { descri: 'Número de pontos', model: 'text' },
      { descri: 'Percentil', model: 'text' },
      { descri: 'Resultado', model: 'text' }
    ],
    labelText: 'Obs',
    placeHolder: 'Descrição da observação',
    isChecked: false
  },
  {
    title: 'Personalidade',
    icon: Lixeira,
    inputs: [
      { descri: 'Nome', model: 'text' },
      { descri: 'Controle Geral', model: 'text' },
      { descri: 'Atividade', model: 'text' },
      { descri: 'Agressividade', model: 'text' }
    ],
    isChecked: false,
    inputsExpandsOne: [
      { descri: 'Maturidade e emotividade', model: 'text' },
      { descri: 'Organização de personalidade', model: 'text' },
      { descri: 'Energia vital produtividade', model: 'text' }
    ],
    inputsExpandsTwo: [
      { descri: 'Relacionamento interpessoal', model: 'text' },
      { descri: 'Impulsividade', model: 'text' },
      { descri: 'Energia vital produtividade', model: 'text' }
    ]
  }
]

export default InputsIntro
