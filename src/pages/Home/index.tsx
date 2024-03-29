import HelloSection from './ui/HelloSection'
import WorkSection from './ui/WorkSection'
import * as S from './styles'
import { login, userSlice }  from '@/app/store/user'
// import { useSelector } from 'react-redux'
import { store } from '@/app/store/___index'

export default function HomePage() {

    // const userSelector = useSelector('user')

    store.dispatch(userSlice.actions.login({ login: 'da', password: 'da', csrf: 'e5fc7015-56f1-4546-8e15-6517e4f07e02' }))
    
    // login({ login: 'da', password: 'da', csrf: '123' })

    return (
        <S.HomePage className='page home-page'>
            <HelloSection />
            <WorkSection />
            <WorkSection />
        </S.HomePage>
    )
}
