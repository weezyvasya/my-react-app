import PostItem from '../PostItem/PostItem';
import './PostList.css'
import { useTasks } from '../../Context/TasksContext';


function PostList() {
  const {tasks, searchText} = useTasks()


    return ( 
        <>
          <div className="post-list">
                <div className="post-list-header">
                    <h1>Посты</h1>
                </div>
                <div className="post-list-main">
                   {tasks
                     .filter((task) =>  task.title.toLocaleUpperCase().includes(searchText.toLocaleUpperCase()))
                     .map((post) =>  <PostItem key={post.id} post={post}/>)}
                </div>
          </div>
        </>
     );
}

export default PostList;