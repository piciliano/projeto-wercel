import * as C from './style'
import Lapis from '..//icons/LapisD.svg'
import Eye from '../icons/eyePsi.svg'
import Laudo from '../icons/laudo.svg'
import Atestado from '../icons/atestado.svg'
import Relatorio from '../icons/relatorio.svg'
import Declaracao from '../icons/declaracao.svg'

interface detailsType {
  title: string
  status: string
  iconL: string
  iconE: string
}
interface buttons {
  icon: string
}

const buttonsIcon = [
  {
    icon: Laudo,
    name: 'laudo',
  },
  {
    icon: Atestado,
    name: 'atestado'
  },
  {
    icon: Relatorio,
    name: 'relatorio'
  },
  {
    icon: Declaracao,
    name: 'declaraçao'
  }
]

const details: detailsType[] = [
  {
    title: 'Entrevista Pisicológica',
    status: 'Realizado',
    iconL: Lapis,
    iconE: Eye
  },
  {
    title: 'Aplicação de teste',
    status: 'Realizado',
    iconL: Lapis,
    iconE: Eye
  },
  {
    title: 'Observação Comportamental',
    status: 'Realizado',
    iconL: Lapis,
    iconE: Eye
  }
]

export const PsiCard = () => {
  return (
    <>
      {details.map((item, index) => (
        <C.ContainerOptions key={index} setBorder={item.title}>
          <C.TitleOptions>{item.title}</C.TitleOptions>
          <C.ContainerIcons>
            <C.Status>{item.status}</C.Status>
            <img src={item.iconL} />
            <img src={item.iconE} />
          </C.ContainerIcons>
        </C.ContainerOptions>
      ))}
      <C.Emitir>Emitir</C.Emitir>
      <C.DivButtons>
        {buttonsIcon.map((item, index) => (
          <C.ImgFormat key={`${index}-${item.name}`} src={item.icon} alt="buttons" />
        ))}
      </C.DivButtons>
    </>
  )
}
