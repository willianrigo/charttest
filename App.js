import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AreaChartExample from './Chart'
import LayeredChartsExample from './LayeredCharts'


export default class App extends React.Component {
  render() {
    return (
      <View>
      <View><Text>Hello world</Text></View>
      <View>
        <LayeredChartsExample/>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
