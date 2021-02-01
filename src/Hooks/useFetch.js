import  {   useState, useEffect } from 'react'
import { getUser } from "../utils/auth"
import { getPublicUser } from "../utils/db";

export const useFetch = (save) => {
    
    const [userData, setUserData] = useState({name:"", bio:"", mySkills:"",interests:"",lookingFor:"", loading:true });
    const uid = getUser().uid;
    useEffect(() => {
    let isMounted = true;
    getPublicUser(uid).then(res => {
      
      setTimeout(() => {
         if (isMounted) setUserData({...res, loading:false});
  
      }, 1000);  
    });
    return () => { isMounted = false };
  }, [save]);

  return userData;
}