import React from 'react'
import {View} from 'react-native'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

class GroupedBarCharts extends React.PureComponent {

    render() {

        const labels = [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
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

        console.log(data1.forEach((value) => {
            // console.log("Object value", Object.keys(value)[0])
            // console.log("Index: ", dataArray.indexOf(value.value))
            // console.log("Value: ", labels[dataArray.indexOf(value.value)])
    
        }));


        return (
            
            <View>
                <BarChart
                    style={ { height: 200 } }
                    data={ barData }
                    spacingInner={0.45}
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
                    style={{ marginHorizontal: -10 }}
                    data={ data1 } 
                    svg={{ fontSize: 10, fill: 'black' }}
                    formatLabel={(index, value) => labels[index-1]}
                />
            </View>
        )
    }
}

export default GroupedBarCharts;