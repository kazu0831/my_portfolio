import React from 'react'

const Cards = ({image, title, description, tags, onCardClick}) =>{

    const maxLength = 12;
    const restrictDescription =description.length > maxLength
    ? description.slice(0, maxLength) + '...' 
    : description;

  return (
    <div
        className='h-[58vh] w-[20vw] max-h-[58vh] max-w-[20vw] rounded overflow-hidden shadow-lg cursor-pointer bg-slate-100 shadow-slate-100/50 hover:opacity-80'
        onClick={onCardClick}
    >

        <img src={image} alt={title} className='w-full aspect-square object-cover' />

        <h2 className='font-bold text-lg px-4'>{title}</h2>

        <p className='px-4 py-2'>
            {restrictDescription}
        </p>

        <div className='flex justify-end px-2 py-2'>
            {tags.map((tag,index)=>(
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                </span>
            ))}
        </div>

    </div>
  )
}

export default Cards
