import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import './Home.css'
const Home = ({isAuth}) => {
  const[postList,setPostList] = useState([]);
  const postsCollectionRef = collection(db,"posts");

  useEffect(()=>{
    const getPosts = async()=>{
      const data = await getDocs(postsCollectionRef);
      setPostList((data.docs.map((doc)=>({...doc.data(),id:doc.id}))));
    };

    getPosts();
  });
  const deletePost =async(id)=>{
    const postDoc = doc(db,"posts",id);
    await deleteDoc(postDoc);
  };
  return (
    <div>
      {postList.map((item)=>(
        <div key={item.id} className='outerBox'>
          <div className='innerBox'>
            <header>
              {item.title}
              {isAuth&& item.author.id===auth.currentUser.uid&& (
              <button className='delete_post' onClick={()=>{ deletePost(item.id) }}>&#128465;</button> )}
            </header>
            <div className='individual_posts'>
              {item.post}
            </div>
            <footer>
              @{item.author.name}
            </footer>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home