import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const history = useHistory();            //Esta cosa porornga sirve para redireccionar a la url especifeicada

  function refreshPage() {                 //Para poder cambiar de paginas entre home y addCtivity
    history.push("/main");
    // window.location.reload(false);
  }

  return (
    <div className={styles.cnt}>
      <div className={styles.imagen}>
      <div className={styles.title}>
        <h1> COUNTRIES  </h1>
        </div></div>
        <div className={styles.section}>
      <button onClick={refreshPage} className={styles.btn}>
        HOME
      </button>
      <button
        onClick={() => history.push("/main/create_activity")}
        className={styles.btn}
        >
        ADD ACTIVITY
      </button>
        </div>
    </div>
  );
};

export default Nav;
