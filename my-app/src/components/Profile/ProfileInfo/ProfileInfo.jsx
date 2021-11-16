import Panorama from './Panorama.jpg';
import Avatar from './Avatar.jpg';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.panorama} src={Panorama} alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <img className={style.avatar} src={Avatar} alt="my name"/> + my data
            </div>
        </div>
    );
}

export  default  ProfileInfo;
