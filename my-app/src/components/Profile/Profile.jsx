import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} />
        </div>
    );
}

export default Profile;