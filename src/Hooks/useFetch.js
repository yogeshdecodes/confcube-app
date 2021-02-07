import { useState, useEffect } from 'react';
import { getUser } from '../utils/auth';
import { getPublicUser } from '../utils/db';
export const isBrowser = () => typeof window !== 'undefined';
export const useFetch = (save) => {
  const [userData, setUserData] = useState({
    name: '',
    bio: '',
    mySkills: '',
    interests: '',
    lookingFor: '',
    loading: true,
  });
  const uid = getUser().uid;
  useEffect(() => {
    let isMounted = true;

    isBrowser() &&
      getPublicUser(uid).then((res) => {
        if (isMounted) setUserData({ ...res, loading: false });
      });
    return () => {
      isMounted = false;
    };
  }, [save]);

  return userData;
};
