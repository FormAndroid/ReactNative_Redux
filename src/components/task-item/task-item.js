import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, Button } from 'react-native';

const TaskItem = (props) => {
    const { id, name, desc, limitDate, isFinish } = props;
    const { onTaskFinish, onTaskDelete } = props;

    const onFinish = () => {
        onTaskFinish(id);
    }
    const onDelete = () => {
        onTaskDelete(id);
    }

    return (
        <View style={style.container}>
            <View style={style.info}>
                <Text style={style.title}>{name}</Text>
                <Text style={style.desc}>{desc}</Text>
                <Text>{isFinish && 'Fini !'}</Text>
            </View>
            <View style={style.interaction}>
                <View style={style.btn}>
                    <Button title='Terminer' onPress={onFinish} />
                </View>
                <View style={style.btn}>
                    <Button title='Supprimer' onPress={onDelete}  />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 40
    },
    desc: {
        fontSize: 20,
        fontStyle: 'italic'
    },
    container: {
        flex:1,
        flexDirection: 'row',
        minHeight: 100,
        marginBottom: 20,
        padding: 10
    },
    info: {
        flex: 1,
        flexDirection: 'column',
    },
    interaction: {
        flexDirection: 'column',
        padding:5,
        justifyContent: 'space-between',
        height: 100
    },
    btn: {
        width: 100
    }
});


TaskItem.defaultProps = {
    onTaskFinish: () => {},
    onTaskDelete: () => {}
}

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    limitDate: PropTypes.instanceOf(Date).isRequired,
    isFinish: PropTypes.bool.isRequired,
    onTaskFinish : PropTypes.func,
    onTaskDelete: PropTypes.func
}

export default TaskItem;