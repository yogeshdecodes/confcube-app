import React from 'react';
import { getUser } from '../utils/auth';
import { createUser, createPublicUser } from '../utils/db';
import Account from './Account';

export const isBrowser = () => typeof window !== 'undefined';

const Profile = () => {
  const user = getUser();
  const { displayName, photoURL, uid, email } = user;

  const defaultPhotoUrl = !!photoURL
    ? photoURL
    : 'cloudinaryplaceholderavatarimage';
  
  isBrowser() && createUser(uid, user, defaultPhotoUrl);
  isBrowser() && createPublicUser(uid, displayName, defaultPhotoUrl, email);

  return <Account />;
};

export default Profile;
