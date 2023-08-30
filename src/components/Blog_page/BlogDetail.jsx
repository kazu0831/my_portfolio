import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const url = 'https://qiita.com/api/v2/authenticated_user/items'
  const token = '7677851b2554ab0835610c87c597508add7389ad'

  useEffect(() =>{

    const fetchArticle = async() =>{
      try{
        const response = await axios.get(url,{
          headers: {
            'Authorization' : `Bearer ${token}`
          }
        });
        setArticle(response.data)
      } catch(error){
        console.error('Error',error)
      }
    };
    fetchArticle();
  },[id]);


  return (
    <div>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <div>{article.body}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default BlogDetail
