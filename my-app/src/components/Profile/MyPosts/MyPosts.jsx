import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Hello', likesCount: 15 },
        { id: 2, message: 'How are you', likesCount: 7 }
    ];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        </div>
    );
}

export default MyPosts;