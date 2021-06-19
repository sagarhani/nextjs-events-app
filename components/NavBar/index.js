import { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./styles";
import Link from "next/link";
import { useSession } from "next-auth/client";

export const NavBar = () => {
  const [session, loading] = useSession();
  const username = session?.user?.name;
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
        {!username && (
          <MenuLink>
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </MenuLink>
        )}
        {session && (
          <>
            <MenuLink>
              <Link href="/events/addNew">
                <a>Add Event</a>
              </Link>
            </MenuLink>
            <MenuLink>
              <Link href="/profile">
                <a>Hey, {username}</a>
              </Link>
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};
