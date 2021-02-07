import React from 'react';
import { Link } from 'gatsby';
import DashboardShell from '../components/DashboardShell';
import {
  Container, 
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const NotFound = () => {
  const browser = typeof window !== 'undefined' && window;
  return (
    <>
      {browser && (
        <DashboardShell>
          <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
            <Stack
              as={Container}
              bg={useColorModeValue('gray.50', 'gray.900')}
              rounded={'xl'}
              p={8}
              spacing={6}
              maxW={'lg'}
              align={'center'}
              textAlign={'center'}
            >
              <Stack spacing={2}>
                <Heading>Whoops!</Heading>
                <Text>We can't find the page you are looking for</Text>
              </Stack>
              <Flex>
                <Link to="/">
                  <Button
                    as={'a'}
                    colorScheme={'red'}
                    rounded={'full'}
                    bg={'red.400'}
                    _hover={{ bg: 'red.500' }}
                  >
                    Take me back home, please!
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </DashboardShell>
      )}
    </>
  );
};
export default NotFound;
