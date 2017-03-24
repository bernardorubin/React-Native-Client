import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuestionDetails extends React.Component {

  static route = {
    navigationBar: {
      title: 'Question Details',
    }
  }

  render() {
    return <View>
            <Text>Details about one Question</Text>
           </View>;
  }
}
