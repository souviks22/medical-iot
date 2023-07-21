import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { realtimeActions } from "@/store/realtime-slice"

import dynamic from 'next/dynamic'
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
        name: 'Pulse',
        data: pulse
    }]
    const options = {
        chart: {
            id: 'realtime',
            type: 'line',
            height: 350,
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
        markers: { size: 0 },
        yaxis: { max: 200 },
        legend: { show: false },
    }

    return (<Chart type='line' series={series} options={options} height={350} />)
}

export default Line