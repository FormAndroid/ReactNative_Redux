import React, { useState } from 'react';
import { Button, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { weatherFetch } from '../../store/actions/weather-action';


const Weather = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const {isLoading, data, error} = useSelector((state) => state.weather)

    const onSearchWeather = () => {
        // Envoyer l'action dans Redux
        dispatch(weatherFetch(city));

        // Reset le formulaire
        setCity('');
    }
    
    return (
        <View>
            <Text>Utilisation d'un API avec Redux</Text>
            <Text>Entrer une ville</Text>
            <TextInput value={city} onChangeText={c => setCity(c)} />
            <Button title='Rechercher' onPress={onSearchWeather} />
            
            {isLoading ? (
                <ActivityIndicator color='#f00' size='small' />
            ) : (error ? (
                <Text>{error}</Text>
            ) : (data && (
                <Text>{data.city} : {data.temp} °c / {data.desc}</Text>
            )))}
        </View>
    );
}

export default Weather;