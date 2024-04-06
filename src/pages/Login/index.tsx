import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputText, Button } from '@/shared'
import { UserContext } from '@/app/contexts/user'
import * as S from './styles'

export function Component() {
  const userStore = useContext(UserContext)

  const [csrf, setCsrf] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const { register, handleSubmit, formState, watch } = useForm();

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await userStore.fetchCsrfToken()
      if (token) {
        setCsrf(token)
      }
    }

    fetchCsrfToken()
  }, [userStore])

  async function onSubmitHandler(data) {
    console.log(data)

    // if (!login || !password) {
    //   return
    // } 
    // userStore.login({ login, password, csrf })
  }

  const loginField = register('login', { required: true, min: 3 })

  const loginValue = watch('login', '')

  console.log(formState)

  return (
    <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Title>Login</S.Title>
      <InputText
        name={loginField.name}
        value={loginValue}
        onChange={loginField.onChange}
        onBlur={loginField.onBlur}
        inputRef={loginField.ref}
        error={'dada'}
      />
      {/* <InputText
        field={register('password', { required: true })}
      /> */}
      <Button type='submit'>
        Submit
      </Button>
    </S.Form>
  )
}

Component.displayName = 'LoginForm'
