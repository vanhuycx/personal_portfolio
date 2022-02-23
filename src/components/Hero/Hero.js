import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Van Pham <br />
          Welcome To My Portfolio
        </SectionTitle>
        <SectionText>
        I like to learn and establish skillset in technology, web development and building awesome apps. I’m continuously learning programming, Web design methodologies. I acknowledge that you’re looking for a person who is enthusiastic as well as having technical knowledge. I believe that I am a good fit to generate valuable product through my work. I have been conduct many projects and I would love to share the results with you.

        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;