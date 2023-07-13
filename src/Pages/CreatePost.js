import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
const CreatePost = ({isAuth}) => {
  const [title,setTitle] = useState("");
  const [post,setPost] = useState("");
  useEffect(()=>{
    if(!isAuth){
      navigate('/login');
    }
  });
  const postsCollectionRef = collection(db,"posts");
  let navigate = useNavigate();
  const createPost = async()=>{
    await addDoc(postsCollectionRef,{
      title,
      post,
      author:{name:auth.currentUser.displayName, id:auth.currentUser.uid},
    });
    navigate('/');
  }
  return (
    <div className='postBox'>
      <div className='outer__container'>
        <header>
          Create a Post
        </header>
        <div className='container'>
          <label>Title:</label>
          <input placeholder='Title....' onChange={(event)=>{setTitle(event.target.value)}}/>
          <label>Post:</label>
          <textarea placeholder='Post....' onChange={(event)=>{setPost(event.target.value)}}/>
        </div>
        <footer>
          <button onClick={createPost}>Submit Post</button>
        </footer>
      </div>
    </div>
  )
}

export default CreatePost