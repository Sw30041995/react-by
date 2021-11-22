import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let messagesData = [
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
                <Post message='Hello' likesCount='15'/>
                <Post message='How are you?' likesCount='7'/>
        </div>
    );
}

export default MyPosts;