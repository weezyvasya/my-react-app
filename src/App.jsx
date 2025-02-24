import PostList from "./Components/PostList/PostList";
import { ThemeContext } from "./Context/ThemeContext";
// import { ModalContext } from "./Context/ModalContex";
import { useState, useMemo, useEffect } from "react";
import { MyButton } from "./UI/Button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import FormAdd from "./Components/FormAdd/FormAdd";
import PostFilter from "./Components/PostFilter/PostFilter";
import "./App.css";
import { ModalContext } from "./Context/ModalContex";
import { TasksProvider, useTasks } from "./Context/TasksContext";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  const [modal, setModal] = useState(false);


  

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);



  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };


  function closeOpenModalWindow() {
    setModal(!modal);
  }



  // const sortedSearh = useMemo(() => {
  //   if (filter.query) {
  //     return [...post].sort((a, b) =>
  //       a[filter.query].localeCompare(b[filter.query])
  //     );
  //   }
  //   return post;
  // }, [filter.query, post]);

  // const seartedSearchQuery = useMemo(() => {
  //   return sortedSearh.filter((post) =>
  //     post.title.toLocaleUpperCase().includes(filter.search.toLocaleUpperCase())
  //   );
  // }, [filter.search, sortedSearh]);

  return (
    <div className="app">
      <div className="container">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ModalContext.Provider value={{ modal, closeOpenModalWindow }}>
            <TasksProvider>
              <header className="header-content">
                <MyButton onClick={closeOpenModalWindow}>Создать пост</MyButton>
                <MyButton onClick={toggleTheme}>Сменить тему</MyButton>
              </header>
              <MyModal show={modal} close={closeOpenModalWindow}>
                <FormAdd close={closeOpenModalWindow} />
              </MyModal>
              <PostFilter/>
              <PostList/>
            </TasksProvider>
          </ModalContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
//Попроваить стили в постлисте, что бы после добавления все было норм DONE, disable кнопки при пустом инпуте в форме добпавления DONE.Создать новый компонент ПостФильтр, внутри него будет инпут и селект. Создать кастомный селект.
//почитать про контекст и про реализацию двойной темы(выделить переменные для темы, цвет фона и шрифта)
//Сделать новую кнопку для темы и стили. Ко всем компонентам дописать классы по темам

//сделать фильтрацию и локал сторэдж

/// лока сторэдж дописать и попробовать сделать модалку в редьюсер