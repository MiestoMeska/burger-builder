import React from "react";

import classes from "./Navigationitems.module.css";
import NavigationItem from "./Navigationitem/Navigationitem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem onClick={props.clicked} link='/'>
        Burger Builder
      </NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem onClick={props.clicked} link='/orders'>
          Orders
        </NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem onClick={props.clicked} link='/auth'>
          Authenticate
        </NavigationItem>
      ) : (
        <NavigationItem onClick={props.clicked} link='/logout'>
          Log Out
        </NavigationItem>
      )}
    </ul>
  );
};
export default navigationItems;
