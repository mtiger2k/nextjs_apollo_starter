import React from 'react';
import Router from 'next/router'
import UserMenu from '../../lib/header/UserMenu';

const user = {
  name: 'Alexander Pierce',
  title: 'Web Developer',
  joined: 'Nov. 2012',
  avatar: '/static/admin-lte/dist/img/user2-160x160.jpg',
  online: true,
};

function onLinkClick(link) {
  // eslint-disable-next-line no-alert
  //alert(`route to ${link.url}`);
  Router.push(link.url);
}

function onButtonClick(button) {
  // eslint-disable-next-line no-alert
  //alert(`button ${button.text} clicked`);
  Router.push(button.url);
}

export default function ({loginuser}) {
  if (loginuser) {
    //let loginuser = JSON.parse(window.localStorage.getItem('user'));
    user.dispName = loginuser.dispName;
    user.username = loginuser.username;
    user.title = 'title';
    user.joined = 'Nov. 2012';
    user.avatar = '/static/admin-lte/dist/img/user2-160x160.jpg';
  }
  return (
    <UserMenu
      image={user.avatar}
      name={user.username}
      title={`${user.dispName} - ${user.title}`}
      description={`Member since ${user.joined}`}
      links={[
        { key: 1, text: 'Followers', url: '/followers' },
        { key: 2, text: 'Sales', url: '/sales' },
        { key: 3, text: 'Friends', url: '/friends' },
      ]}
      buttons={[
        { key: 1, text: 'Profile', align: 'left', url: '/profile' },
        { key: 2, text: 'Sign out', url: '/logout' },
      ]}
      onLinkClick={onLinkClick}
      onButtonClick={onButtonClick}
    />
  );
}
