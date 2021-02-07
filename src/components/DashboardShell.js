import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getUser } from '../utils/auth';

const DashboardShell = ({ children }) => {
  const user = getUser();
  return (
    <Box backgroundColor="gray.100" h="auto">
      <Navbar src={user?.photoURL} />
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[2, 8, 8]}>
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default DashboardShell;
