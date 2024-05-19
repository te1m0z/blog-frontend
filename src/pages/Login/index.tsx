import { useContext, useEffect, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { Navigate, redirect } from "react-router-dom"
import { InputText } from '@/shared'
import { UserContext } from '@/app/contexts/user'
import * as S from './styles'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

function LoginPage() {
  const { t } = useTranslation()
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
      throw redirect('/admin')
    }

    setError('login', { type: 'wrong_data' })
    setError('password', { type: 'wrong_data' })

    setFormMessage(t('messages.wrong_login_or_password'))
  }

  const loginField = register('login', { required: 'required!!', minLength: { value: 5, message: 'dadwa' } })
  const loginValue = watch('login', '')

  const passwordField = register('password', { required: 'required!!' })
  const passwordValue = watch('password', '')

  useEffect(() => {
    setFormMessage('')
  }, [loginValue, passwordValue])

  if (userStore.isAuth) {
    return <Navigate to={'/admin'} replace={true} />
  }

  return (
    <S.LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
      <S.LoginFormTitle>{t('not_found.get_lost')}</S.LoginFormTitle>

      <InputText
        label={t('auth.login')}
        name={loginField.name}
        value={loginValue}
        onChange={loginField.onChange}
        onBlur={loginField.onBlur}
        inputRef={loginField.ref}
        error={!!formState.errors.login}
        errorText={formState.errors.login?.message as string}
      />
      
      <InputText
        label={t('auth.password')}
        name={passwordField.name}
        value={passwordValue}
        onChange={passwordField.onChange}
        onBlur={passwordField.onBlur}
        inputRef={passwordField.ref}
        error={!!formState.errors.password}
        errorText={formState.errors.password?.message as string}
      />

      <S.LoginFormSubmitBtn type='submit'>
        Submit
      </S.LoginFormSubmitBtn>

      <S.LoginFormErrorBlock>
        {formMessage}
      </S.LoginFormErrorBlock>
    </S.LoginForm>
  )
}

const Component = observer(LoginPage)

Component.displayName = 'LoginPage'

export { Component }
