import { MyButton } from "../../UI/Button/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import './FormAdd.css'
import { useState, useContext} from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTasksDispatch } from "../../Context/TasksContext";



function FormAdd({ close }) {

  const {theme, toggleTheme} = useContext(ThemeContext)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  const dispatch = useTasksDispatch()

  function addPost(){
    if (title === '' || subtitle === ''){
      return 
    }
    dispatch({
      type: 'create',
      id: Math.random(),
      title,
      subtitle
    }) 
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
