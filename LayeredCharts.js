import React from 'react'
import { AreaChart, Grid, BarChart, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View } from 'react-native'
import GroupedBarCharts from './GroupedBarCharts'

export default class LayeredChartsExample extends React.PureComponent {

  render() {

      const data  = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
      const data2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ].reverse()

      return (
          <View style={ { height: 200 } }>
          <Grid/>
              {/* <AreaChart
                  style={ { flex: 1 } }
                  data={ data }
                  svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                  contentInset={ { top: 20, bottom: 20 } }
                  curve={ shape.curveNatural }
              >
              </AreaChart>
              <AreaChart
                  style={ StyleSheet.absoluteFill }
                  data={ data2 }
                  svg={{ fill: 'rgba(34, 128, 176, 0.5)' }}
                  contentInset={ { top: 20, bottom: 20 } }
                  curve={ shape.curveNatural }
              />
              <BarChart
                  style={ StyleSheet.absoluteFill }

                data={ data2 }
                svg={{fill: 'rgb(134, 65, 244)'}}
                contentInset={{ top: 30, bottom: 30 }}
              />
              <LineChart
                  style={ StyleSheet.absoluteFill }
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
              /> */}

              <GroupedBarCharts />
                  

          </View>
      )
  }

}