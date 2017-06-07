import React from 'react';

import UserPanel from '../../lib/sidebar/UserPanel';

const user = {
  name: 'Alexander Pierce',
  title: 'Web Developer',
  joined: 'Nov. 2012',
  avatar: '/static/admin-lte/dist/img/user2-160x160.jpg',
  isOnline: true,
};

export default function ({loginuser}) {
  if (loginuser) {
    //let loginuser = JSON.parse(window.localStorage.getItem('user'));
    user.dispName = loginuser.dispName;
    user.username = loginuser.username;
    user.title = 'title';
    user.joined = 'Nov. 2012';
    user.avatar = '/static/admin-lte/dist/img/user2-160x160.jpg';
  }
  const onlineIcon = 'fa fa-circle text-success';
  const offlineIcon = 'fa fa-circle text-danger';
  const statusIcon = user.isOnline ? onlineIcon : offlineIcon;
  const statusText = user.isOnline ? 'Online' : 'Offline';
  return (
    <UserPanel
      image={user.avatar}
      name={user.dispName}
      statusIcon={statusIcon}
      statusText={statusText}
    />
  );
}
