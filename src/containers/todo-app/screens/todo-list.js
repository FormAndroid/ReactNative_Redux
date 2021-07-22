import React from 'react';
import {View, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../../../components/task-item/task-item';

import {finishTask, deleteTask} from './../../../store/actions/todo-action';

const TodoList = () => {

    const todos = useSelector((state) => state.todoApp.todos);
    const dispatch = useDispatch();

    const renderItem = ({item}) => (
        <TaskItem {...item} 
            onTaskDelete={(id) => dispatch(deleteTask(id))}
            onTaskFinish={(id) => dispatch(finishTask(id))} />
    )

    return (
        <View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </View>
    );
}

export default TodoList;