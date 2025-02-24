import { MyButton } from '../../UI/Button/MyButton';
import './PostItem.css'
import { useTasksDispatch } from '../../Context/TasksContext';

function PostItem({post}) {
  const dispatch = useTasksDispatch()
    return ( 
        <>
          <div className="post-item">
            <div className="post-item-top">
                <h3>{post.title}</h3>
            </div>
            <div className="post-item-bottom">
                <p className='post-item-bottom-text'>{post.subtitle}</p>
                <MyButton onClick={()=> dispatch({type: 'delete', id: post.id})}>Удалить</MyButton>
            </div>
          </div>
        </>
     );
}

export default PostItem;