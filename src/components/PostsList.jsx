import Post from './Post';
import classes from './PostsList.module.css';
function PostLists(){
    return (
        <ul className={classes.posts}>
            <Post id="1" title="Title 1" author_name="Author 1" />
            <Post id="2" title="Title 2" author_name="Author 2"/>
        </ul>
    )
}

export default PostLists;