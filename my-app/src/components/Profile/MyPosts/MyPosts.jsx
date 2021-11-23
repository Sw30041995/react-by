import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Your news...'></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
            {postsElement}
        </div>
    );
}

export default MyPosts;