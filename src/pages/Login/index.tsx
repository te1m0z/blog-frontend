import { useContext, useEffect, useState } from 'react'
import { type ChangeEvent, type FormEvent } from 'react'
import { InputText, Button } from '@/shared'
import { UserContext } from '@/app/contexts/user'
import * as S from './styles'

export function Component() {
  const userStore = useContext(UserContext)

  const [csrf, setCsrf] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await userStore.fetchCsrfToken()
      if (token) {
        setCsrf(token)
      }
    }

    fetchCsrfToken()
  }, [userStore])

  function onLoginInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value)
  }

  function onPasswordInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  async function onSubmitHandler(event: FormEvent) {
    event.preventDefault()

    if (!login || !password) {
      return
    }

    userStore.login({ login, password, csrf })
  }

  return (
    <S.Form onSubmit={onSubmitHandler}>
      <S.Title>Login</S.Title>
      <InputText
        value={login}
        label={'Login'}
        onInput={onLoginInputHandler}
      />
      <InputText
        value={password}
        label={'Password'}
        onInput={onPasswordInputHandler}
      />
      <Button type='submit'>
        Submit
      </Button>
    </S.Form>
  )
}

// export const Component = LoginPage

Component.displayName = 'LoginForm'
