import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    let postsData = [
        {id: 1, message: 'Hello', likesCount: 15},
        {id: 2, message: 'How are you', likesCount: 7}
    ];
    let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts postsElements={postsElements} />
        </div>
    );
}

export default Profile;