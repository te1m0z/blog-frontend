import * as S from './styles'

type TTabsItem = {
    label: string
    value: string
}

interface IProps {
    items: TTabsItem[]
}

export function Tabs({ items }: IProps) {
  return (
    <S.TabsStyled>
        {items.map((item) => <S.TabsItem key={item.value}>{item.label}</S.TabsItem>)}
    </S.TabsStyled>
  )
}
