'use client'

import { LineSeries } from "lightweight-charts";
import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";


function MiniSparkChart({ data, color, style}) {
    const chartContainerRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (!chartContainerRef.current || !data?.length)
            return;
        const chart = createChart(chartContainerRef.current, {
            /* width: chartContainerRef.current.clientWidth,
            height: 50, */
            autoSize: true,
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

        const toolTipWidth = 80;
        const toolTipHeight = 50;
        const toolTipMargin = 10;

        // style and update the tooltip
        chart.subscribeCrosshairMove(param => {
            if (
                param.point === undefined ||
                !param.time ||
                param.point.x < 0 ||
                param.point.x > chartContainerRef.current.clientWidth ||
                param.point.y < 0 ||
                param.point.y > chartContainerRef.current.clientHeight
            ) {
                tooltipRef.current.style.display = 'none';
            } else {
                tooltipRef.current.style.display = 'block';
                const dateStr = param.time;
                const data = param.seriesData.get(lineSeries);
                const price = data.value !== undefined ? data.value : data.close;
                tooltipRef.current.innerHTML = `<div class="text-[0.9em]">${dateStr}</div><div class="font-black text-[1.2em]">${price}</div>`

                const y = param.point.y;
                let left = param.point.x + toolTipMargin;
                if (left > chartContainerRef.current.clientWidth - toolTipWidth) {
                    left = param.point.x - toolTipMargin - toolTipWidth;
                }

                let top = y + toolTipMargin;
                if (top > chartContainerRef.current.clientHeight - toolTipHeight) {
                    top = y - toolTipHeight - toolTipMargin;
                }
                tooltipRef.current.style.left = left + 'px';
                tooltipRef.current.style.top = top + 'px';
            }
        });

        chart.timeScale().fitContent();

        const handleResize = () => {
            /* chart.resize(); */
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);
            
    return (
        <div className={`${style} relative overflow-visible`}>
            <div ref={chartContainerRef} className="w-[100%] h-[100%]">
                <div ref={tooltipRef} className="hidden w-[70px] h-[45px] absolute p-1.5 text-[0.7rem] text-center z-[9999] top-12 left-12 rounded-sm shadow-lg bg-white"></div>
            </div>
        </div>
    )
}

export default MiniSparkChart