import './MyModal.css'

function MyModal ({children, show, close}) {
    
    // const rootClass = ['overlay']
    // if (show) {
    //    rootClass.push('overlay_active')
    // }


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