import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { Button } from 'components/button/Button';
import { FooterSpaceFiller } from 'components/footer-filler/FooterSpaceFiller';
import { BulletSection } from 'components/bullet-section/BulletSection';

export default () => (
  <>
    <Helmet title="Vishwanath HM" />


    <Intro>
      Hello, 
      I am Vishwa 👋, <br/>
      A <Highlight>Frontend developer</Highlight> based out of Bangalore, India. <br/>
      I Enjoy coding in <Highlight>Javascript</Highlight> &  most of the time i work on <Highlight>React</Highlight> and <Highlight>NodeJS</Highlight> projects.<br/><br/>
      Currently, I am open for Freelance projects/ Remote job opportunities. <br/><br/>
      <Button>Say Hi!</Button>
    </Intro>
    <BulletSection 
      heading="Projects"
      bullets={[
        {name:"FightIQ", link: "https://ueno.co", description: "A simple prediction application built for a Sports based startup"},
        {name: "Harvard Art Gallery", link: "https://vishwanathovi.github.io/harvardartmuseum/", description: "One page gallery application built for Harvard Art Musuem"},
        {name:"ISDB",link:"https://ueno.co",description:"India start-up companies database (Yet to be released)"}
      ]}
    />

    <BulletSection 
      heading="Contact"
      bullets={[
        {name:"Github", link: "https://ueno.co", description: ""},
        {name: "LinkedIn", link: "https://vishwanathovi.github.io/harvardartmuseum/", description: ""},
        {name:"Email",link:"https://ueno.co",description:""}
      ]}
    />
    <FooterSpaceFiller />
  </>
);
