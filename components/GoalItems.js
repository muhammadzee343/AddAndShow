import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.liststyle}>
      <Text style={styles.ListText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    borderColor: 'black',
    backgroundColor: '#dee3e0',
    padding: 10,
    margin: 2,
    borderWidth: 1,
  },
});

export default GoalItem;
