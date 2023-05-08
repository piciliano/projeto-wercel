import { httpClient } from '../http-client'

type Response = {
  _id: string
  userId: string
  name: string
  birthdate: string
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
}

export const PacientService = async (): Promise<Response[]> => {
    
  const response = await httpClient.request<Response[]>({
    url: '/patient/6456651ed91f8664a7b350f6',
    method: 'get',
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGU3NWM0NWQ3MzNhMGVlYTZjNWQxZiIsIm5hbWUiOiJOZXRvIiwiZW1haWwiOiJuZXRvYXBpQGdtYWlsLmNvbSIsImlhdCI6MTY4MzUxMTg1MCwiZXhwIjoxNjgzNTk4MjUwfQ.6K5iEboKntAmGwKI3lFZSucbBw3LWx6MHpbdGsWHXWM'
    }
  })
  
  return response.data
}