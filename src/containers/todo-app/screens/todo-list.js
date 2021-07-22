import React from 'react';
import {View, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../../../components/task-item/task-item';
import { FAB } from 'react-native-elements';

import {finishTask, deleteTask} from './../../../store/actions/todo-action';
import { useNavigation } from '@react-navigation/native';

const TodoList = () => {

    const todos = useSelector((state) => state.todoApp.todos);
    const dispatch = useDispatch();
    const nav = useNavigation();

    const renderItem = ({item}) => (
        <TaskItem {...item} 
            onTaskDelete={(id) => dispatch(deleteTask(id))}
            onTaskFinish={(id) => dispatch(finishTask(id))} />
    )

    const openScreenAdd = () => {
        nav.navigate('todo/add');
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            <FAB 
                title='Add'
                placement='right'
                size='small'
                color='#00FFFF'
                onPress={openScreenAdd} />
        </View>
    );
}

export default TodoList;