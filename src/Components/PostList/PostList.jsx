import PostItem from '../PostItem/PostItem';
import './PostList.css'


function PostList({data, remove}) {
    return ( 
        <>
          <div className="post-list">
                <div className="post-list-header">
                    <h1>Посты</h1>
                </div>
                <div className="post-list-main">
                   {data.map((post) =>  <PostItem key={post.id} post={post} remove={remove}/>)}
                </div>
          </div>
        </>
     );
}

export default PostList;