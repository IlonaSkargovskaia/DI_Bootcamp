import { createContext} from 'react';
import Weather from "./Weather";


const apiKey = "oDFyXIQANMkcMM4GkaR4JOPEPts3MFug";
const BASE_URL = 'http://dataservice.accuweather.com';

export const WeatherContext = createContext();

export const Home = (props) => {
    return (
        <>
            <WeatherContext.Provider value={{ apiKey, BASE_URL }}>
                <Weather />
            </WeatherContext.Provider>
            
        </>
    )
}