import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './BulletSection.scss';

interface IBlockTextProps {
  heading: string;
  bullets: any;
  bullet: object;
}

export const BulletSection = ({ heading, bullets  }: IBlockTextProps) => (
  <Container>
    <div className={s.block}>
      <h1 className={s.block__heading}>{heading}</h1>
      <div className={s.block__col}>
      {
        bullets.map((bullet: { name: string; description: string; link: string;})=>(
            <div className={s.block__item} key={bullet.name}>
              <h3 className={s.block__item_header} >
                🔅  
                <a className={s.block__item_link} href={bullet.link} target="_blank">
                {bullet.name}</a>
              </h3> 
             
              <p className={s.block__item_description}>{bullet.description}</p>
            </div>
        ))
      }
      </div>
    </div>
  </Container>
);
