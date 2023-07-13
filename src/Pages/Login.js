import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
  let navigate = useNavigate();
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem('setIsAuth',true);
            setIsAuth(true);
            navigate('/');
        })
    }
  return (
    <div>
        <p>SignIn with google to continue</p>
        <button onClick={signInWithGoogle}>SignIn With Google</button>
    </div>
  )
}

export default Login