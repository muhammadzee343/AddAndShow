import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (inputtext) => {
    setEnteredGoal(inputtext);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
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
      <View>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
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
});
export default App;
