 import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, 
        orderBy,
        orderByActivity,
        orderByName,
     } from '../../redux/actions';

import styles from './Filters.module.css';
const Filters = () => {                                         //SIN HJACER EL FILTRADO AUN
    const dispatch = useDispatch();

    const activities = useSelector(state => state.allActivities)

    console.log('yayaya',activities)


    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleOnContinent = (e) => {                //Para cuando la persona cambie de filtro se actualice dependiendo el tipo de filtrado
    dispatch(filterByContinent(e.target.value))       //despacha el valor.
    };

    const handleOnOrder = (e) => {                    
        dispatch(orderBy(e.target.value));
    };

    const handleOnActivity = (e) => {
        dispatch(orderByActivity(e.target.value));
    };

    const handleOnName = (e) => {
        dispatch(orderByName(e.target.value));
    };



    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////




    return (

        <div className={styles.container}>    


            <input className={styles.input}  type='text' onChange={handleOnName}  placeholder='Country name...'></input>  
            {/* <button value="" className={styles.searchButton}></button>    */}
            
            
            <div className={styles.filters}> 
            <label>Continent</label>  
            <label>Alphabet</label>  
            <label>Population</label> 
            <label>Activity</label>

            <select className={styles.placeHolder} onChange={handleOnContinent} >         
                <option value="id">-</option>    
                <option value='Africa'>Africa</option>    
                <option value='North America'>North America</option>   
                <option value='South America'>South America</option>  
                <option value='Asia'>Asia</option>    
                <option value='Europe'>Europe</option>    
                <option value='Oceania'>Oceania</option>
            </select>

            <select className={styles.placeHolder} value onChange={handleOnOrder} name="order" id="">
                <option value="">-</option>
                <option value="ASC">A-Z</option>
                <option value="DES">Z-A</option>
            </select>

              
            <select className={styles.placeHolder} value onChange={handleOnOrder} name="population" id="">   
                <option value="">-</option>   
                <option value="MAX">Most</option>   
                <option value="MIN">Less</option>   
            </select>   

            <select className={styles.placeHolder} onChange={handleOnActivity} name="activity" id="">
            <option value="">-</option>
                {
                   activities.map(a => (<option key={a.id} value={a.name}>{a.name}</option>
                                ))
                }

            </select>
            </div>
        </div>
    );
};

export default Filters;