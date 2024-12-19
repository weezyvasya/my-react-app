import PostItem from '../PostItem/PostItem';
import './PostList.css'
function PostList(data) {
    return ( 
        <>
          <div className="post-list">
                <div className="post-list-header">
                    <h1>Посты</h1>
                </div>
                <div className="post-list-main">
                    <PostItem/>
                </div>
          </div>
        </>
     );
}

export default PostList;