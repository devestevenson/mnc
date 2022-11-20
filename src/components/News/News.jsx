import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './News.css'

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios.get("http://localhost:8000/news");
    setNews(response.data)
  }

  useEffect(() => {
    getNews()
  }, [])

  

  return (
    <div className='news-content'>
      {
        news.map(newsPublic => (
          <div key={news.id} className='news'>

            <figure className='imageURL'>
              <img src={newsPublic.image} alt=""/>
            </figure>

            <h1>{newsPublic.title}</h1>
            <h5>{newsPublic.author}</h5>
            <i>{newsPublic.date}</i>
            <p>{newsPublic.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default News
