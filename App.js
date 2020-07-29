import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (inputtext) => {
    setEnteredGoal(inputtext);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {key: Math.random().toString(), value: enteredGoal},
    ]);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Input Value"
          style={styles.Input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.liststyle}>
            <Text style={styles.ListText}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  Input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '75%',
  },
  liststyle: {
    borderColor: 'black',
    backgroundColor: '#dee3e0',
    padding: 10,
    margin: 2,
    borderWidth: 1,
  },
  ListText: {
    fontSize: 20,
    justifyContent: 'center',
  },
});
export default App;
