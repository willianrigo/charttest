import React from 'react'
import {View} from 'react-native'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { Line } from 'react-native-svg'

import { Dimensions } from "react-native";

class GroupedBarCharts extends React.PureComponent {

    render() {

        // const labels = [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
            // .map((value) => ({ value }))
        const dataArray = [ 14, 1, 1000, 95, 94, 24, 8, 85, 91, 35, 53, 53 ]
        // const data1 = dataArray
        //     .map((value) => ({ value }))
        // const data2 = [ 24, 28, 93, 77, 42, 62, 52, 87, 21, 53, 78, 62 ]
        //     .map((value) => ({ value }))
        const data1 = [
            { label: 'Jan', value: 500 },
            { label: 'Feb', value: 312 },
            { label: 'Mar', value: 424 },
            { label: 'Apr', value: 745 },
            { label: 'May', value: 89 },
            { label: 'Jun', value: 434 },
            { label: 'Jul', value: 650 },
            { label: 'Aug', value: 980 },
            { label: 'Sep', value: 123 },
            { label: 'Oct', value: 186 },
            { label: 'Nov', value: 689 },
            { label: 'Dec', value: 643 }
          ]

        const labels = data1.map((obj) => {
            return obj.label
        })

        console.log(labels)

          

          const data2 = [
            { label: 'Jan', value: 500 },
            { label: 'Feb', value: 312 },
            { label: 'Mar', value: 424 },
            { label: 'Apr', value: 745 },
            { label: 'May', value: 89 },
            { label: 'Jun', value: 434 },
            { label: 'Jul', value: 650 },
            { label: 'Aug', value: 980 },
            { label: 'Sep', value: 123 },
            { label: 'Oct', value: 186 },
            { label: 'Nov', value: 689 },
            { label: 'Dec', value: 643 }
          ]

        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'rgb(134, 65, 244)',
                },
            },
            {
                data: data2,
            },
        ]


        return (
            
            <View styles={{width: Dimensions.get('window').width}}>
                <BarChart
                    style={ { height: 400, width: "100%" } }
                    data={ barData }
                    spacingInner={0.25}
                    yAccessor={({ item }) => item.value}
                    svg={{
                        fill: 'green',
                    }}
                    contentInset={ { top: 30, bottom: 30, left: 10, right: 10 } }
                    { ...this.props }
                >
                    <Grid/>
                </BarChart>

                <XAxis
                    style={{ height: 15}}

                    data={ data1 } 
                    svg={{ fontSize: 15, fill: 'black' }}
                    formatLabel={(index, value) => labels[index-1]}
                />
            </View>
        )
    }
}

export default GroupedBarCharts;