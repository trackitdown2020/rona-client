import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { DashboardBase } from '../features/dashboard-base'
import { VerticalTabs } from '../components/VerticalTabs';
import { ResponsiveLine } from '@nivo/line'
// import { MyResponsiveLine } from './components/LineGraph'
let data = [
  {
    "id": "japan",
    "color": "hsl(260, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 140
      },
      {
        "x": "helicopter",
        "y": 53
      },
      {
        "x": "boat",
        "y": 16
      },
      {
        "x": "train",
        "y": 154
      },
      {
        "x": "subway",
        "y": 286
      },
      {
        "x": "bus",
        "y": 93
      },
      {
        "x": "car",
        "y": 171
      },
      {
        "x": "moto",
        "y": 136
      },
      {
        "x": "bicycle",
        "y": 296
      },
      {
        "x": "horse",
        "y": 28
      },
      {
        "x": "skateboard",
        "y": 38
      },
      {
        "x": "others",
        "y": 5
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(338, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 43
      },
      {
        "x": "helicopter",
        "y": 279
      },
      {
        "x": "boat",
        "y": 156
      },
      {
        "x": "train",
        "y": 235
      },
      {
        "x": "subway",
        "y": 231
      },
      {
        "x": "bus",
        "y": 231
      },
      {
        "x": "car",
        "y": 208
      },
      {
        "x": "moto",
        "y": 246
      },
      {
        "x": "bicycle",
        "y": 221
      },
      {
        "x": "horse",
        "y": 174
      },
      {
        "x": "skateboard",
        "y": 27
      },
      {
        "x": "others",
        "y": 224
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(295, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 218
      },
      {
        "x": "helicopter",
        "y": 287
      },
      {
        "x": "boat",
        "y": 97
      },
      {
        "x": "train",
        "y": 209
      },
      {
        "x": "subway",
        "y": 101
      },
      {
        "x": "bus",
        "y": 244
      },
      {
        "x": "car",
        "y": 286
      },
      {
        "x": "moto",
        "y": 293
      },
      {
        "x": "bicycle",
        "y": 226
      },
      {
        "x": "horse",
        "y": 187
      },
      {
        "x": "skateboard",
        "y": 204
      },
      {
        "x": "others",
        "y": 98
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(346, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 190
      },
      {
        "x": "helicopter",
        "y": 110
      },
      {
        "x": "boat",
        "y": 249
      },
      {
        "x": "train",
        "y": 49
      },
      {
        "x": "subway",
        "y": 7
      },
      {
        "x": "bus",
        "y": 97
      },
      {
        "x": "car",
        "y": 112
      },
      {
        "x": "moto",
        "y": 229
      },
      {
        "x": "bicycle",
        "y": 288
      },
      {
        "x": "horse",
        "y": 152
      },
      {
        "x": "skateboard",
        "y": 115
      },
      {
        "x": "others",
        "y": 82
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(29, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 241
      },
      {
        "x": "helicopter",
        "y": 286
      },
      {
        "x": "boat",
        "y": 87
      },
      {
        "x": "train",
        "y": 156
      },
      {
        "x": "subway",
        "y": 214
      },
      {
        "x": "bus",
        "y": 116
      },
      {
        "x": "car",
        "y": 230
      },
      {
        "x": "moto",
        "y": 13
      },
      {
        "x": "bicycle",
        "y": 267
      },
      {
        "x": "horse",
        "y": 222
      },
      {
        "x": "skateboard",
        "y": 190
      },
      {
        "x": "others",
        "y": 148
      }
    ]
  }
]
const tabs = [
  {
    label: "Maps",
    component: () => (
      <>
        <h1> Test </h1>
      </>
    ),
  },
  {
    label: "Heat Maps",
    component: () => <h1> Heat Map </h1>,
  },
  {
    label: "Chart 1",
    component: () => <h1> Chart 1 </h1>,
  },
];

const renderVerticalTabs = () => {
  return (
    <VerticalTabs tabs={tabs} />
  )
}

const renderLineGraph = () => {
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


function Home() {
  return (
    <DashboardBase
      renderContent={renderLineGraph}
    />
  );
}

export { Home };