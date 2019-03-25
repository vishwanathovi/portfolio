import * as React from 'react';

import { Link } from 'components/link/Link';

import StarterLogo from 'assets/svg/starter-logo.svg';
const siteLogo = require('assets/images/vishwa.png');

import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link
          to="/"
          className={s.header__logo}
        >
        <img className={s.header__logo_img} src={siteLogo} alt="site logo"/>
        </Link>

        <div className={s.header__navigation}>
          {children}
        </div>
      </div>
    </div>
  </header>
);
