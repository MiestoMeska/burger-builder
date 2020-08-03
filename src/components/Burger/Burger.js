import React from "react";

import classes from "./Burger.module.css";
import BurgerIngriedent from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngriedent key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngriedent type='bread-top' />
      {transformedIngredients}
      <BurgerIngriedent type='bread-bottom' />
    </div>
  );
};

export default burger;
