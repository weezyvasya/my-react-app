import {MyButton} from "../../UI/Button/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import './FormAdd.css'
import { useState, useContext} from "react";
import { ThemeContext } from "../../Context/ThemeContext";



function FormAdd({ create, close}) {

  const {theme, toggleTheme} = useContext(ThemeContext)

  console.log(theme)

  

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  function addPost(){
    if (title === '' || subtitle === ''){
      return 
    }
    const newPost = {
      id: Math.random(),
      title,
      subtitle
    }
    create(newPost)
    setTitle('')
    setSubtitle('')
    close()
  }

  
  return (
    <>
      <div className="form">
        <MyInput value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Название поста'/>
        <MyInput value={subtitle} onChange={(e)=> setSubtitle(e.target.value)}  placeholder='Описание поста'/>
        <MyButton disabled={title === '' || subtitle === ''} onClick={addPost} >Добавить пост</MyButton>
      </div>
    </>
  );
}

export default FormAdd;
