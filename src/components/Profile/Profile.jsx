import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div>
        <p>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="sad"/>
        </p>
        <p>ava + decription</p>
        <MyPosts />
    </div>
    )
}

export default Profile;