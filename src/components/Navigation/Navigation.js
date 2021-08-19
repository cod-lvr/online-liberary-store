import  classes  from "./Navigation.module.css";
import { NavLink, Link, useParams } from "react-router-dom";

import Button from "../UI/Button";

const Navigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.navigation}>
        <NavLink to="/home" activeClassName={classes.active}>
          Home
        </NavLink>
        <NavLink to="/store" activeClassName={classes.active}>
          Store
        </NavLink>
        <Link>
          <button>Order Book</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
