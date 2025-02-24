import './MyModal.css'
import { useState } from 'react';

function MyModal ({children, show, close}) {
  



    return ( 
        <>
          <div onClick={close} className={show ? 'overlay overlay_active' : 'overlay'}>
            <div onClick={(e) => e.stopPropagation()} className="modal-window">
                {children}
            </div>
          </div> 
        </>
     );
}

export default MyModal;