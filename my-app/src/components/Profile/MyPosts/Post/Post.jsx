import style from './Post.module.css';
import Person from './Person.jpg';

const Post = (props) => {
    return (
            <div className={style.post}>
                <img src={Person} alt="" />
                {props.message}
                <div>{props.likesCount} like</div>
            </div>
    );
}

export default Post;