import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        <p>My posts</p> 
        <p>New post</p>
        <ul className={s.posts}>
          <Post message="Hi, how are you?"/>
          <Post message="It's my first post"/>
          <Post message="Lol, kek"/>
        </ul>
      </div>
    )
}

export default MyPosts;