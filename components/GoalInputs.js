import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (inputtext) => {
    setEnteredGoal(inputtext);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input Value"
        style={styles.Input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

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
  ListText: {
    fontSize: 20,
    justifyContent: 'center',
  },
});

export default GoalInput;
