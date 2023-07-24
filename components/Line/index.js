import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { realtimeActions } from "@/store/realtime-slice"

import dynamic from 'next/dynamic'
import ChartWrapper from "../ChartWrapper"
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Line = () => {
    const dispatch = useDispatch()
    const { pulse } = useSelector(state => state.realtime)

    useEffect(() => {
        setInterval(() => {
            dispatch(realtimeActions.addPulse())
        }, 1000)
    }, [])

    const series = [{
        name: 'Pulse Rate',
        data: pulse
    }]

    const options = {
        chart: {
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        xaxis: {
            labels: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            min: 0,
            max: 200
        },
        tooltip: { enabled: false }
    }

    return (<ChartWrapper label={'Pulse Rate'}>
        <Chart type='line' series={series} options={options} className='w-1/2' />
    </ChartWrapper>)
}

export default Line