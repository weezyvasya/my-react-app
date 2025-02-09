import PostList from "./Components/PostList/PostList";
import { ThemeContext } from "./Context/ThemeContext";
import { useState, useMemo, useEffect } from "react";
import { MyButton } from "./UI/Button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import FormAdd from "./Components/FormAdd/FormAdd";
import PostFilter from "./Components/PostFilter/PostFilter";
import "./App.css";

function App() {

  const [post, setPost] = useState(JSON.parse(localStorage.getItem("posts")) || []);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ search: '', query: '' });

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(post));

    return () => {
      localStorage.clear();
    };
  }, [post]);

  const toggleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark') 
  }

  function deletePost(id) {
    setPost(post.filter((p) => p.id !== id));
  }

  function create(newPost) {
    setPost([...post, newPost]);
  }

  function closeModalWindow() {
    setModal(false);
  }

  const sortedSearh = useMemo(() => {
    if (filter.query) {
      return [...post].sort((a, b) =>
        a[filter.query].localeCompare(b[filter.query])
      );
    }
    return post;
  }, [filter.query, post]);

  const seartedSearchQuery = useMemo(() => {
    return sortedSearh.filter((post) =>
      post.title.toLocaleUpperCase().includes(filter.search.toLocaleUpperCase())
    );
  }, [filter.search, sortedSearh]);

  return (
    <div className='app'>
      <div className="container">
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
          <MyButton onClick={() => toggleTheme()}>Сменить тему</MyButton>
          <MyModal show={modal} close={closeModalWindow}>
            <FormAdd create={create} close={closeModalWindow}/>
          </MyModal>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList data={seartedSearchQuery} remove={deletePost} />
        </ThemeContext.Provider>  
      </div>
    </div>
  );
}

export default App;
//Попроваить стили в постлисте, что бы после добавления все было норм DONE, disable кнопки при пустом инпуте в форме добпавления DONE.Создать новый компонент ПостФильтр, внутри него будет инпут и селект. Создать кастомный селект.
//почитать про контекст и про реализацию двойной темы(выделить переменные для темы, цвет фона и шрифта)
//Сделать новую кнопку для темы и стили. Ко всем компонентам дописать классы по темам