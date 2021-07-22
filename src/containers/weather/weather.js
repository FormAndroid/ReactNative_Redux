import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


const Weather = () => {

    const [city, setCity] = useState('');

    const onSearchWeather = () => {
        // Envoyer l'action dans Redux
        // TODO ...

        // Reset le formulaire
        setCity('');
    }
    
    return (
        <View>
            <Text>Utilisation d'un API avec Redux</Text>
            <Text>Entrer une ville</Text>
            <TextInput value={city} onChangeText={c => setCity(c)} />
            <Button title='Rechercher' onPress={onSearchWeather} />
            
        </View>
    );
}

export default Weather;