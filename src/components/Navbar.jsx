import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "CV" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="George Kirpichev portfolio home">
        <span>GK</span>
        <strong>George Kirpichev</strong>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <button className="icon-button" type="button" aria-label="Navigation menu">
        <Menu size={20} />
      </button>
    </header>
  );
}
