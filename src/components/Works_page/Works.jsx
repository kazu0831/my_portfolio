import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import MediaQuery from 'react-responsive'
import { FaLink } from 'react-icons/fa'
import { cards } from './data'
import Cards from './Cards'
import Modals from './Modals'

const Works = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) =>{
    setShowModal(true)
    setSelectedCard(card)
  };

  const handleModalClose = () =>{
    setShowModal(false)
  };

  const perPage = 4;

  const pageCount = Math.ceil(cards.length / perPage);
  const [current, setCurrent] =useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrent(selected);
  }

  const display = cards.slice(
    current * perPage,
    (current + 1) * perPage
  );

  return (
    <>
      <MediaQuery query='(min-width:769px)'>
        <div>
          <div className='flex justify-center py-6 pb-12'>
            <h2 className='text-4xl text-white font-bold'>My Works</h2>
          </div>

          <div className="screen-minus-60 grid place-items-center">

            <div className="flex gap-8">
              {display.map((card, index) => (
                <Cards key={index} image={card.image} title={card.title} description={card.description} tags={card.tags} onCardClick={() =>handleCardClick(card)}/>
              ))}
            </div>
          </div>

          <Modals 
            open={showModal} 
            onClose={handleModalClose}
            image={selectedCard?.image} 
            description={selectedCard?.description}
          >
            <p>{selectedCard?.description}</p>
            <a 
              href={selectedCard?.link} 
              target='_blank' 
              rel="noreferrer noopener" 
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1 py-4'
            >
              <FaLink className='text-xs' />
              <span>{selectedCard?.title}</span>
            </a>
          </Modals>

          <div>
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={'flex justify-center mt-10 pb-4 pt-8'}
                pageLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                previousLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                nextLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                activeLinkClassName={'text-pink-600'}
                disabledLinkClassName={'opacity-50 cursor-not-allowed'}
              />
          </div>
        </div>
      </MediaQuery>

      <MediaQuery query='(max-width:768px)'>
        <div className='bg-gradient-to-r from-blue-500 to-purple-500'>
          <div className='flex justify-center py-6 pb-12'>
            <h2 className='text-4xl text-white font-bold'>My Works</h2>
          </div>

          <div className="screen-minus-60 grid place-items-center">

            <div>
              {display.map((card, index) => (
                <Cards key={index} image={card.image} title={card.title} description={card.description} tags={card.tags} onCardClick={() =>handleCardClick(card)}/>
              ))}
            </div>
          </div>

          <Modals 
            open={showModal} 
            onClose={handleModalClose}
            image={selectedCard?.image} 
            description={selectedCard?.description}
          >
            <p>{selectedCard?.description}</p>
            <a 
              href={selectedCard?.link} 
              target='_blank' 
              rel="noreferrer noopener" 
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center gap-1 py-4'
            >
              <FaLink className='text-xs' />
              <span>{selectedCard?.title}</span>
            </a>
          </Modals>

          <div>
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={'flex justify-center mt-10 pb-4 pt-8'}
                pageLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                previousLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                nextLinkClassName={'mx-2 px-3 py-2 rounded-lg bg-slate-100 text-gray-700'}
                activeLinkClassName={'text-pink-600'}
                disabledLinkClassName={'opacity-50 cursor-not-allowed'}
              />
          </div>
        </div>
      </MediaQuery>
    </>
  )
}

export default Works
