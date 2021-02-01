import React from "react"
import { graphql } from "gatsby"
import ConferenceItem from "../components/ConferenceItem"
import DashboardShell from "../components/DashboardShell"
import {
 
  Heading,
} from '@chakra-ui/react'

const Conferences = ({
  data: {
    allContentfulConferences: { nodes: conferences },
  },
}) => {
  
  return (
    <DashboardShell>
    <Heading>2021</Heading>
        {conferences.map(conference => {
                return <ConferenceItem {...conference}/>
              })}
          
    </DashboardShell>
   
  )
}

export const query = graphql`
  {
    allContentfulConferences(sort: {fields: startdate, order: ASC}) {
      nodes {
        title
        titleurl
        location
        date
        topics
        codeofconduct
        contentful_id
      }
    }
  }
`


export default Conferences
