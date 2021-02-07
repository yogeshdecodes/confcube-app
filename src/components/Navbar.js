import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Links = ['Conferences'];

const NavLink = ({ children }) => (
  <GatsbyLink to="/conferences">
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{ textDecoration: 'none', bg: 'gray.200' }}
    >
      {children}
    </Link>
  </GatsbyLink>
);

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = (props) => (
    <svg
      {...props}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="668"
      height="205.333"
      viewBox="0 0 501 154"
    >
      <path d="M17.1 16.5L2.5 30.9l-.3 59C2 148 2 149 4 151s3.1 2 60.7 2h58.6l14.9-14.7 14.8-14.7V64c0-45-.3-59.9-1.2-60.8C150.9 2.3 136 2 91.1 2H31.6L17.1 16.5zM128.5 20l-9 9H39V11h98.5l-9 9zM144 67v49h-18V35.5l8.7-8.7c4.8-4.9 8.9-8.8 9-8.8.2 0 .3 22 .3 49zM30 78.3v40.2l-9 9-9 9V38h18v40.3zm87-1.3v39H39V38h78v39zm0 58v9H17.5l9-9 9-9H117v9zM196 62.5c-10.5 3.4-17.2 13.2-17.2 25.3-.2 18.7 11.1 29.5 29 27.9 6-.6 14-4 15.7-6.7.8-1.3-3.3-7-5-7-.8 0-3.1 1.1-5.1 2.5-10.5 7.1-23.4-1.7-23.4-16 0-5.9 3.1-12.9 7.1-15.8 4.2-3 11-3.4 15.9-.8 5.2 2.7 7.1 2.6 9.3-.5 2.4-3.3 1.7-4.8-3.5-7.5-5.5-2.8-16.4-3.5-22.8-1.4zM319.4 62.9c-4.5 2.8-6.4 5.9-6.4 10.8 0 4.1-.1 4.3-3 4.3-2.7 0-3 .3-3 3.1 0 2.4.6 3.2 3 4l3 1.1V115h10V85h4.5c4.5 0 4.5 0 4.5-3.5s0-3.5-4.5-3.5c-4.3 0-4.5-.1-4.5-2.9 0-3.7 2.3-6.1 6-6.1 2.3 0 3-.5 3.5-3 .4-1.6.4-3.4 0-4-1.1-1.7-9.8-1.1-13.1.9zM353.5 61.9c-6.9 1.7-13.5 7.2-17 14.1-1 1.9-2 6.4-2.3 10.1-.8 12.1 4.1 22.5 13.1 27 8.3 4.3 21.7 3.4 28.5-1.7 3.9-3 4-4.3.7-7.4-2.3-2.2-2.8-2.3-4.8-1-7.4 4.6-12 5.2-17.7 2.1-6.3-3.3-10-13.2-8.1-21.5 2.6-11 14.2-16.9 22.9-11.6 4.5 2.8 6.7 2.5 9.2-1l2.2-3-2.4-2c-4.8-4.1-16.3-6-24.3-4.1zM426 88v27h4.4c2.4 0 4.6-.5 4.8-1 .2-.7 1.6-.5 3.7.6 4.1 2 11.2 1.4 15-1.3 4.8-3.6 7.1-9 7.1-17.1 0-8.1-1.5-12.5-5.3-16.1-3.6-3.3-10.9-3.9-15.9-1.3l-3.8 2V61h-10v27zm22.7-.3c2.6 3.9 2.4 13.3-.3 17-2.5 3.3-6.6 4.1-10 1.8-2.2-1.4-2.4-2.2-2.4-9.5s.2-8 2.6-9.9c3.8-3 7.9-2.7 10.1.6zM238.6 78c-3.7 1.2-8.5 5.6-10.2 9.7-1.7 3.8-1.8 13-.3 17 3.7 9.9 16.7 14.2 26.9 9 7.6-3.8 11.1-11.9 9.5-21.6-1.9-11.3-13.7-17.7-25.9-14.1zm10.9 7.6c5.9 2.3 5.9 19.5 0 21.8-7.8 2.9-13.8-4.8-11.5-14.9 1.4-6.1 6.1-8.9 11.5-6.9zM283.3 78.9c-2.6 1.6-3.2 1.7-3.7.5-.4-.9-2.1-1.4-5.1-1.4H270v37h11v-13.5c0-13.2.1-13.5 2.4-15 3.5-2.3 7.8-1.6 9.3 1.5.8 1.6 1.3 6.9 1.3 14.7V115h10v-14.4c0-13.2-.2-14.6-2.3-17.7-1.2-1.8-3.4-3.9-4.7-4.6-3.7-1.9-10.1-1.6-13.7.6zM474 79.2c-5.2 2.7-8.5 7.1-9.4 12.7-1.5 9.5 2.3 18.3 9.4 21.8 6.9 3.5 17.1 2.7 23-1.7 2.2-1.7 2.3-2 1-4.4-1.5-2.9-4.2-3.3-8-1.1-6 3.4-13.4.3-14.6-6.2l-.6-3.2 12.3-.3 12.4-.3-.2-4.3c-.4-8.8-6-14.4-15-15-4.6-.3-6.7.1-10.3 2zM384 91.5c0 14.4.9 18.4 4.9 21.9 3 2.7 10.9 3.3 15 1.1 2.4-1.2 3.6-1.4 4.4-.6.6.6 3 1.1 5.4 1.1h4.3V78h-11v13.4c0 12.8-.1 13.6-2.2 15-2.9 2.1-7.2 2-8.9-.1-1-1.1-1.5-5.5-1.7-15l-.4-13.3H384v13.5z" />
    </svg>
  );
  return (
    <>
      <Box
        as={'header'}
        bg={'white'}
        shadow={'md'}
        pos="fixed"
        top="0"
        zIndex="999"
        left="0"
        right="0"
      >
        <Flex
          backgroundColor="white"
          w="full"
          borderTop="5px solid #F56565"
        ></Flex>
        <Flex h="60px" alignItems={'center'} justifyContent={'space-between'} px={4}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              {' '}
              <GatsbyLink to="/">
                <Icon as={logo} w="20" h="10" mx="5" />
              </GatsbyLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <GatsbyLink to="/app/profile">
              <Button
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
                size={'sm'}
                mr={4}
              >
                Account
              </Button>
            </GatsbyLink>
            <GatsbyLink to="/app/profile">
              <Avatar size={'sm'} src={props.src} />
            </GatsbyLink>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
