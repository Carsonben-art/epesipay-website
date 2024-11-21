import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/epesipay-logobg.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
      bg={scrolled ? "white" : "transparent"}
      boxShadow={scrolled ? "md" : "none"}
      transition="all 0.3s ease"
      py={2}
      px={4}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
        <Box>
          <RouterLink to="/">
            <Image src={logo} alt="Logo" height="70px" />
          </RouterLink>
        </Box>

        {/* Desktop Menu Links */}
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          gap={4}
        >
          {/* Company Menu */}
          <Menu>
            <MenuButton as={Button} variant="link" color="#3d3d3d">
              Company
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/about">
                About Us
              </MenuItem>
              <MenuItem as={RouterLink} to="/contacts">
                Contact Us
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Personal Menu */}
          <Menu>
            <MenuButton as={Button} variant="link" color="#3d3d3d">
              Personal
            </MenuButton>
            <MenuList>
              <MenuItem>
                <ScrollLink to="Services" smooth duration={500}>
                  Services
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Onboarding" smooth duration={500}>
                  Onboarding
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Pricing" smooth duration={500}>
                  Pricing
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Contacts" smooth duration={500}>
                  Contact Us
                </ScrollLink>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Business Menu */}
          <Menu>
            <MenuButton as={Button} variant="link" color="#3d3d3d">
              Business
            </MenuButton>
            <MenuList>
              <MenuItem>
                <ScrollLink to="Services" smooth duration={500}>
                  Services
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Onboarding" smooth duration={500}>
                  Onboarding
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Pricing" smooth duration={500}>
                  Pricing
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Contacts" smooth duration={500}>
                  Contact Us
                </ScrollLink>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Resources Menu */}
          <Menu>
            <MenuButton as={Button} variant="link" color="#3d3d3d">
              Resources
            </MenuButton>
            <MenuList>
              <MenuItem>
                <ScrollLink to="UserGuide" smooth duration={500}>
                  User Guide
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="FAQs" smooth duration={500}>
                  FAQs
                </ScrollLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Button variant="outline" color="#F4AE1A">
            Sign In
          </Button>
          <Button bg="#F4AE1A" color="white">
            Sign Up
          </Button>
        </Stack>

        {/* Mobile Menu */}
        <Box display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<RxHamburgerMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={RouterLink} to="/about">
                About Us
              </MenuItem>
              <MenuItem as={RouterLink} to="/contacts">
                Contact Us
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Services" smooth duration={500}>
                  Services
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Onboarding" smooth duration={500}>
                  Onboarding
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="Pricing" smooth duration={500}>
                  Pricing
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="UserGuide" smooth duration={500}>
                  User Guide
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink to="FAQs" smooth duration={500}>
                  FAQs
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <Button bg="#F4AE1A" color="white" width="100%">
                  Sign In
                </Button>
              </MenuItem>
              <MenuItem>
                <Button bg="#F4AE1A" color="white" width="100%">
                  Sign Up
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
