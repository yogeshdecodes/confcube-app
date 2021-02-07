import React from 'react';
import { graphql } from 'gatsby';
import ConferenceItem from '../components/ConferenceItem';
import DashboardShell from '../components/DashboardShell';
import { Flex,Heading } from '@chakra-ui/react';

const Conferences = ({
  data: {
    allContentfulConferences: { nodes: conferences },
  },
}) => {
  return (
    <DashboardShell>
      <Flex direction="column" mt={'4'} py={{ base: 12, md: 20 }}>
        <Heading>2021</Heading>
        {conferences.map((conference) => {
          return <ConferenceItem {...conference} />;
        })}
      </Flex>
    </DashboardShell>
  );
};

export const query = graphql`
  {
    allContentfulConferences(sort: { fields: startdate, order: ASC }) {
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
`;

export default Conferences;
