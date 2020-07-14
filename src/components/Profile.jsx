import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
    return (
    <div className={classes.profile}>
        <div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="sad"/>
        </div>
        <div>
          ava + decription
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <ul className={classes.posts}>
            <li className={classes.item}>post 1</li>
            <li className={classes.item}>post 2</li>
          </ul>
        </div>
    </div>
    )
}

export default Profile