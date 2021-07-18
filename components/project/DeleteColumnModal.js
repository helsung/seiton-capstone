import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { deleteColumn } from '../../store/projectSlice'
import Transition from './SideBarTransition'

// Reusable modal, copy to new component and modify to your needs
// working example on how to use it, look at Task model, only 4 lines of code
function DeleteColumnModal({ isShowing, onClose, colId, delCol }) {
  const dispatch = useDispatch()
  //delete task handler
  const submitHandle = async event => {
    // col id is passed
    const cIdx = +event.target.value
    console.log('handle delete col id', cIdx)
    await dispatch(deleteColumn(cIdx))
    onClose()
    delCol(true) // DELCOL TRUE ==>> pusher does NOT WORK!
  }

  return isShowing
    ? ReactDOM.createPortal(
        <div className="justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <Transition
            appear={true}
            show={isShowing}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-75"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-75"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-0" />
          </Transition>
          <div className="relative w-100 h-40 my-6 mx-auto ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <button
                type="button"
                className=" flex justify-end mr-3 focus:outline-none"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span
                  className=" flex justify-end outline-none  border-solid"
                  aria-hidden="true"
                >
                  &times;
                </span>
              </button>
              <div className="flex-col items-start p-5 border-b border-solid rounded-t">
                <h6 className="text-md font-semibold text-center">
                  Are you sure you want to delete the column?
                </h6>
                <div className="flex items-center justify-center p-6 border-t border-solid  rounded-b">
                  <button
                    className="mr-2 border px-2 rounded text-black-800 hover:text-red-500 border-red-500 focus:outline-none"
                    type="button"
                    value={colId}
                    onClick={submitHandle}
                  >
                    Delete
                  </button>
                  <button
                    className="mr-2 border px-2 rounded text-black-800 hover:text-green-500 border-black-500 focus:outline-none"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('columnDeleteModal')
      )
    : null
}

export default DeleteColumnModal
