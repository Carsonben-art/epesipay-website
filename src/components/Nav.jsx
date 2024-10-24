import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/epesipay-logobg.png'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links ${scrolled ? 'scrolled' : ''}`}>
        <Link to="Home" smooth={true} duration={500}>Home</Link>
        <Link to="Services" smooth={true} duration={500}>Services</Link>
        <Link to="About" smooth={true} duration={500}>About us</Link>
        <Link to="Onboarding" smooth={true} duration={500}>Onboarding</Link>
        <Link to="Contacts" smooth={true} duration={500}>Contacts</Link>
      </div>
      <div className="download-btn">
       <a href="https://play.google.com/store/apps/details?id=com.futurizac.epesipay" target='_blank'>
        <Button>Download</Button>
       
       </a>
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
            <MenuItem>
              <Link to="Home" smooth={true} duration={500}>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="Services" smooth={true} duration={500}>Services</Link>
            </MenuItem>
            <MenuItem>
              <Link to="About" smooth={true} duration={500}>About us</Link>
            </MenuItem>
            <MenuItem>
              <Link to="Onboarding" smooth={true} duration={500}>Onboarding</Link>
            </MenuItem>
            <MenuItem>
              <Link to="Contacts" smooth={true} duration={500}>Contacts</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
