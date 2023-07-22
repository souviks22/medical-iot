import { motion } from "framer-motion"

const NavLabel = ({ children }) => {
    return (<motion.span
        className='font-bold text-gray-800 pl-10 pr-16 rounded'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ translateX: 15 }}
    >{children}
    </motion.span>)
}

export default NavLabel