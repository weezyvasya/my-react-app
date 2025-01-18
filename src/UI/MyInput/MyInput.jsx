import './MyInput.css'

function MyInput({...props}) {
    return ( 
        <input {...props} className="input-style" type="text" />
     );
}

export default MyInput;