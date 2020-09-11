import { apiFetch } from '../apiFetch';

const LoginService = async ({ email, password, cbSuccess, cbError }) => {
  apiFetch({
    URL: 'auth/local',
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    },
    cbSuccess: (data) => cbSuccess(data),
    cbError: (error) => cbError(error)
  })
}

export {
  LoginService
}