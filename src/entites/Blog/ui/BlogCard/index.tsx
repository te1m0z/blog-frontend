import Button from '@/shared/ui/Button'
import * as S from './styles'

interface IProps {
    title: string
    description: string
    preview: string
}

export default function BlogCard({ title, description, preview }: IProps) {
    return (
        <S.BlogCard>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button>Show</Button>
        </S.BlogCard>
    )
}
