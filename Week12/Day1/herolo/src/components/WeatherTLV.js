import {useContext, useState, useEffect} from 'react';
import { WeatherContext } from './Home';

const WeatherTLV = (props) => {

    

    const { apiKey, BASE_URL } = useContext(WeatherContext);
    const locationKeyTLV = '215854';

    const [weatherTLV, setWeatherTLV] = useState([]);
    const [weatherTextTLV, setWeatherTextTLV] = useState();
    const [weatherImg, setWeatherImg] = useState();

    useEffect(() => {
        const getWeatherTLV = async () => {
        
            try {
                const res = await fetch(`${BASE_URL}/currentconditions/v1/${locationKeyTLV}?apikey=${apiKey}`);
                const data = await res.json();

                console.log(data[0]);
                
                setWeatherTLV(data[0].Temperature.Metric.Value);
                setWeatherTextTLV(data[0].WeatherText);
                setWeatherImg(data[0].WeatherIcon);
                
            } catch (error) {
                console.log("Something wrong with fetch..");
            }
    
        };

        getWeatherTLV();
    }, []); 

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
    

    return(
        <>
            <h3>Tel Aviv</h3>
            { <img src={weatherImg} alt="Weather Icon" />}
            <p>{weatherTLV} C</p>
            <p>{weatherTextTLV}</p>
        </>
    )
}

export default WeatherTLV;