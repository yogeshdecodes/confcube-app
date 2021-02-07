import React from 'react';
import { Link } from 'gatsby';
import {
  Flex,
  Text,
  Badge,
  Link as ChakraLink,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';

const ConferenceItem = ({
  title,
  titleurl,
  location,
  date,
  topics,
  codeofconduct,
  contentful_id,
}) => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        mt={4}
      >
        <ChakraLink href={titleurl} target="_blank" rel="noopener noreferrer">
          <Heading
            size="md"
            as="h2"
            lineHeight="shorter"
            fontWeight="bold"
            fontFamily="heading"
          >
            {title}
          </Heading>
        </ChakraLink>
      </Flex>
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        justifyContent="space-between"
        textAlign="center"
        mb={4}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Flex>
            <Badge
              variant="subtle"
              colorScheme="red"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="stretch"
              p={1}
              fontSize={{ base: '10px', md: '10px', lg: '10px' }}
            >
              {location}
            </Badge>
            <Text ml={2} fontSize="sm">
              {date}
            </Text>
          </Flex>
          <Flex>
            <Badge
              variant="subtle"
              colorScheme="purple"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="stretch"
              p={1}
              mt={2}
              fontSize={{ base: '10px', md: '10px', lg: '10px' }}
            >
              {topics}
            </Badge>
            {codeofconduct ? (
              <ChakraLink
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt={2}
                p={1}
                href={codeofconduct}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text fontSize="sm" color="gray.500">
                  Code of Conduct
                </Text>
              </ChakraLink>
            ) : (
              ''
            )}
          </Flex>
        </Flex>
        <Flex flexDirection="column" justifyContent="center">
          <Link
            to="/app/detail"
            state={{ EventDetails: { contentful_id, title, location, date } }}
          >
            <Button
              variant="solid"
              size="sm"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              _hover={{ bg: 'gray.700' }}
            >
              View detail{' '}
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default ConferenceItem;
