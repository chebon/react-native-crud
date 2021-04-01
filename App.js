import React, {useState} from 'react';
import { Text, SafeAreaView, StatusBar, FlatList, View, TouchableOpacity } from 'react-native';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const App = () => {
    const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed: true}, {text: "Make recipe video", completed: false}]);


    function addTodoItem(_text) {
        setTodoItems([...todoItems, {text:_text, completed: false}]);
    }


    function deleteTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }


    function completeTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr[_index].completed = true;
        setTodoItems(tempArr)
    }


    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
            <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1}}>
                <Text style={{fontSize: 36, fontWeight: 'bold'}}>Todo</Text>
                <FlatList
                    data={todoItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <TodoItem
                                item={item}
                                deleteFunction={() => deleteTodoItem(index)}
                                completeFunction={() => completeTodoItem(index)}
                            />
                        )
                    }}
                />
                <TodoInput onPress={addTodoItem} />
            </SafeAreaView>
        </>
    );
};

export default App;
