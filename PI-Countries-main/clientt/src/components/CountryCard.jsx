import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountry } from '../redux/actions';

import styles from './CountryCard.module.css'
const CountryCard = ({ country }) => {

    const dispatch = useDispatch();
    // console.log("SHOW ACTIVITIES", country);

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
            {/* <div className={styles.name}> */}
            <h2 className={styles.name}>{country.name}</h2> 
            <img src={country.flags} alt={country.name} className={styles.img} />
            <div className={styles.info}>
                <div className={styles.info1}>
                    <NavLink onClick={() => {dispatch(getCountry(country.id))}} className={styles.button} to={`/main/detail/:${country.name}`}> 
                    <h1 className={styles.h1}>More</h1> 
                    </NavLink>
                    
                    <p className={styles.p}>Continent:  {country.continent}</p>
                    <p className={styles.p}>Capital:  {country.capital}</p>
                </div>
                </div>
            </div>
            </div>
        // </div>
    );
};

export default CountryCard;