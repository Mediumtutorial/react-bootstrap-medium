import React, { useState } from 'react';
import Navbar from 'reactstrap/lib/Navbar'
import Nav from 'reactstrap/lib/Nav'
import NavbarBrand  from 'reactstrap/lib/NavbarBrand'
import Collapse  from 'reactstrap/lib/Collapse'
import NavbarToggler  from 'reactstrap/lib/NavbarToggler'
import NavItem  from 'reactstrap/lib/NavItem'
import NavLink  from 'reactstrap/lib/NavLink'

export default function ReactstrapCode() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
             <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
        </div>
    )
}
