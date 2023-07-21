import { useSelector } from "react-redux"

const Container = ({ children }) => {
    const { isExpanded } = useSelector(state => state.nav)
    return (<div className={`w-screen px-10 ${!isExpanded ? 'pl-32' : 'pl-64'}`}>
        {children}
    </div>)
}

export default Container