import HelloSection from './ui/HelloSection'
import WorkSection from './ui/WorkSection'
import * as S from './styles'

export default function HomePage() {
    return (
        <S.HomePage className='page home-page'>
            <HelloSection />
            <WorkSection />
            <WorkSection />
        </S.HomePage>
    )
}
