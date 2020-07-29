import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInputs';

function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {key: Math.random().toString(), value: goalTitle},
    ]);
  };

  return (
    <View>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
