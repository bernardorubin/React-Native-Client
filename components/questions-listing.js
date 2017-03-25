import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';

export default class QuestionsListing extends React.Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.showDetailsView = this.showDetailsView.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { questionsDs: ds.cloneWithRows([]) };
  }

  componentDidMount() {

    // TODO: Reasearch JWT tokens for authentication
    // TODO: For large and complex apps checkout REDUX
    //      in order to better manage the state in your application

    fetch('http://192.168.1.81:3000/api/v1/questions?api_key=d149885e7d41846b85a865337f6956ad')
    .then((response) => response.json())
    .then((json) => {
      this.setState({ questionsDs: this.state.questionsDs.cloneWithRows(json.questions) });
    });
  }

  static route = {
    navigationBar: {
      title: 'All Questions'
    }
  }

  genSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return <View style={styles.separator} key={rowID}></View>
  }

  renderRow(rowData) {
    return <TouchableHighlight onPress={() => this.showDetailsView(rowData.id) }>
            <Text>
              {rowData.title}
            </Text>
          </TouchableHighlight>;
  }

  showDetailsView(questionId) {
    console.log('>>>>> CLICK');
    this.props.navigator.push('question', { questionId: questionId });
  }

  render() {
    return <View>
             <Text>All Questions</Text>
               <ListView
                 dataSource={this.state.questionsDs}
                 enableEmptySections={true}
                 renderSeparator={this.genSeparator}
                 renderRow={this.renderRow}
               />
           </View>;
  }
}


const styles = StyleSheet.create({
  separator: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    marginTop: 5,
    marginBottom: 5

  },
});
