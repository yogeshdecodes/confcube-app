import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/auth';
import { eventUser, getEvent, addEvent, removeEvent } from '../utils/db';
import {
  Grid,
  Avatar,
  Heading,
  Box,
  Button,
  Flex,
  Text,
  Badge,
  Switch,
  Skeleton,
  Link,
} from '@chakra-ui/react';

export const isBrowser = () => typeof window !== 'undefined';
const Detail = ({ EventDetails }) => {
  const EventId = EventDetails.contentful_id;
  const Title = EventDetails.title;
  const Location = EventDetails.location;
  const Date = EventDetails.date;

  const [users, setUsers] = useState([]);
  const userData = [];

  const user = getUser();
  const [loading, setLoading] = useState(true);
  const [attend, setAttend] = useState(false);
  function changeSwitchState(e) {
    if (e == true) {
      isBrowser() && addEvent(user.uid, EventId);
    } else {
      isBrowser() && removeEvent(user.uid, EventId);
    }

    setTimeout(() => {
      setAttend(e);
    }, 100);
  }

  useEffect(() => {
    isBrowser() &&
      eventUser(EventId).then((querySnapshot) => {
        querySnapshot.forEach((docu) => {
          userData.push(docu.data());
        });

        setUsers(userData);
      });
  }, [attend]);

  useEffect(() => {
    isBrowser() &&
      getEvent(user.uid).then((Snapshot) => {
        Snapshot.forEach((docu) => {
          if (docu.data()?.events.includes(`${EventId}`)) {
            setAttend(true);
          }
        });

        setLoading(false);
      });
  }, []);

  return (
    <>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={4}
        py={{ base: 20, md: 28 }}
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold">
            ⚡️{Title}
          </Text>
          <Badge variant="subtle" colorScheme="pink" ml={1}>
            {Location}
          </Badge>
        </Flex>
        <Text color="gray.500" pb={2}>
          {Date}
        </Text>
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text color="gray.500" pr={4}>
            Attending
          </Text>
          <Skeleton isLoaded={!loading}>
            {loading ? (
              <Text>loading...</Text>
            ) : (
              <Switch
                isChecked={attend}
                colorScheme="teal"
                onChange={(e) => changeSwitchState(e.target.checked)}
              />
            )}{' '}
          </Skeleton>
        </Flex>
      </Flex>

      <Grid
        p={10}
        gap={6}
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        overflow="visible"
        display="grid"
      >
        {users.length ? (
          users.map((user) => {
            const {
              name,
              bio,
              mySkills,
              interests,
              lookingFor,
              avatarUrl,
              email,
            } = user;
            return (
              <Box
                display="inline"
                bg="#ffffff"
                borderRadius="lg"
                border="1px solid lightgrey"
              >
                <Box
                  boxShadow="sm"
                  pt={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Avatar size="2xl" display="block" src={avatarUrl} />
                </Box>
                <Box p={2} pb={4} display="flex" flexDirection="column">
                  <Text
                    fontWeight="bold"
                    fontSize="xl"
                    display="flex"
                    justifyContent="center"
                    pb={1}
                  >
                    {name}
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                    flexDirection="row"
                  >
                    <Text fontSize="sm" fontWeight="semibold" pr={2}>
                      ❤️ Bio:
                    </Text>
                    <Text fontSize="sm">{bio} </Text>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                    flexDirection="row"
                  >
                    <Text fontSize="sm" fontWeight="semibold" pr={2}>
                      ⚡ My Skills:{' '}
                    </Text>
                    <Text fontSize="sm">{mySkills}</Text>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                    flexDirection="row"
                  >
                    <Text fontSize="sm" fontWeight="semibold" pr={2}>
                      ✈️ Interests:
                    </Text>
                    <Text fontSize="sm">{interests}</Text>
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                    flexDirection="row"
                  >
                    <Text fontSize="sm" fontWeight="semibold" pr={2}>
                      🔎 Looking For:
                    </Text>
                    <Text fontSize="sm">{lookingFor}</Text>
                  </Box>
                  <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    flexDirection="row"
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                  >
                    <Button
                      id="message-button"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="row"
                      ml={10}
                      mr={10}
                      backgroundColor="gray.900"
                      color="white"
                      fontWeight="medium"
                      _hover={{ bg: 'gray.700' }}
                      _active={{
                        bg: 'gray.800',
                        transform: 'scale(0.95)',
                      }}
                    >
                      Message
                    </Button>
                  </Link>
                </Box>
              </Box>
            );
          })
        ) : (
          <Flex
            width="100%"
            backgroundColor="white"
            borderRadius="8px"
            p={16}
            justify="center"
            align="center"
            direction="column"
          >
            <Heading size="lg" mb={2}>
              There isn't any participant yet.
            </Heading>
            <Text mb={4}>
              Add yourself to conference using above toggle button
            </Text>
          </Flex>
        )}
      </Grid>
    </>
  );
};

export default Detail;
