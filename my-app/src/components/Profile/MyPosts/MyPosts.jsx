import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);
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
            {postsElements}
        </div>
    );
}

export default MyPosts;