import React, { useState } from 'react'
import Modals from './Modals';

const Cards = ({image, title, description, tags}) =>{

    const [showModal, setShowModal] = useState(false);

    const maxLength = 30;
    const restrictDescription = description.length > maxLength
    ? description.slice(0, maxLength) + '...' 
    : description;

  return (
    <div
        className='max-w-sm rounded overflow-hidden shadow-lg cursor-pointer bg-slate-100 shadow-slate-100/50 hover:opacity-80'
        onClick={() => setShowModal(true)}
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

        <Modals open={showModal} onClose={() => setShowModal(false)}>
            <img src={image} alt={title} />
            <h2 className='text-xl font-bold mb-2'>{title}</h2>
        </Modals>

    </div>
  )
}

export default Cards
