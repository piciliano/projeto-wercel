import { httpClient } from '@/services/http-client'
import * as C from './styled'
import FateRelevante from '../../icons/fateRelavante.svg'
import React, { useEffect, useState } from 'react'
import Pontos from '../../icons/pontos.svg'

export const TypeRelevantFact = () => {
  const [timeLine, setTimeLine] = useState<[]>([])
  console.log(timeLine)

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
          {item.type === 'relevant_fact' && (
            <C.CardRightOne >
              <C.IconDiv>
               <C.BarEfect />
                <img src={FateRelevante} />
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
