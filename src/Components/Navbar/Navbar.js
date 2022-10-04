import "./navbar.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contAction, menuClickerAction, projAction } from "../../store";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [mobileClick, setMobileClick] = useState(true);
  const menuDispatch = useDispatch();
  const contDispatch = useDispatch();
  const projDispatch = useDispatch();

  const ClickClose = () => {
    projDispatch(projAction.change());
    setClose(!close);
  };

  const domain = useLocation();

  return (
    <div>
      <nav className="navi">
        <Link to="/" className="n-main">
          Mingyu Kil
        </Link>

        <div className={mobileClick ? "n-cont" : "n-cont-close"}>
          <NavLink to="/portrait" className="n-sub" activeclassname="active">
            Portrait
          </NavLink>
          <NavLink
            to="/project"
            className="n-sub"
            activeclassname="active"
            onClick={() => {
              ClickClose();
            }}
          >
            Project
          </NavLink>
          <ul className={`n-proj ${close ? "" : "close"}`}>
            <li>
              <NavLink
                to="/palace"
                className="p-sub"
                activeclassname="active"
                onClick={() => {
                  menuDispatch(menuClickerAction.makeFalse());
                }}
              >
                Korean Palace
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coldtree"
                className="p-sub"
                activeclassname="active"
              >
                Memories
              </NavLink>
            </li>
            <li>
              <NavLink to="/archtr" className="p-sub" activeclassname="active">
                Architecture
              </NavLink>
            </li>
            <li>
              <NavLink to="/sea" className="p-sub" activeclassname="active">
                See the Sea
              </NavLink>
            </li>
          </ul>

          <Link to="/about" className="n-about">
            About
          </Link>
        </div>

        <MenuIcon
          sx={{ fontSize: 45 }}
          color="#565453"
          className="n-menuicon"
          onClick={() => {
            if (domain.pathname === "/project") {
              contDispatch(contAction.change());
              setMobileClick(!mobileClick);
            } else {
              menuDispatch(menuClickerAction.change());
              setMobileClick(!mobileClick);
            }
          }}
        />
      </nav>
    </div>
  );
};

export default Navbar;
