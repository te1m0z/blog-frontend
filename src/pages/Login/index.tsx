import { useEffect, useState } from 'react'
import { type ChangeEvent, type FormEvent } from 'react'
import { InputText, Button } from '@/shared'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '@/app/store/user'
// import { useUserStore } from '@/app/store/user'

export function Component() {
//   const userStore = useUserStore()
//   const [csrf, setCsrf] = useState('')
  const dispatch = useDispatch()

  const errorText = useSelector((state) => state.user.errorText)

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

    dispatch(signin({ login, password, csrf: '170c1f42-f448-43d6-adf4-76a8d7c21c60' }))
  }

  // "wrong pass"
  // if (errorText.length > 0) {

  // }

  return (
    <S.Form onSubmit={onSubmitHandler}>
      {errorText.length > 0 ? 'wrong' : null}
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
