import { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./styles";
import Link from "next/link";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Link href="/">
        <a>
          <Logo>
            Next<span>Events</span>
          </Logo>
        </a>
      </Link>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>
          <Link href="/events">
            <a>All Events</a>
          </Link>
        </MenuLink>
        <MenuLink>
          <Link href="/signin">
            <a>About</a>
          </Link>
        </MenuLink>
        <MenuLink>
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </MenuLink>
      </Menu>
    </Nav>
  );
};
