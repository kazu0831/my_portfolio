import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cards from './Cards';
import ReactPaginate from 'react-paginate';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const n = useNavigate();

  const handleCardClick = (id) =>{
    n(`/blog/${id}`)
  }

  const perPage = 4;

  const pageCount = Math.ceil(articles.length / perPage);
  const [current, setCurrent] =useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrent(selected);
  }

  const display = articles.slice(
    current * perPage,
    (current + 1) * perPage
  );

  //後でenvファイル作成
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
        setArticles(response.data)
      } catch(error){
        console.error('Error',error)
      }
    };
    fetchArticle();
  },[]);

  return (
    <div>

      <div className='flex justify-center py-6 pb-12'>
        <h2 className='text-4xl text-white font-bold'>My Blogs</h2>
      </div>

      <div className='screen-minus-60 grid place-items-center'>
        <div className='flex gap-8'>
          {display.map((article)=>(
            <Cards 
              key={article.id} 
              image={article.user.profile_image_url}
              title={article.title}
              date={article.created_at}
              tags={article.tags}
              onCardClick={() => handleCardClick(article.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 pb-4 pt-8">
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'flex'}
          pageLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
          previousLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
          nextLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
          activeLinkClassName={'text-pink-600'}
          disabledLinkClassName={'opacity-50 cursor-not-allowed'}
        />
     </div>
    </div>
  )
}

export default Blog

