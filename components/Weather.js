import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';
const apiKey = 'f532d90ad5e247a1ed3cf64f0d7e0bc2' //Apikey

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {              
   
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                           main: json.weather[0].main,
                           description: json.weather[0].description,
                           temp: json.main.temp
                       });
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.zipCode])
   
};