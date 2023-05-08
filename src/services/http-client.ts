import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://wexer-example-backend.vercel.app/api',
  headers: {
    'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
    Authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGU3NWM0NWQ3MzNhMGVlYTZjNWQxZiIsIm5hbWUiOiJOZXRvIiwiZW1haWwiOiJuZXRvYXBpQGdtYWlsLmNvbSIsImlhdCI6MTY4MzUxMTg1MCwiZXhwIjoxNjgzNTk4MjUwfQ.6K5iEboKntAmGwKI3lFZSucbBw3LWx6MHpbdGsWHXWM'
  }
})
