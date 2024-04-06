import { useContext, useEffect, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { redirect } from "react-router-dom"
import { InputText, Button } from '@/shared'
import { UserContext } from '@/app/contexts/user'
import * as S from './styles'

export function Component() {
  const userStore = useContext(UserContext)

  const [csrf, setCsrf] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const { register, handleSubmit, formState, watch, setError } = useForm();

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await userStore.fetchCsrfToken()
      if (token) {
        setCsrf(token)
      }
    }

    fetchCsrfToken()
  }, [userStore])

  async function onSubmitHandler({ login, password }: FieldValues) {
    const response = await userStore.login({ login, password, csrf })

    if (response) {
      return redirect('/admin')
    }

    setError('login', { type: 'wrong_data' })
    setError('password', { type: 'wrong_data' })

    setFormMessage('wrong pass or login')
  }

  const loginField = register('login', { required: 'required!!' })
  const loginValue = watch('login', '')

  const passwordField = register('password', { required: 'required!!' })
  const passwordValue = watch('password', '')

  useEffect(() => {
    setFormMessage('')
  }, [loginValue, passwordValue])

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Title>Login</S.Title>

      <InputText
        name={loginField.name}
        value={loginValue}
        onChange={loginField.onChange}
        onBlur={loginField.onBlur}
        inputRef={loginField.ref}
        error={!!formState.errors.login}
        errorText={formState.errors.login?.message as string}
      />
      
      <InputText
        name={passwordField.name}
        value={passwordValue}
        onChange={passwordField.onChange}
        onBlur={passwordField.onBlur}
        inputRef={passwordField.ref}
        error={!!formState.errors.password}
        errorText={formState.errors.password?.message as string}
      />

      <Button type='submit'>
        Submit
      </Button>

      <div className="">{formMessage}</div>
    </S.Form>
  )
}

Component.displayName = 'LoginForm'
