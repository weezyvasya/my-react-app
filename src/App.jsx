import PostList from "./Components/PostList/PostList";
import { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import "./App.css";
import FormAdd from "./Components/FormAdd/FormAdd";

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "Природа", subtitle: "Великолепная" },
    { id: 2, title: "Погода", subtitle: "Хорошая" },
    { id: 3, title: "Яблоко", subtitle: "Красное и сладкое" },
  ]);
  const [modal, setModal] = useState(false);

  function deletePost(id) {
    setPost(post.filter((p) => p.id !== id));
  }

  function create (newPost) {
      setPost([...post, newPost])
  }

  function closeModalWindow (){
    setModal(false)
  }

  return (
    <>
      <div className="app">
        <div className="container">
          <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
          <MyModal show={modal} close={closeModalWindow}>
            <FormAdd create={create} close={closeModalWindow}/>
          </MyModal>
          <div>Post filter</div>
          <PostList data={post} remove={deletePost} />
        </div>
      </div>
    </>
  );
}

export default App;
//Попроваить стили в постлисте, что бы после добавления все было норм DONE, disable кнопки при пустом инпуте в форме добпавления.Создать новый компонент ПостФильтр, внутри него будет инпут и селект. Создать кастомный селект. 