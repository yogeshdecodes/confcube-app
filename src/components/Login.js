import React from 'react';
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from '../utils/auth';
import firebase from 'gatsby-plugin-firebase';
import { Box, Heading, Stack } from '@chakra-ui/react';
const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.GithubAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/app/profile');
        },
      },
    };
  }

  return (
    <Box py={{ base: 20, md: 28 }}>
      <Stack spacing={8} mx={'auto'} w={'full'} maxW={'md'} py={12} px={6}>
        <Heading fontSize={'3xl'} textAlign={'center'}>
          Sign in to your account{' '}
        </Heading>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={{ base: 4, md: 8 }}
        >
          {firebase && (
            <StyledFirebaseAuth
              uiConfig={getUiConfig(firebase.auth)}
              firebaseAuth={firebase.auth()}
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
