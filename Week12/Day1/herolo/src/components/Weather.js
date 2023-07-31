import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./Home";
import Favorites from '../components/Favorites';

const Weather = (props) => {
    const { apiKey, BASE_URL } = useContext(WeatherContext);
    const [locationKey, setLocationKey] = useState("215854");

    const [weather, setWeather] = useState([]);
    const [weatherText, setWeatherText] = useState();
    const [weatherImg, setWeatherImg] = useState();
    const [forecast, setForecast] = useState([]);
    const [cityName, setCityName] = useState("Tel Aviv");
    const [favorites, setFavorites] = useState([]);
    

    useEffect(() => {
        const getWeather = async () => {
            try {
                const res = await fetch(
                    `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${apiKey}`
                );
                const data = await res.json();

                //console.log(data[0]);

                setWeather(data[0].Temperature.Metric.Value);
                setWeatherText(data[0].WeatherText);
                setWeatherImg(data[0].WeatherIcon);
            } catch (error) {
                console.log("Something wrong with fetch..");
            }
        };

        getWeather();

        const getForecast = async () => {

            const local = [];
           
            try {
                const res = await fetch(
                    `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`
                );
                const data = await res.json();

                //console.log(data);

                for (let item of data.DailyForecasts) {
                    let weekday = {
                        "date": item.Date,
                        "day": {
                            "temperature": item.Temperature.Maximum.Value,
                            "icon": item.Day.Icon,
                            "iconPhrase": item.Day.IconPhrase
                        },
                        "night": {
                            "temperature": item.Temperature.Minimum.Value,
                            "icon": item.Night.Icon,
                            "iconPhrase": item.Night.IconPhrase
                        }
                    };
                    local.push(weekday);
                }
                setForecast(local);
                console.log('Local: ', local);

            } catch (error) {
                console.log("Something wrong with fetch..");
            }
        }

        getForecast();
    }, [locationKey]);


    useEffect(() => {
        console.log('Forecast (Updated): ', forecast);
    }, [forecast]);


    // Load the image dynamically 
    const loadImage = async () => {
        if (weatherImg) {
            try {
                const image = await import(`../images/${weatherImg}.png`);
                
                setWeatherImg(image.default);
            } catch (error) {
                console.log("Error loading image:", error);
            }
        }
    };

    
    useEffect(() => {
        loadImage();
    }, [weatherImg]);

    const handleInput = async (e) => {
        //console.log(e.target.value);

        const city = e.target.value;

        if (city.length > 2) {
            try {
                const res = await fetch(
                    `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`
                );
                const data = await res.json();
                console.log(data[0].Key);

                setLocationKey(data[0].Key);
                setCityName(e.target.value);
            } catch (error) {
                console.log("City not found", error);
            }
        }
    };


    const handleAddToFavorites = () => {
        setFavorites([{cityKey: cityName}, ...favorites]);
        console.log('Favorites:', favorites);
    };

    const removeFromFavorites = () => {
        setFavorites((current) =>
          current.filter((city) => city !== cityName)
        );
        console.log('Favorites:', favorites)
    };


    return (
        <>
            <form className="search">
                <input
                    type="text"
                    onChange={(e) => handleInput(e)}
                    placeholder="Enter City..."
                />
            </form>
            

            <div className="currentCity">
                <div className="left">
                    <h3>{cityName}</h3>
                    {<img src={weatherImg} alt="Weather Icon" />}
                    <p>{weather} C</p>
                </div>
                
                <div className="right">
                    {Object.keys(favorites).includes(locationKey) 
                    ? 
                    <button onClick={removeFromFavorites}>Remove {cityName} from Favorites</button> 
                    :
                    <button onClick={handleAddToFavorites}>Add {cityName} to Favorites</button>
                    }
                </div>
                
                    
            </div>

            <div>{weatherText}</div>


            {forecast && forecast.length > 0 ? ( 
                <>
                <h3>Forecast for 5 days:</h3>
                <div className="forecast">
                    {forecast.map((item) => (
                    <div key={item.date}>
                        <p>Date: {item.date.slice(0, 10)}</p>
                        <p>Day: {item.day.temperature} C ({item.day.iconPhrase})</p>
                        <p>Night: {item.night.temperature} C ({item.night.iconPhrase})</p>
                    </div>
                    ))}
                </div>
                </>
            ) : (
                <p>Loading forecast...</p>
            )}

            
        </>
    );
};

export default Weather;
