import React from 'react';

const Modals = ({open, children, onClose }) => {

  if(!open) return null;

  return (
    <div>
      {children}

      <button 
        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
        onClick={onClose}
      >
        close
      </button>
    </div>
  );
};

export default Modals;