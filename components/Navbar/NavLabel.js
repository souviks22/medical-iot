import { motion } from "framer-motion"

const NavLabel = ({ children }) => {
    return (<motion.span
        className='h-full font-bold text-gray-800 pl-10 pr-16 rounded'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ translateX: 10, transition: { delay: 0.01 } }}
    > {children}
    </motion.span >)
}

export default NavLabel