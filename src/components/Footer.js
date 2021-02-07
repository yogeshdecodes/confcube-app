import React from 'react';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      textAlign={'center'}
      borderTopWidth={1}
      borderTopStyle={'solid'}
      borderTopColor={useColorModeValue('gray.300', 'gray.800')}
      bg={useColorModeValue('gray.200', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.500')}
      py={{ base: 2, sm: 4 }}
    >
      <Text pr="2">Made with ❤️ by</Text>
      <Text as="u">
        <Link
          href={'https://twitter.com/yogesh_io'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Yogesh
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
