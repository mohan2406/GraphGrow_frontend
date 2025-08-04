'use client'

import { LineSeries } from "lightweight-charts";
import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";


function MiniSparkChart({ data, color}) {
    const chartContainerRef = useRef();

    useEffect(() => {
        if (!chartContainerRef.current || !data?.length)
            return;
        const chart = createChart(chartContainerRef.current, {
            width: 200,
            height: 50,
            layout: {
                background: { color: 'transparent' },
                textColor: 'transparent',
                attributionLogo: false,
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: false },
            },
            timeScale: {
                visible: false
            },
            rightPriceScale: {visible: false},
            leftPriceScale: {visible: false},
            crosshair: { 
                mode: 0,
                vertLine: {visible: false},
                horzLine: {visible: false},
            },
        });
        const lineSeries = chart.addSeries(LineSeries, { color: color, lineWidth: 2, priceLineVisible: false});
        lineSeries.setData(data);
        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({width: 200});
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);
            
    return (
        <div ref={chartContainerRef} className="w-full h-[80px]" />
    )
}

export default MiniSparkChart