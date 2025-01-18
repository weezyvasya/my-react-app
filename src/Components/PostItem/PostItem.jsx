import MyButton from '../../UI/Button/MyButton';
import './PostItem.css'

function PostItem({post, remove}) {
    return ( 
        <>
          <div className="post-item">
            <div className="post-item-top">
                <h3>{post.title}</h3>
            </div>
            <div className="post-item-bottom">
                <p>{post.subtitle}</p>
                <MyButton onClick={()=> remove(post.id)}>Удалить</MyButton>
            </div>
          </div>
        </>
     );
}

export default PostItem;