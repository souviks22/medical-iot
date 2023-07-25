import dynamic from 'next/dynamic'
import ChartWrapper from "../../ui/ChartWrapper"
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Bar = () => {
    const series = [{
        name: 'Pulse',
        data: [
            { x: '12/07/2023', y: 90 },
            { x: '13/07/2023', y: 70 },
            { x: '14/07/2023', y: 190 },
            { x: '15/07/2023', y: 80 },
            { x: '16/07/2023', y: 75 },
            { x: '17/07/2023', y: 65 },
            { x: '18/07/2023', y: 70 },
            { x: '19/07/2023', y: 85 },
            { x: '20/07/2023', y: 85 },
            { x: '21/07/2023', y: 110 },
        ]
    }]

    const options = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        dataLabels: { enabled: false }
    }

    return (<ChartWrapper label={'Pulse'}>
        <Chart type='bar' series={series} options={options} className='w-2/3' />
    </ChartWrapper>)
}

export default Bar