import React from 'react';
import SidebarWrapper from '../lib/sidebar/SidebarWrapper';
import UserPanel from '../containers/sidebar/UserPanel';
import SidebarMenu from '../containers/sidebar/SidebarMenu';

export default function Sidebar({user}) {
  return (
    <SidebarWrapper>
      <UserPanel
        loginuser={user}
      />
      <SidebarMenu />
    </SidebarWrapper>
  );
}
