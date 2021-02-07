import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ExploreConferences = () => {
  return (
    <>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Box
          bg={useColorModeValue('red.400', 'red.500')}
          rounded={'xl'}
          color={useColorModeValue('white', 'gray.100')}
          px={{ base: 4, md: 10 }}
          py={10}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as={'h3'} mb={2}>
                Explore 200+ upcoming Tech Events in 2021
              </Heading>
              <Text fontSize={'lg'}>
                and start networking with fellow developers today!
              </Text>
            </Box>
            <Flex w={'full'} align={'center'} justify={'center'}>
              <Link to="/conferences">
                <Button
                  as={'a'}
                  bg={'red.600'}
                  color={'white'}
                  px={8}
                  py={7}
                  fontSize={'lg'}
                  rounded={'full'}
                  rightIcon={<ArrowForwardIcon />}
                  _hover={{
                    bg: 'red.700',
                    boxShadow: 'xl',
                  }}
                >
                  Browse Conferences
                </Button>
              </Link>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default ExploreConferences;
