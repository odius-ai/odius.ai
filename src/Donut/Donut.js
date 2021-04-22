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
            startAngle={200}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            paddingAngle={5}
            label={({ dataEntry }) => dataEntry.title + " " + dataEntry.percentage + "%"}
            labelPosition={120}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
              data={[
                { title: 'Uniswap Liquidity', value: 90, color: '#a002db' },
                { title: 'Dev Funds', value: 8, color: '#59007a' },
                { title: 'Hardware Funds', value: 2, color: '#59007a' },
              ]}
            />
        </div>
    )
}
