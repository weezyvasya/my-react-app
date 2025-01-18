import './MyButton.css'

function MyButton({children,  ...props}) {
    return ( 
        <button {...props} className="my-button">{children}</button>
     );
}

export default MyButton;

