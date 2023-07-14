import { IoLogoVercel } from "react-icons/io5"
import { AiFillHome, AiFillSchedule, AiFillInfoCircle } from "react-icons/ai"
import { BsFillPersonFill, BsBarChartLineFill, BsFillChatDotsFill } from "react-icons/bs"
import { FaSignOutAlt } from "react-icons/fa"

import NavLink from "./NavLink"

const Navbar = () => {
    return (<nav className='h-screen flex flex-col justify-around bg-slate-200 p-3'>
        <NavLink label={'Ease'} href={'/'} icon={<IoLogoVercel />} />
        <section className='flex flex-col'>
            <NavLink label={'Home'} href={'/'} icon={<AiFillHome />} />
            <NavLink label={'Plans'} href={'/plans'} icon={<AiFillSchedule />} />
            <NavLink label={'Stats'} href={'/stats'} icon={<BsBarChartLineFill />} />
            <NavLink label={'About'} href={'/about'} icon={<AiFillInfoCircle />} />
            <NavLink label={'Contact'} href={'/contact'} icon={<BsFillChatDotsFill />} />
            <NavLink label={'Profile'} href={'/profile'} icon={<BsFillPersonFill />} />
        </section>
        <NavLink label={'Sigout'} href={'/signin'} icon={<FaSignOutAlt />} />
    </nav>)
}

export default Navbar