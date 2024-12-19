import PostList from './Components/PostList/PostList'
import { useState } from 'react'
import MyButton from './UI/Button/MyButton'
import './App.css'




function App() {
  const [post,setPost] = useState([{id: 1, title: 'Природа', subtitle:'Великолепная'}, {id: 2, title: 'Погода', subtitle:'Хорошая'}, {id: 3, title: 'Яблоко', subtitle:'Красное и сладкое'}])

  return (
    <>
      <div className='app'>
        <div className='container'>
          <MyButton>Создать пост</MyButton>
          <div>Post filter</div>
          <div>Post list</div>
          <PostList data={post}/ >
        </div>
      </div>
    </>
  )
}

export default App
//сверстать два компонента PostList(div куда рендарить посты, заголовок ) PostItem (сам пост)
