import HelloSection from './ui/HelloSection'
import WorkSection from './ui/WorkSection'
import * as S from './styles'
import { login, userSlice }  from '@/app/store/user'
// import { useSelector } from 'react-redux'
import { store } from '@/app/store/index'

export default function HomePage() {

    // const userSelector = useSelector('user')

    store.dispatch(userSlice.actions.login({ login: 'da', password: 'da', csrf: 'c880d810-244b-43d8-8511-18f159e56892' }))
    
    // login({ login: 'da', password: 'da', csrf: '123' })

    return (
        <S.HomePage className='page home-page'>
            <HelloSection />
            <WorkSection />
            <WorkSection />
        </S.HomePage>
    )
}
