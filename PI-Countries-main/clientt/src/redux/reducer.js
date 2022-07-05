import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    CREATE_ACTIVITY,
    UNMOUNT_ALL_COUNTRIES,
    FILTER_BY_CONTINENT,
    ORDER_COUNTRIES,
    ORDER_POPULATION,
    ORDER_ACTIVITY,
    GET_ALL_ACTIVITIES,
    ORDER_BY_NAME
} from "./actions";

const initialState = {
    allCountries: [],
    countries: [],
    country: { activities: [] },
    allActivities: [],
    activity: {},

};







//__________________________________________________________________________________________________________________________________

const rootReducer = (state = initialState, { payload, type, }) => {
    // console.log('hola', state)
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,    //  FIJARSE STATES
                allCountries: payload
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: payload,
            };
        case CREATE_ACTIVITY:
            return {
                ...state,
                countries: state.countries.concat(payload),
                activity: payload
            };
        case UNMOUNT_ALL_COUNTRIES:
            return {
                ...state,
                countries: [],

            };

        //  __________________________________________________________________________________________________________________________________
        case ORDER_BY_NAME:
            return {
                ...state,
               countries: (payload) ?
                state.allCountries.filter(country => country.name.toLowerCase().includes(payload))  :                
                state.allCountries
                
            };



        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: state.allCountries.filter(country => country.continent === payload),

            };

        case ORDER_COUNTRIES:
            return {
                ...state,
                countries: (payload === 'ASC') ?
                    state.countries.sort(function (a, b) {
                        return a.name.localeCompare(b.name)
                    }) :
                    state.countries.sort(function (a, b) {
                        return b.name.localeCompare(a.name)
                    })
            };


        //__________________________________________________________________________________________________________________________________
        case ORDER_POPULATION:
            let sortedPopul = (payload === 'MAX') ?
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1
                    }
                    return 0;

                });
            return {
                ...state,
                countries: sortedPopul
            };



        //__________________________________________________________________________________________________________________________________
        case ORDER_ACTIVITY:
            let countriesWithActivity = state.allCountries;
            countriesWithActivity = countriesWithActivity.filter(c => c.activities[0] !== undefined)
            return {
                ...state,
                countries: countriesWithActivity.filter(country => country.activities[0].name === payload)
            };      

            
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: payload
            }

        default:
            return state;
    }

};

export default rootReducer;