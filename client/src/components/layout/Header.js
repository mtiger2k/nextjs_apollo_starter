import React from 'react';

import HeaderWrapper from '../lib/header/HeaderWrapper';
import Logo from '../lib/header/Logo';
import MiniLogo from '../lib/header/MiniLogo';
import LargeLogo from '../lib/header/LargeLogo';
import Navbar from '../lib/header/Navbar';

import MessagesMenu from '../containers/header/MessagesMenu';
import NotificationsMenu from '../containers/header/NotificationsMenu';
import TasksMenu from '../containers/header/TasksMenu';
import UserMenu from '../containers/header/UserMenu';


export default function Header({user}) {
  return (
    <HeaderWrapper>
      <Logo>
        <MiniLogo>
          <b>S</b>im
        </MiniLogo>
        <LargeLogo>
          <b>Simple</b>Admin
        </LargeLogo>
      </Logo>
      <Navbar>
        <MessagesMenu />
        <NotificationsMenu />
        <TasksMenu />
        <UserMenu
          loginuser={user}
          links={[
            { key: 1, text: 'Link 1' },
            { key: 2, text: 'Link 2' },
            { key: 3, text: 'Link 3' },
          ]}
          buttons={[
            { key: 1, text: 'Profile', align: 'left' },
            { key: 2, text: 'Logout' },
          ]}
        />
      </Navbar>
    </HeaderWrapper>
  );
}
