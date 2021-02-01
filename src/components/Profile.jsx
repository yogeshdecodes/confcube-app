import React from "react"
import View from "./View"
import { getUser } from "../utils/auth"
import { createUser, createPublicUser, updatePublicUser, getEventCool, roomfloor,getPublicUser } from "../utils/db";
import { Box, Text } from "@chakra-ui/react";
import { addUserToEvent } from "../utils/db";
import { deleteUserFromEvent } from "../utils/db";
import { getEvent } from "../utils/db";
import DashboardShellMyEvents from "./DashboardShellMyEvents";
import DashboardShell from "./DashboardShell";
import Account from "./Account";

const Profile = () => {
  const user = getUser();
  const { displayName,   photoURL, uid  } = user;
    
  const defaultPhotoUrl= !!photoURL?photoURL:"cloudinaryplaceholderavatarimage";
  const userEvents= ["event1","event3"]
  createUser(uid, user, defaultPhotoUrl, userEvents);
  createPublicUser(uid, displayName, defaultPhotoUrl);
 
 

  
  return (
     
   
  <Account />)
}

export default Profile
