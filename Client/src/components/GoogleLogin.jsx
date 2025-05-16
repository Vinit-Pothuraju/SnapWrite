import React from 'react'
import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/helpers/firebase';
import { getEnv } from '@/helpers/getenv';
import { showToast } from '@/helpers/showToast';
import { useNavigate } from 'react-router-dom';
import { RouteIndex } from '@/helpers/RouteName';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/user/user.slice';
const googleLogin = () => {
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const handleLogin=async()=>{
    
    try {
          const googleResponse= await signInWithPopup(auth,provider)
          const user=googleResponse.user
          const bodyData={
            username:user.displayName,
            email:user.email,
            avatar:user.photoURL
          }

          
          const response = await fetch(
            `${getEnv("VITE_API_BASE_URL")}/auth/google-login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(bodyData),
            }
          )
          const data = await response.json();
          if (!response.ok) {
            return showToast("error", data.message);
            
          }
            console.log(data);
            dispatch(setUser(data.user))
            Navigate(RouteIndex);
            showToast("success", data.message);
          
          
          
        } catch (error) {
          showToast("error", error.message);
          console.log(error.message);
        }
  }
  return (
    <Button className="w-full" variant="outline" onClick={handleLogin}>
      <FcGoogle/>
      Continue with Google
    </Button>
  )
}

export default googleLogin