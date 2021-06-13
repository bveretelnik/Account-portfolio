import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="4rem" /> <Span>Your Account</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#main">
          <NavLink>Головна</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#price">
          <NavLink>Ціни</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#startWork">
          <NavLink>Початок роботи</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Контакти</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/bogdan.veretelnik">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bohdan-veretelnik-15a834147">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/b_veretelnik">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
