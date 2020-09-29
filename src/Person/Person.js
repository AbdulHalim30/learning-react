import React from "react";
import classes from "./Person.css";

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} Years Old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
