import React from 'react';
import SidebarWrapper from '../lib/sidebar/SidebarWrapper';
import UserPanel from '../containers/sidebar/UserPanel';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <UserPanel
        image="/images/no-avatar.png"
        name="John Doe"
      />
    </SidebarWrapper>
  );
}
