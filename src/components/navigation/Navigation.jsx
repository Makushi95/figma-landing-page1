import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  margin: 0;
  padding-block: 1em;
  margin-inline: 20%;
  z-index: 12;

  a {
    color: #000;
    text-align: center;
    margin-right: 2em;
    font-family: var(--ff-quicksandBold);
    font-size: 30px;
    line-height: 22px;
    transition: 0.2s;
    padding-block: 24px;
    text-decoration: none;
    cursor: pointer;
  }

  a.active {
    opacity: 1;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 920px) {
    flex-flow: column nowrap;
    background-color: #fff;
    margin: 0;
    position: fixed;
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 50%;
    transition: transform 0.3s ease-in-out;
  }
`;

const Navigation = ({ open }) => {
  return (
    <Ul className="navigation" open={open}>
      <a to={"home"}>Home</a>
      <a to={"contact"}>Contact</a>
      <a to={"affiliate"}>Affiliate</a>
      <a to={"about"}>About</a>
      <a to={"faq"}>FAQ</a>
    </Ul>
  );
};

export default Navigation;
