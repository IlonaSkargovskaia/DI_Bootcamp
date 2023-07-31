import { useState, useEffect} from "react";

const apiKey = "oDFyXIQANMkcMM4GkaR4JOPEPts3MFug";
const BASE_URL = 'http://dataservice.accuweather.com';

export const Favorites = () => {
    
    const [favorites, setFavorites] = useState([
        {"215854": "tel aviv"}
    ])
    const [currents, setCurrents] = useState([])
    const displayCurrents = async () => {
        for (let item of favorites) {
            
            try {
                const currentUrl = `${BASE_URL}/currentconditions/v1/`;
                const response = await fetch(`${currentUrl}${Object.keys(item)[0]}?apikey=${apiKey}&details=false`);
                const data = await response.json();
                const weatherText = data[0].WeatherText;
                const temp = data[0].Temperature.Metric.Value;
                const cityKey = Object.keys(item)[0];
                const cityName = Object.values(item)[0];
                const j = {
                    [cityName]: {
                        weatherText,
                        temp,
                        cityKey,
                        cityName
                    }
                }
                setCurrents(prevCurrents => [j, ...prevCurrents]); 
                
            } catch(error) {
                console.log(error)
            }
        };
        setTimeout(() => {
            console.log("currents", currents)
        }, 2000);
        
    }


    useEffect(()=>{
        displayCurrents()
    }, [favorites])

    return(

        <div id="favorites">
            <h1>Favorite Places:</h1>
            {
                currents.map(item=>{
                    return (
                        <>
                        <h3>{Object.keys(item)[0]}</h3>
                        </>
                        
                    )
                })
            }

        </div>
    )
}

