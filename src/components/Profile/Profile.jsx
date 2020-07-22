import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div className={classes.profile}>
        <div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="sad"/>
        </div>
        <div>
          ava + decription
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;