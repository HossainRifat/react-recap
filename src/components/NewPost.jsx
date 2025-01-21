
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props){

    return (
        <div className={classes.newPost}>
            <form action="" className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" onChange={props.onTitleChange} />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows="5"></textarea>
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default NewPost;