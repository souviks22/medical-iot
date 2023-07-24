import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const Container = ({ children }) => {
    const { isExpanded } = useSelector(state => state.nav)
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            paddingLeft: 330
        },
        closed: {
            y: 0,
            opacity: 1,
            paddingLeft: 130
        }
    }
    
    return (<motion.div
        className='w-screen px-10 pl-32'
        variants={variants}
        initial={{ opacity: 0, y: 15 }}
        animate={isExpanded ? 'open' : 'closed'}
    >{children}
    </motion.div>)
}

export default Container