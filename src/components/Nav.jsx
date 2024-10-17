import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className='nav'>
      <div className="logo-container">
        <h1>Epesipay</h1>
      </div>
      <div className="nav-links">
        <Link to="Home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="Services" smooth={true} duration={500}>
          Services
        </Link>
        <Link to="About" smooth={true} duration={500}>
          About us
        </Link>
        <Link to="Onboarding" smooth={true} duration={500}>
          Onboarding
        </Link>
        <Link to="Contacts" smooth={true} duration={500}>
          Contacts
        </Link>
      </div>
      <div className="download-btn">
        <Button>Download</Button>
      </div>
      <div className="menu-container">
      <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<RxHamburgerMenu />}
            variant='outline'
          />
          <MenuList>
            <MenuItem >
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to="Services" smooth={true} duration={500}>
              Services
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to="About" smooth={true} duration={500}>
              About us
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to="Onboarding" smooth={true} duration={500}>
              Onboarding
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to="Contacts" smooth={true} duration={500}>
              Contacts
            </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Nav