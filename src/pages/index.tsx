import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Button } from 'components/button/Button';
import { FooterSpaceFiller } from 'components/footer-filler/FooterSpaceFiller';


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

    <BlockText
      heading="Projects"
      description={(
        <>
          Ueno is a full-service agency, busy designing and building
          beautiful digital products, brands, and experiences. For more
          informations go to <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">ueno.co</a>.
        </>
      )}
    />
    <FooterSpaceFiller />
  </>
);
