import { httpClient } from './http-client'

type Request = {
  email: string
  password: string
}

type Response = {
  token: string
}

export const loginService = async ({ email, password }: Request): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/user/login',
    method: 'post',
    data: {
      email,
      password
    }
  })
  return response.data
}
