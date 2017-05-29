import React from 'react';
import SidebarWrapper from '../lib/sidebar/SidebarWrapper';
import UserPanel from '../containers/sidebar/UserPanel';

export default function Sidebar({user}) {
  return (
    <SidebarWrapper>
      <UserPanel
        loginuser={user}
      />
    </SidebarWrapper>
  );
}
