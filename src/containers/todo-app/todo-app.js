import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from './screens/todo-list';
import TodoAdd from './screens/todo-add';

const Stack = createStackNavigator();

const TodoApp = () => {
    return (
        <Stack.Navigator initialRouteName='todo/list'>
            <Stack.Screen name='todo/list' component={TodoList} />
            <Stack.Screen name='todo/add' component={TodoAdd} />
        </Stack.Navigator>
    );
}

export default TodoApp;