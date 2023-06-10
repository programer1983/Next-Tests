import React from 'react'

const Modal = ({children, visible, setVisible}) => {

    const rootStyle = ["root-style"]

    if (visible){
        rootStyle.push("active-style")
    }


  return (
    <div className={rootStyle.join(" ")} onClick={() => setVisible(false)}>
       <div className='modal-content' onClick={(e) => e.stopPropagation()}>
           {children}
       </div>
    </div>
  )
}

export default Modal