import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const Container = ({ children }) => {
    const { isExpanded } = useSelector(state => state.nav)
    return (<motion.div
        className={`w-screen px-10 ${!isExpanded ? 'pl-32' : 'pl-72'}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
    >{children}
    </motion.div>)
}

export default Container