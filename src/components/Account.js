import {  navigate } from "@reach/router"
import firebase from "gatsby-plugin-firebase"
import React,  {  useState } from 'react'
import {useFetch} from "../Hooks/useFetch"

import {
  Avatar,
  Heading,
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

import { getUser, logout } from "../utils/auth"
import DashboardShell from "./DashboardShell"
import AddProfileModal from "./AddProfileModal"

const FeedbackUsage = (props) => {

const { userName ,userBio , userSkills,  userLooking ,userInterests  ,userLoading  }=props

console.log(props);
    
    return (
          <Box> 

             <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={2}
              flexDirection="row"
            >                   
              <Text fontWeight="bold"  pr={2}>😃 Name:</Text>
              <Text> {userLoading ? "loading...":userName}</Text>
              </Box>

            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={2}
              flexDirection="row"
              >
                <Text fontWeight="bold" pr={2}>❤️ Bio:</Text>
              <Text>{userLoading ? "loading...":userBio} </Text>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={2}
              flexDirection="row"
            
            >
              <Text  fontWeight="bold" pr={2}>⚡ My Skills: </Text>
              <Text>{userLoading ? "loading...":userSkills}</Text>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={2}
              flexDirection="row"
            >
                <Text fontWeight="bold" pr={2}>✈️ Interests:</Text>
                <Text>{userLoading ? "loading...":userInterests}</Text>
            
            </Box>

            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={2}
              flexDirection="row"
            >
                  <Text fontWeight="bold" pr={2}>🔎 Looking For:</Text>
                  <Text>{userLoading ? "loading...":userLooking}</Text>
            </Box>
          

          </Box>
  
);};

const SettingsTable = ({children}) => (
  <Box
    backgroundColor="white"
    mt={8}
    borderRadius={[0, 8, 8]}
    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
  >
    <Flex
      backgroundColor="gray.50"
      borderTopLeftRadius={[0, 8, 8]}
      borderTopRightRadius={[0, 8, 8]}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      px={6}
      py={4}
    >
      <Flex justify="space-between" align="center" w="full">
        <Text
          textTransform="uppercase"
          fontSize="xs"
          color="gray.500"
          fontWeight="medium"
          mt={1}
        >
          Settings
        </Text>
      </Flex>
    </Flex>
    <Flex direction="column" p={6}>
   {children}
    </Flex>
  </Box>
);

const Account = () => {
const user = getUser();
const [save, setSave] =useState("false");
const {name, bio, mySkills,interests,lookingFor, loading} =useFetch(save);

  
  return ( 
    <DashboardShell>
      <Flex
        direction="column"
        maxW="600px"
        align={['left', 'center']}
        margin="0 auto"
      >
        <Flex direction="column" align={['left', 'center']} ml={4}>
          <Avatar
            w={['3rem', '6rem']}
            h={['3rem', '6rem']}
            mb={4}
            src={user?.photoURL}
          />
          <Heading letterSpacing="-1px">{user?.displayName}</Heading>
          <Text>{user?.email}</Text>
        </Flex>
        <SettingsTable >
          <FeedbackUsage userName={name} userBio={bio} userSkills={mySkills} userLooking={lookingFor} userInterests={interests} userLoading={loading} />
          <Text my={4}>
            Update with Something Coool    Update with Something Coool    Update with Something Coool
          </Text>
          <Flex justify="flex-end">
            <Button variant="ghost" ml={4} onClick={event => { event.preventDefault(); logout(firebase).then(() => navigate(`/app/login`)) }}>
              Log Out
            </Button>
            <AddProfileModal userName={name} userBio={bio} userSkills={mySkills} userLooking={lookingFor} userInterests={interests} saveState={save} userSave={setSave}>Edit Profile</AddProfileModal>
          </Flex>
        </SettingsTable>
      </Flex>
    </DashboardShell>
  );
};



export default Account;