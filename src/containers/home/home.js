import React from 'react';
import {View, Text, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateMsg } from '../../store/actions/msg-action';

const Home = (props) => {

    // Le Hook 'useSelector' permet de consomer en lecture le contenu du store
    const msg = useSelector((state) => state.msg.content)

    // Le Hook 'useDispatch' permet de créer un objet pour envoyer les actions au store
    const dispatch = useDispatch();

    const sendAction = () => {
        // Utilisation du 'dispatch' pour déclancher une action
        dispatch(updateMsg('Mise a jours du message'));
    }

    return (
        <View>
            <Text>Home</Text>
            <Text>Message du store : {msg}</Text>
            <Button 
                title='Lancer une action Redux'
                onPress={sendAction} />
        </View>
    );
}

export default Home;