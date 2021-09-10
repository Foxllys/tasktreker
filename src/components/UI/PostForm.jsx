import React, { useState } from 'react';
import MyButton from "./button/MyButton";
import MyInput from './input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});    

    const addNewPost = (event) => {
        event.preventDefault();
        if (post.title !== "" && post.body !== "") {
          const newPost = {...post, id: Date.now()};
          create(newPost);
          setPost({title: '', body: ''});
        }
        }
    return (
        <form>
        <MyInput
        // ref={bodyInputRef}
        value={post.title}
        onChange={event => setPost({...post, title: event.target.value})} 
        type='text' 
        placeholder='Post name'/>
        <MyInput 
        type='text' 
        placeholder='Post description'
        value={post.body}
        onChange={event => setPost({...post, body: event.target.value})}/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    );
};

export default PostForm;