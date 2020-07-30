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
      {id: Math.random().toString(), value: goalTitle},
    ]);
  };

  const removeGoalHandle = (goalId) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDeleteHandle={removeGoalHandle}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
