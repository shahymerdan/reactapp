import React from 'react';
import './Sidebar.css';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink smooth to='#prod1'>Esasy Menu</SidebarLink>
        <SidebarLink smooth to='#Feature'>Fast Food</SidebarLink>
        <SidebarLink smooth to=''>Çorbalar</SidebarLink>
        <SidebarLink smooth to='#Feature2'>Desertler</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute smooth to='#Contact'> Habarlaşmak üçin!</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
