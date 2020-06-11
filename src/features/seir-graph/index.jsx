import React from 'react'
import MaterialTable from 'material-table'
import { ResponsiveLine } from '@nivo/line'


function SEIRGraph() {
    // const { data } = useAsync() => {
    //     const response = await fetch("http://localhost:8080/")
    // }
    let data = [
        {
            "id": "japan",
            "color": "hsl(285, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 218
                },
                {
                    "x": "helicopter",
                    "y": 208
                },
                {
                    "x": "boat",
                    "y": 265
                },
                {
                    "x": "train",
                    "y": 205
                },
                {
                    "x": "subway",
                    "y": 216
                },
                {
                    "x": "bus",
                    "y": 99
                },
                {
                    "x": "car",
                    "y": 83
                },
                {
                    "x": "moto",
                    "y": 110
                },
                {
                    "x": "bicycle",
                    "y": 256
                },
                {
                    "x": "horse",
                    "y": 157
                },
                {
                    "x": "skateboard",
                    "y": 114
                },
                {
                    "x": "others",
                    "y": 158
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(336, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 167
                },
                {
                    "x": "helicopter",
                    "y": 94
                },
                {
                    "x": "boat",
                    "y": 215
                },
                {
                    "x": "train",
                    "y": 250
                },
                {
                    "x": "subway",
                    "y": 176
                },
                {
                    "x": "bus",
                    "y": 101
                },
                {
                    "x": "car",
                    "y": 253
                },
                {
                    "x": "moto",
                    "y": 77
                },
                {
                    "x": "bicycle",
                    "y": 185
                },
                {
                    "x": "horse",
                    "y": 299
                },
                {
                    "x": "skateboard",
                    "y": 297
                },
                {
                    "x": "others",
                    "y": 163
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(330, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 29
                },
                {
                    "x": "helicopter",
                    "y": 225
                },
                {
                    "x": "boat",
                    "y": 60
                },
                {
                    "x": "train",
                    "y": 166
                },
                {
                    "x": "subway",
                    "y": 175
                },
                {
                    "x": "bus",
                    "y": 46
                },
                {
                    "x": "car",
                    "y": 98
                },
                {
                    "x": "moto",
                    "y": 28
                },
                {
                    "x": "bicycle",
                    "y": 168
                },
                {
                    "x": "horse",
                    "y": 195
                },
                {
                    "x": "skateboard",
                    "y": 91
                },
                {
                    "x": "others",
                    "y": 102
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(157, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 40
                },
                {
                    "x": "helicopter",
                    "y": 10
                },
                {
                    "x": "boat",
                    "y": 188
                },
                {
                    "x": "train",
                    "y": 150
                },
                {
                    "x": "subway",
                    "y": 151
                },
                {
                    "x": "bus",
                    "y": 215
                },
                {
                    "x": "car",
                    "y": 273
                },
                {
                    "x": "moto",
                    "y": 26
                },
                {
                    "x": "bicycle",
                    "y": 89
                },
                {
                    "x": "horse",
                    "y": 111
                },
                {
                    "x": "skateboard",
                    "y": 245
                },
                {
                    "x": "others",
                    "y": 85
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(207, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 222
                },
                {
                    "x": "helicopter",
                    "y": 102
                },
                {
                    "x": "boat",
                    "y": 88
                },
                {
                    "x": "train",
                    "y": 3
                },
                {
                    "x": "subway",
                    "y": 133
                },
                {
                    "x": "bus",
                    "y": 32
                },
                {
                    "x": "car",
                    "y": 274
                },
                {
                    "x": "moto",
                    "y": 130
                },
                {
                    "x": "bicycle",
                    "y": 160
                },
                {
                    "x": "horse",
                    "y": 298
                },
                {
                    "x": "skateboard",
                    "y": 134
                },
                {
                    "x": "others",
                    "y": 33
                }
            ]
        }
    ];
    
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}
export { SEIRGraph }