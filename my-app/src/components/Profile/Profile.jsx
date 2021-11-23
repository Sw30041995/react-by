import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

let postsData = [
    {id: 1, message: 'Hello', likesCount: 15},
    {id: 2, message: 'How are you', likesCount: 7}
];
let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;