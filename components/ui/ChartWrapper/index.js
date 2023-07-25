const ChartWrapper = ({ label, children }) => {
    return (<section className='flex flex-col items-center'>
        <h4 className='text-2xl'>{label}</h4>
        {children}
    </section>)
}

export default ChartWrapper