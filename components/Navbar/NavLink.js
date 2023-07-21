import { useSelector } from "react-redux"
import { BsFillTriangleFill } from "react-icons/bs"

import Link from "next/link"

const NavLink = ({ label, href, icon, onClick = () => { } }) => {
    const { isExpanded } = useSelector(state => state.nav)
    return (<Link href={href} className='w-min group flex hover:bg-slate-300 rounded p-2 my-2' onClick={onClick}>
        <span className='text-3xl text-gray-800'>{icon}</span>
        {label
            ?
            !isExpanded
                ?
                <section className='absolute z-10 translate-x-16 hidden group-hover:flex items-center'>
                    <BsFillTriangleFill className='text-slate-200 -rotate-90 translate-x-1' />
                    <span className='bg-slate-200 text-gray-800 px-2 py-1 rounded'>{label}</span>
                </section>
                :
                <span className='font-bold text-gray-800 px-5 mx-5 rounded'>{label}</span>
            :
            null
        }
    </Link>)
}

export default NavLink