import {useContext, useState, useEffect} from 'react';
import { WeatherContext } from './Home';
import { AddToFavorites } from './AddToFavorites';

const WeatherTLV = (props) => {  

    const { apiKey, BASE_URL } = useContext(WeatherContext);
    const [locationKey, setLocationKey] = useState('215854');

    const [weather, setWeather] = useState([]);
    const [weatherText, setWeatherText] = useState();
    const [weatherImg, setWeatherImg] = useState();
    const [cityName, setCityName] = useState('Tel Aviv');

    useEffect(() => {
        const getWeatherTLV = async () => {
        
            try {
                const res = await fetch(`${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
                const data = await res.json();

                console.log(data[0]);
                
                setWeather(data[0].Temperature.Metric.Value);
                setWeatherText(data[0].WeatherText);
                setWeatherImg(data[0].WeatherIcon);
                
            } catch (error) {
                console.log("Something wrong with fetch..");
            }
    
        };

        getWeatherTLV();
    }, [locationKey]); 

     // Load the image dynamically based on the weatherImg value
     useEffect(() => {
        const loadImage = async () => {
            if (weatherImg) {
                try {
                    const image = await import(`../images/${weatherImg}.png`);
                    //console.log(image);
                    setWeatherImg(image.default);
                } catch (error) {
                    console.log("Error loading image:", error);
                }
            }
        };

        loadImage();
    }, [weatherImg]);

    const handleInput = async (e) => {
        console.log(e.target.value);
        const city = e.target.value;

        try {
            const res = await fetch (`${BASE_URL}/locations/v1/cities/search?apikey=${apiKey}&q=${city}`);
            const data = await res.json();
            console.log(data[0].Key);
            
            setLocationKey(data[0].Key);
            setCityName(e.target.value)
        } catch (error) {
            console.log('City not found', error);
        }
    }
    

    return(
        <>

            <input type='text' onChange={(e) => handleInput(e)}/>

            <h3>{cityName}</h3>
            { <img src={weatherImg} alt="Weather Icon" />}
            <p>{weather} C</p>

            <div>
                <AddToFavorites />
            </div>

            <div>{weatherText}</div>
        </>
    )
}

export default WeatherTLV;