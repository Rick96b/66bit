import React from 'react'
import { News } from '../model/types'

interface NewsCardProps {
    news: News
}

const NewsCard:React.FC<NewsCardProps> = props => {
    const {
        news
    } = props

    return (
        <article>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
        </article>
    )
}

export default NewsCard