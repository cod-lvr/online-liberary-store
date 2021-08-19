import React from "react";
import classes from "./HomePage.module.css";
import Button from "../UI/Button";
import photo from '../../media/photo.jpg';

const HomePage = () => {
  return (
      <main className={classes.main}>
        <div className={classes.photo}>
          <img src={photo} alt="main photo" />
        </div>
        <div className={classes.content}>
          <h5>the biggest online listening store</h5>
          <h1>
            Welcome to <span>biggest</span> online liberary
          </h1>
          <div className={classes.actions}>
            <Button>order book</Button>
            <button className="btn-sec">Find a book</button>
          </div>
        </div>
      </main>

  );
};

export default HomePage;
