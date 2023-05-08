import { httpClient } from '../http-client'

type Request = {
  type: string
  timelineId: string
  title: string
  content: string
}

export const sessionPost = async ({ type, timelineId, title, content }: Request): Promise<Response> => {
  const response = await httpClient.request({
    url: '/ocurrence',
    method: 'post',
    data: {
      type,
      timelineId,
      title,
      content
    }
  })
  return response.data
}