import { motion } from "framer-motion"

const NavIcon = ({ children }) => {
    return (<motion.span
        className='text-3xl text-gray-800'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
    >{children}
    </motion.span>)
}

export default NavIcon