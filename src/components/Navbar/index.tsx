import { useState, MouseEvent } from "react";
import DownArrow from "../../assets/icons/DownArrow";
import Logo from "../../assets/icons/Logo";
import Search from "../../assets/icons/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.scss";

const navItems = [
  { href: "#qualifications", label: "Qualifications" },
  { href: "#organizations", label: "Organizations" },
  { href: "#research", label: "Research & Analysis" },
  { href: "#lorem", label: "Lorem Ipsum" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <MenuIcon /> : <MenuIcon />}
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={handleNavigation}>
                {label} <DownArrow />
              </a>
            </li>
          ))}
          <li>
            <Search />
          </li>
          <li>
            <button
              className="enrollment-btn"
              onClick={() => alert("Please enroll yourself")}
            >
              Enrolment
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
