import React from 'react'
import {
 
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import DashboardShell from "./DashboardShell.js"

const DashboardShellMyEvents = () => (
        <DashboardShell>
             <Box
              width="100%"
              backgroundColor="whiteAlpha.400"
              borderRadius="8px"
              p={8}
            >
              <Heading>Update your profile to something cool🌱</Heading>
              <Text>Name:</Text>
              <Text>Bio:</Text>
              <Text>My Skills:</Text>
              <Text>Interests:</Text>
              <Text>Looking For:</Text>
              <Button variant="solid" size="md">
                Edit Profile
              </Button>
            </Box>
        </DashboardShell>
           
  
)

export default DashboardShellMyEvents