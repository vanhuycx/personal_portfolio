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
        I like to learn and establish skill sets in technology, web development, and building awesome apps. I’m continuously learning programming, web design methodologies, and a passion for building responsive and user-friendly websites. I acknowledge that you’re looking for a person who is motivated as well as having technical knowledge. I believe that I am a good fit to generate valuable products through my work. I have been conducted many projects and I would love to share the results with you.
        </SectionText>
        <SectionText>
          Email : vanhuycx@gmail.com
        </SectionText>
        
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;