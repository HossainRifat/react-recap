import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostLists(){
    
    const [enteredBody, setEnteredBody] = useState('');

    const changeBodyHandler = (event) => {
        setEnteredBody(event.target.value);
    }
    return (
        <> 
        <NewPost onTitleChange={changeBodyHandler}/>
        <ul className={classes.posts}>
            <Post id="1" title={enteredBody} author_name="Author 1" />
            <Post id="2" title="Title 2" author_name="Author 2"/>
        </ul>
        </>
    )
}

export default PostLists;