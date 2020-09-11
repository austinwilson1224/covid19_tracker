import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [ dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(dailyData = await fetchDailyData());
        }


        fetchAPI();
    });

    const lineChart = (
        dailyData.length ? ( // !== 0 implicit check
            <Line 
                data={{
                    labels: dailyData( ({ date }) => date),
                    datasets:[{
                        data: dailyData( ({ confirmed }) => confirmed),
                        label: infected,
                        borderColor: '#3333ff',
                        fill: true
                    },{
                        data: dailyData( ({ deaths }) => deaths),
                        label: infected,
                        borderColor: 'red',
                        backgroundColor: 'rgba(225,0,0,.5)',
                        fill: true
                    }],
                }}
            />
        ) : null
    )


    return (
        <div className="{styles.container}">
            {lineChart}
        </div>
    )
}

export default Chart;