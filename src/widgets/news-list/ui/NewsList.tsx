import { NewsCard, useNewsApi } from 'entities/news'
import React, { useRef, useState } from 'react'
import { usePullToRefresh } from '../hooks/usePullToRefresh'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

interface NewsList {

}

const NewsList = () => {
    const {news, isLoading, error, reloadNews, addNewsByPage} = useNewsApi('https://frontappapi.dock7.66bit.ru/api/news/get')
    const newsListRef = useRef(null)
    usePullToRefresh(newsListRef, reloadNews)
    useInfiniteScroll(newsListRef, addNewsByPage)
    
    return (
        <section ref={newsListRef}>
            {news.map(newsData => 
                <NewsCard news={newsData} />    
            )}
        </section>
    )
}

export default NewsList