import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigationitem.module.css";

const navigationItem = (props) => (
  <li onClick={props.onClick} className={classes.NavigationItem}>
    <NavLink to={props.link} exact activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
