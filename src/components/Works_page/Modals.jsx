import React from 'react';
import MediQuery from 'react-responsive'

const Modals = ( {open, children, onClose} ) => {

  if (!open) return null;

  return (
    <>
      <MediQuery query='(min-width:769px)'>
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
      </MediQuery>

      <MediQuery query='(max-width:768px)'>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col bg-white rounded-lg py-10 px-8 h-[26vh] w-[70vw] max-h-[26vh] max-w-[70vw] overflow-auto">

            {children}

              <button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded py-1"
              >
                Close
              </button>

          </div>
         </div>
      </MediQuery>
    </>
  );
};

export default Modals;