import classes from './Post.module.css';

function Post(props) {
        return (

                            <div className={classes.cardBody}>
                                <h5 className={classes.cardTitle}>{props.title}</h5>
                                <p className={classes.cardText}>Author: {props.author_name}</p>
                            </div>
        );
}

export default Post;