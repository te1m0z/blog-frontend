import { useState } from 'react'
import { type ChangeEvent, type FormEvent } from 'react'
import { InputText, Button } from '@/shared'
import * as S from './styles'
// import { useUserStore } from '@/app/store/user'

export function Component() {
//   const userStore = useUserStore()
//   const [csrf, setCsrf] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

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

    // const response = await userStore.login({
    //   csrf,
    //   login,
    //   password
    // })
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
      {/* <InputCsrf onChange={(token) => setCsrf(token)} /> */}
      <Button type='submit'>
        Submit
      </Button>
    </S.Form>
  )
}

Component.displayName = 'LoginForm'
