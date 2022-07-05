import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const history = useHistory();
  const handleOnClick = () => history.push("/main");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>COUNTRIES AND ACTIVITIES </h1>
        </div>
          <div className={styles.text}>
        
          </div>
        <button className={styles.button} onClick={handleOnClick}>
          Ingresar ahora
        </button>
      </div>
  );
};

export default Landing;
