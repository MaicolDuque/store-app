
const LoginService = async (email, password) => {
  const res = await fetch('http://localhost:4000/auth/local', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  return res;
}

export {
  LoginService
}