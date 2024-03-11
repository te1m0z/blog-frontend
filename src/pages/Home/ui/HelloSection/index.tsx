import * as S from './styles'

export default function HelloSection() {

  return (
    <S.HelloSection>
      <S.Background />
      <S.Left>
        <S.Title>
          <span className='iam'>Hi, my name is Dmitry I am a Web &nbsp;<span className='dev'>Developer</span></span>
        </S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </S.Description>
        <S.ViewPortfolioButton>
          View Portfolio
        </S.ViewPortfolioButton>
      </S.Left>
      <S.Right></S.Right>
    </S.HelloSection>
  )
}
