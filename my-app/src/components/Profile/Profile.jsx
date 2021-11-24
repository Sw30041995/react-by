import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    let dialogsElements = props.state.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
    return (
        <div className={style.content}>
            <ProfileInfo />
            {dialogsElements}
        </div>
    );
}

export default Profile;