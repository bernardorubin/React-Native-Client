import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuestionsListing from './components/questions-listing';
import QuestionDetails from './components/question-details';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => QuestionsListing,
  question: () => QuestionDetails
}));

export default class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="home" />
      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '30px',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
