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
  Text,
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
      bg={scrolled ? "rgba(255, 255, 255, 0.4)" : "transparent"}
      boxShadow={scrolled ? "md" : "none"}
      backdropFilter={scrolled ? "blur(5px)" : "none"} // Glass effect for scrolled nav
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
            <MenuButton as={Button} variant="link" color="#0087D0">
              Company
            </MenuButton>
            <MenuList
              bg="rgba(255, 255, 255, 0.8)" // Transparent background
              backdropFilter="blur(10px)" // Blur effect
            >
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
            <MenuButton as={Button} variant="link" color="#0087D0">
              Personal
            </MenuButton>
            <MenuList bg="rgba(255, 255, 255, 0.8)" backdropFilter="blur(10px)">
              <MenuItem as={RouterLink} to="/services">
                Services
              </MenuItem>
              <MenuItem as={RouterLink} to="/onboarding">
                  Onboarding
              </MenuItem>
              <MenuItem as={RouterLink} to="/pricing">
                  Pricing
              </MenuItem>
              <MenuItem as={RouterLink} to="/contacts">
                  Contact Us
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Business Menu */}
          <Menu>
            <Text as={RouterLink}  color="#0087D0" to="/business" fontWeight={'bold'}>
              Business
            </Text>
          </Menu>

          {/* Resources Menu */}
          <Menu>
            <MenuButton as={Button} variant="link" color="#0087D0">
              Resources
            </MenuButton>
            <MenuList bg="rgba(255, 255, 255, 0.8)" backdropFilter="blur(10px)">
              <MenuItem as={RouterLink}  to="/guide">
                  User Guide
              </MenuItem>
              <MenuItem as={RouterLink}  to="/faqs">
                  FAQs
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
            <MenuList
              bg="rgba(255, 255, 255, 0.8)" // Glass effect
              backdropFilter="blur(10px)"
            >
              <MenuItem as={RouterLink} to="/about">
                About Us
              </MenuItem>
              <MenuItem as={RouterLink} to="/contacts">
                Contact Us
              </MenuItem>
              <MenuItem as={RouterLink} to="/services">
                Services
              </MenuItem>
              <MenuItem as={RouterLink} to="/onboarding">
                
                  Onboarding
              </MenuItem>
              <MenuItem as={RouterLink} to="/business">
                
                  Business
              </MenuItem>
              <MenuItem as={RouterLink} to="/pricing">
               
                  Pricing
                
              </MenuItem>
              <MenuItem as={RouterLink} to="/guide">
                
                  User Guide
               
              </MenuItem>
              <MenuItem as={RouterLink} to="/faqs">
               
                  FAQs
               
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
