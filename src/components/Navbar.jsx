import { NavbarItems } from "../constant";
import Button from "./Button";
import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content ">
          {NavbarItems.map((items) => (
            <li key={items.title}>
              <a href={items.href}>{items.title}</a>
            </li>
          ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/logo/Exclude.svg" alt="" className="font-mplus1" />
          GreenBank
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 font-mplus1">
          {NavbarItems.map((items) => (
            <li key={items.title}>
              <a href={items.href}>{items.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Button text="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
