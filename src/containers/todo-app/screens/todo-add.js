import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/actions/todo-action';

const TodoAdd = () => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigation();

    const onTaskAdd = () => {
        // TODO : Replace date by DatePicker => https://github.com/react-native-datetimepicker/datetimepicker
        const now = new Date();

        const task = {
            name,
            desc,
            limitDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10)
        }

        // Envois de la tache dans le store
        dispatch(addTask(task));

        // Retour sur la page de la liste
        nav.goBack();
    }

    return (
        <View>
            <Text>Nom de la tache</Text>
            <TextInput value={name} onChangeText={text => setName(text)}
                        underlineColorAndroid='#0FF' />
            <Text>Description</Text>
            <TextInput value={desc} onChangeText={text => setDesc(text)} 
                        underlineColorAndroid='#0FF' />

            <Button title='Ajouter'
                    onPress={onTaskAdd} />
        </View>
    );
}

export default TodoAdd;