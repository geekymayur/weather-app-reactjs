import { useState, useEffect } from "react";


const getWeather = (city) => {
    const [data, setData] = useState({});
    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a02caaedb7f5180cd72e9ece23c352fa`).then((res) => res.json()).then((res) => setData(res));

    }, [city])


    return data;
}

export default getWeather;
