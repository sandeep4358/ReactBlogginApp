import { NavLink as ReactLink } from 'react-router-dom';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  NavbarText} from 'reactstrap';

/**
 * @Author created by ska first react project. 26/09/2023
 * @returns 
 */  
const CustomNavbar = () =>{
  const [isOpen,setIsOpen] = useState(false);

    return (
      <div>
        <Navbar color="dark" 
                dark
                expand="md"
                fixed=''
        >
          <NavbarBrand tag={ReactLink} 
                       to="/Home">
                       MyBlog
          </NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/Login">Login</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink  tag={ReactLink} to="/Signup">Signup</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem> Option 1 </DropdownItem>
                  <DropdownItem> Option 2 </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Contact</NavbarText>
          </Collapse>
        </Navbar>
      </div>
      ); 
}

export default CustomNavbar;
