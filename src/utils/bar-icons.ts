import Prancheta from '@/icons/Prancheta.svg'
import Pacientes from '@/icons/pacientes.svg'
import Somar from '@/icons/sum.svg'
import Configuracoes from '@/icons/Engrenagem.svg'

type barIconsProps = {
  text: string
  icons: string
  isBlockModels?: boolean
  isBlockModelsTwo?: boolean
  text2?: string
}

const barText: barIconsProps[] = [
  { text: 'Meus Pacientes', icons: Pacientes },
  { text: 'Modelos', icons: Prancheta, isBlockModels: false },
  { text: 'Cadastros', icons: Somar,isBlockModelsTwo:false },
  { text: 'Preferências', icons: Configuracoes},
  
]

export default barText
