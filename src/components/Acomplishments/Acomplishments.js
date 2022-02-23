import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { ExternalLinks } from '../Projects/ProjectsStyles';

const data = [
  { text: ' Pass four AWS Cloud Certificates',link:'https://www.credly.com/users/vanhuypham/badges'},
  { text: 'Pass the Google Data Analytic Certificate', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number || ''}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          <a style={{color:"yellow",marginTop:'20'}} href={card.link} rel='noreferrer noopener'>Verified Link</a>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
