import { createContext} from 'react';
import WeatherTLV from "../components/WeatherTLV";


const apiKey = "oDFyXIQANMkcMM4GkaR4JOPEPts3MFug";
const BASE_URL = 'http://dataservice.accuweather.com';

export const WeatherContext = createContext();

export const Home = (props) => {
    return (
        <>
            <h1>Home</h1>
            <main>
                <WeatherContext.Provider value={{ apiKey, BASE_URL }}>
                    <WeatherTLV />
                </WeatherContext.Provider>
            </main>
        </>
    )
}