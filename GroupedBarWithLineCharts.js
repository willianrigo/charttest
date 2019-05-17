import React from 'react'
import {View, ScrollView} from 'react-native'
import { BarChart, Grid, XAxis, LineChart } from 'react-native-svg-charts'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import * as shape from 'd3-shape'

import { Dimensions } from "react-native";

const constants = {
    chartHeight: Dimensions.get('window').height / 2,
    yMax: 1500,
    lineValue: 750
}


const Tooltip = ({ x, y, dataPoint, yPos}) => {

    console.log("Call", yPos)
    return (
    <G
        x={ x(5) - (75 / 2) }
        key={ 'tooltip' }
        onPress={ () => console.log('tooltip clicked') }
    >
        <G y={yPos}>
            <Rect
                height={ 40 }
                width={ 75 }
                stroke={ 'grey' }
                fill={ 'white' }
                ry={ 0 }
                rx={ 10 }
            />
            <Text
                x={ 75 / 2 }
                dy={ 20 }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
                stroke={ 'rgb(134, 65, 244)' }
            >
                { `${dataPoint}ºC` }
            </Text>
        </G>
        <G x={ 75 / 2 }>
            {/* <Line
                y1={ 50 + 40 }
                y2={ y(data[ 5 ]) }
                stroke={ 'grey' }
                strokeWidth={ 2 }
            /> */}
            {/* <Circle
                cy={ y(data[ 5 ]) }
                r={ 6 }
                stroke={ 'rgb(134, 65, 244)' }
                strokeWidth={ 2 }
                fill={ 'white' }
            /> */}
        </G>
    </G>
    )
}

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]


class GroupedBarWithLineCharts extends React.PureComponent {

    render() {

        // const labels = [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
            // .map((value) => ({ value }))
        const dataArray = [ 46, 38, 25, 47, 73, 50, 40 ]
        const dataObject = dataArray
            .map((value) => ({ value }))
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

        const CUT_OFF = 50

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
            <View>
            <ScrollView horizontal={true} style={ { height: 400 } }>
                <View styles={{height: "100%", width: "100%"}}>
                <BarChart
                    style={ { height: "90%", width: 500, position: "relative" } }
                    // data={ barData }
                    data={ barData }
                    spacingInner={0.25}lç
                    yAccessor={({ item }) => item.value}
                    svg={{
                        fill: 'green',
                    }}
                    yMax={constants.yMax}
                    // contentInset={ { top: 30, bottom: 30, left: 10, right: 10 } }
                    { ...this.props }
                >
                
                
                <Grid/>

                </BarChart>

                <LineChart
                    style={ { height: "90%", width: 200, position: "absolute"} }
                    data={ data }
                    svg={{ stroke: 'rgb(0, 0, 255)' }}
                    contentInset={ { top: 20, bottom: 20 } }
                    yMax={200}
                >

                {data.map(function(dataPoint, yPos = 20){
                    yPos = yPos + 1000
                    return <Tooltip yPos={yPos}/>;
                })}

                </LineChart>
                
                <View
                    style={{
                        borderBottomColor: 'red',
                        borderBottomWidth: 1,
                        position: "absolute",
                        top: constants.chartHeight - ((constants.lineValue) / (constants.yMax) * constants.chartHeight) - 1,
                        left: 0,
                        width: "100%",
                        zIndex: 99
                    }}
                /> 
                

                <XAxis
                    style={{ height: "10%"}}
                    data={ data1 } 
                    svg={{ fontSize: 15, fill: 'black' }}
                    formatLabel={(index, value) => labels[index-1]}
                />

                </View>
            </ScrollView>
            </View>
        )
    }
}

export default GroupedBarWithLineCharts;