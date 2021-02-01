import React from "react"
import { Link } from "gatsby"
import {
 
  Flex,

  Text,
 
  Badge,
  Link as ChakraLink,
  Button,

  Divider,

} from '@chakra-ui/react'

const ConferenceItem = ({ title, titleurl, location, date, topics, codeofconduct, contentful_id }) => {
  return (
<>
      <Flex
      display="flex"
      flexDirection="row"
      alignItems="stretch"
      justifyContent="space-between"
      textAlign="center"
      mt={4}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <ChakraLink  href={titleurl} target="_blank" rel="noopener noreferrer">
        <Text fontSize="2xl" fontWeight="bold" color="messenger.500">
          {title}
        </Text></ChakraLink>
        <Flex>
          <Badge
            variant="subtle"
            colorScheme="pink"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="stretch"
            p={1}
          >
          {location}
          </Badge>
          <Text ml={2}>{date}</Text>
        </Flex>
        <Flex>
          <Badge
            variant="subtle"
            colorScheme="whatsapp"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="stretch"
            p={1}
            mt={2}
          >
            {topics}
          </Badge>
          {(codeofconduct) ? <ChakraLink
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={2}
            p={1}
            color="gray.500"
            href={codeofconduct}
            target="_blank" rel="noopener noreferrer"
          >
            Code of Conduct
          </ChakraLink>:""}
        </Flex>
      </Flex>
      <Flex flexDirection="column" justifyContent="center">
        
         <Link to="/app/detail" state={{ EventDetails : {contentful_id, title, location, date } }}><Button
          variant="solid"
          size="sm"
          colorScheme="facebook"
          borderRadius="10px"
      
        >View detail  </Button></Link>
 
      </Flex>
      
    </Flex>
   <Divider />
      
</>
      
  )
}



export default ConferenceItem
