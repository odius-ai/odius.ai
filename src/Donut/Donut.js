import { PieChart } from 'react-minimal-pie-chart';

import "./Donut.css"
export const Donut = () => {
    return(
        <div>
            <PieChart

            style={{
                fontFamily:
                  '"monospace", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '1px',
            }}
            className="chart"
            viewBoxSize={[100, 26]}
            center={[50,13]}
            radius={10}
            lineWidth={30}
            startAngle={90}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            paddingAngle={5}
            label={({ dataEntry }) => dataEntry.title + " " + dataEntry.percentage + "%"}
            labelPosition={112}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
              data={[
                { title: 'You', value: 60, color: '#a002db' },
                { title: 'Uniswap liquidity', value: 15, color: '#7900a6' },
                { title: 'Marketing', value: 5, color: '#59007a' },
                { title: 'Developers', value: 15, color: '#59007a' },
                { title: 'Hardware', value: 5, color: '#330045' },
              ]}
            />
        </div>
    )
}
