import React from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { FloatingAction } from 'react-native-floating-action';

import TaskItem from '../../../components/task-item/task-item';
import { finishTask, deleteTask } from './../../../store/actions/todo-action';

const actions = [
    {
      text: 'Ajouter',
      icon: require('./../icons/icon-task.png'),
      name: 'add'
    }
];

const TodoList = () => {

    const todos = useSelector((state) => state.todoApp.todos);
    const dispatch = useDispatch();
    const nav = useNavigation();

    const renderItem = ({ item }) => (
        <TaskItem {...item}
            onTaskDelete={(id) => dispatch(deleteTask(id))}
            onTaskFinish={(id) => dispatch(finishTask(id))} />
    )

    const openScreenAdd = () => {
        nav.navigate('todo/add');
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FloatingAction
                color="#0FF"
                iconHeight={30}
                iconWidth={30}
                overrideWithAction
                actions={actions}
                onPressItem={openScreenAdd}
            />
        </View>
    );
}

export default TodoList;