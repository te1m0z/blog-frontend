import BlogCard from '@/entites/Blog/ui/BlogCard'

import * as S from './styles'

export function Component() {
    const data = {
        title: 'Hello world',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        preview: ''
    }

    return (
        <S.Parent>
            <BlogCard {...data} />
            <BlogCard {...data} />
            <BlogCard {...data} />
        </S.Parent>
    )
}

Component.displayName = 'BlogPage'
