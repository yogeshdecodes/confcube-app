import React from 'react';
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from '../utils/auth';
import firebase from 'gatsby-plugin-firebase';
import { Box } from '@chakra-ui/react';
const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/app/profile');
        },
      },
    };
  }

  return (
    <>
      <Box py={{ base: 20, md: 28 }}>
        {firebase && (
          <StyledFirebaseAuth
            uiConfig={getUiConfig(firebase.auth)}
            firebaseAuth={firebase.auth()}
          />
        )}
      </Box>
    </>
  );
};

export default Login;
