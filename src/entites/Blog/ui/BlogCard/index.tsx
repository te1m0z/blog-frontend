import Button from '@/shared/ui/Button'
import * as S from './styles'

interface IProps {
    title: string
    content: string
    preview?: string
}

export default function BlogCard({ title, content }: IProps) {
    return (
        <S.BlogCard>
            <S.Title>{title}</S.Title>
            {/* <S.Description>{content}</S.Description> */}
            <Button>Show</Button>
        </S.BlogCard>
    )
}
