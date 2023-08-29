import React from 'react';

const Modals = ( {open, children, onClose} ) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg p-8 h-[30vh] w-[30vw] max-h-[30vh] max-w-[30vw] overflow-auto relative">

        {children}

          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mx-40 rounded absolute bottom-2 left-0 right-0"
          >
            Close
          </button>

      </div>
    </div>
  );
};

export default Modals;