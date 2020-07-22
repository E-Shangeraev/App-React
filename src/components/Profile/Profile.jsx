import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div className={classes.profile}>
        <p>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="sad"/>
        </p>
        <p>ava + decription</p>
        <MyPosts />
    </div>
    )
}

export default Profile;