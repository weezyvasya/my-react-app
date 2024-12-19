import './MyButton.css'

function MyButton({children}) {
    return ( 
        <button className="my-button">{children}</button>
     );
}

export default MyButton;