import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <ul>grasshopper</ul>
      <ul className="lg:hidden">
        <MenuIcon />
      </ul>
      <ul className="hidden lg:flex">
        <li>What is coding</li>
        <li>Curriculum</li>
        <li>Glossary</li>
        <li>About Us</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

export default Header;
