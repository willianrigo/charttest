import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AreaChartExample from './Chart'
import LayeredChartsExample from './LayeredCharts'
import BarChartHorizontalWithLabels from './BarChartHorizontal'
import GroupedBarWithLineCharts from './GroupedBarWithLineCharts'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <View>
        {/* <LayeredChartsExample/> */}
        {/* <BarChartHorizontalWithLabels /> */}
        <GroupedBarWithLineCharts/>
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
