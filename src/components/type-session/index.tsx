import { httpClient } from '@/services/http-client'
import * as C from './styled'
import Session from '../../icons/sessionOne.svg'
// import FateRelevante from '../../icons/fateRelavante.svg'
// import DocumentosI from '../../icons/documentsImportant.svg'
// import Avaliacao from '../../icons/avaliacaoPsi.svg'
// import { AnexosDoc } from '../AnexosDoc'
// import { PsiCard } from '@/avaliationCard'
import React, { useEffect, useState } from 'react'
import Pontos from '../../icons/pontos.svg'

export const TypeSession = () => {
  const [timeLine, setTimeLine] = useState<[]>([])

  const getOccurrences = async () => {
    const response = await httpClient.get('/timeline/6456ff5de5a096be46a88f30')
    const result = response.data.timeline.occurrences.map((item: any) => {
      return {
        title: item.title,
        date: new Intl.DateTimeFormat('pt-br', { year: 'numeric', month: 'long', day: 'numeric' }).format(
          new Date(item.createdOn)
        ),
        text: item.content,
        id: item._id,
        type: item.type
      }
    })
    setTimeLine(result)
  }
  useEffect(() => {
    getOccurrences()
  }, [])

  return (
    <>
      {timeLine.map((item: any, index) => (
        <React.Fragment key={index}>
          {item.type === 'session' && (
            <C.CardRightOne >
              <C.IconDiv>
                {index != 1 && <C.BarEfect />}
                <img src={Session} />
              </C.IconDiv>
              <C.DivTitle>
                <C.PontosImg src={Pontos} alt="pontos" />
                <C.FormatTitle>{item.title}</C.FormatTitle>
                <C.FormatDate>{item.date}</C.FormatDate>
                <C.FormatText>{item.text}</C.FormatText>
              </C.DivTitle>
            </C.CardRightOne>
          )}
        </React.Fragment>
      ))}
    </>
  )
}
