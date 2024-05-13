import { AreaChart, DonutChart, Legend } from '@tremor/react';

const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      'Actual Sales': 2338,
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      'Actual Sales': 2103,
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      'Actual Sales': 2194,
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      'Actual Sales': 2108,
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      'Actual Sales': 1812,
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      'Actual Sales': 1726,
    },
    {
      date: 'Jul 22',
      SemiAnalysis: 3490,
      'Actual Sales': 1982,
    },
    {
      date: 'Aug 22',
      SemiAnalysis: 2903,
      'Actual Sales': 2012,
    },
    {
      date: 'Sep 22',
      SemiAnalysis: 2643,
      'Actual Sales': 2342,
    },
    {
      date: 'Oct 22',
      SemiAnalysis: 2837,
      'Actual Sales': 2473,
    },
    {
      date: 'Nov 22',
      SemiAnalysis: 2954,
      'Actual Sales': 3848,
    },
    {
      date: 'Dec 22',
      SemiAnalysis: 3239,
      'Actual Sales': 3736,
    },
]
  
const brewhouseEfficiency = [
    {
        name: 'Efficiency',
        total: 80,
    },
    {
        name: 'Inefficiency',
        total: 20,
    }
]

const demand = [
    {
        name: 'Supply',
        total: 400,
    },
    {
        name: 'Unmet Demand',
        total: 600,
    }
]

const tankUtilization = [
    {
        name: 'Utilized',
        total: 90,
    },
    {
        name: 'Unutilized',
        total: 10,
    }
]

const sales = [
    {
      name: 'Goal',
      sales: 980,
    },
    {
      name: 'Actual',
      sales: 456,
    },
  ];
  
  const valueFormatter = (number) =>
    `% ${new Intl.NumberFormat('en-US').format(number).toString()}`;

    const barrelFormatter = (number) =>
    `${new Intl.NumberFormat('en-US').format(number).toString()} bbl`;
  
    const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;
  
function Charts() {
    return ( 
        <>
         <div className="w-full h-full rounded-lg">
            <div className="w-full p-2 text-center">
                <h1 className="text-2xl font-extrabold">KPI's</h1>
            </div>
            <div className="flex flex-row justify-between w-full pr-4 mt-8 ml-4">
            <div className="flex flex-col items-center justify-center">
                <h3>Brewhouse Efficiency</h3>
                <DonutChart
                data={brewhouseEfficiency}
                category="total"
                index="name"
                variant="pie"
                valueFormatter={valueFormatter}
                colors={['sky', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="w-48"
                />
                <Legend
                categories={['Efficiency', 'Inefficiency']}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Production vs Demand</h3>
                <DonutChart
                data={demand}
                category="total"
                index="name"
                variant="pie"
                valueFormatter={barrelFormatter}
                colors={['sky', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="w-48"
                />
                <Legend
                categories={['Production', 'Unmet Demand']}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Tank Utilization</h3>
                <DonutChart
                data={tankUtilization}
                category="total"
                index="name"
                variant="pie"
                valueFormatter={valueFormatter}
                colors={['sky', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="w-48"
                />
                <Legend
                categories={['Utilized', 'Unutilized']}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3>Sales Goals</h3>
                <DonutChart
                data={sales}
                category="sales"
                index="name"
                variant="pie"
                valueFormatter={dataFormatter}
                colors={['sky', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="w-48"
                />
                <Legend
                categories={['Goal', 'Actual']}
                colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
                />
            </div>
            </div>
            <div className="text-center mt-36">
                <h1 className="text-2xl font-extrabold">Sales Projection Analysis</h1>
            </div>
            <div className="flex flex-row mt-4">
            <AreaChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={['SemiAnalysis', 'Actual Sales']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                showAnimation={true}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
                />
            </div>
        </div>
        
        </>
     );
}

export default Charts;