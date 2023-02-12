import React, {useEffect} from 'react'
import './Modal.css'

const Modal = ({handleCloseModal, handleSubmit,action, children}) => {
  const closeModal = (e) => {
    const modalContainer = document.getElementsByClassName('modal_container')[0];
    if(e.target !== modalContainer){
      return;   
    }
    handleCloseModal()
  }

  useEffect(() => {
    const modalContainer = document.getElementsByClassName('modal_container')[0];
    modalContainer?.addEventListener('click', closeModal)
    
    return () => modalContainer?.removeEventListener('click', closeModal)
  }, []);
  
  return (
    <div className="modal_container">
      <div className=" form_of_modal">
      <div className="header_newjob">
        <div className="title">
          {`${action === 'CREATE' ? 'Add new' : action === 'UPDATE' ? "Update job" : "Delete job"}`}
        </div>
        <div className="button">
          <button
            type="button"
            className="x_button"
            onClick={() => handleCloseModal() }
          >
            x
          </button>
        </div>
      </div >
      { children }
      <div className="footer_newjob">
        <button className="btn_cancel" onClick={() => handleCloseModal()}>
          Cancel
        </button>
          <button className="btn_complete" onClick={() =>
            handleSubmit(action)
          }>
          Complete
        </button>
      </div>
      </div>
    </div>
  )
}

export default Modal
