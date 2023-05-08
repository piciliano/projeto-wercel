import * as C from './style'
import FileIcon from '../../icons/pdf.svg'

interface Anexo {
  textFile: string
  id: number
}

export const AnexosDoc: React.FC = () => {
  const AnexosDoc: Anexo[] = [
    {
      textFile: 'nomedoarquivo.pdf (430 KB)',
      id: 1
    },
    {
      textFile: 'nomedoarquivo.pdf (430 KB)',
      id: 1
    },
  ];

  return (
    <C.Docs>
      <C.Descri>{AnexosDoc.length} Anexos</C.Descri>
      {AnexosDoc.map((item: Anexo, index) => (
        <C.ContainerFiles key={index}>
          <img src={FileIcon} alt="archive" />
          <C.FileName>{item.textFile}</C.FileName>
        </C.ContainerFiles>
      ))}
    </C.Docs>
  )
}
