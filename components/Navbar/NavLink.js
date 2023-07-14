import Link from "next/link"
import { BsFillTriangleFill } from "react-icons/bs"

const NavLink = ({ label, href, icon }) => {
    return (<Link href={href}
        className='group hover:bg-slate-300 rounded p-2 my-2'>
        <span className='text-3xl text-gray-800'>{icon}</span>
        <section className='absolute translate-x-12 -translate-y-8 hidden group-hover:flex items-center'>
            <BsFillTriangleFill className='text-slate-200 -rotate-90 translate-x-1' />
            <span className='bg-slate-200 text-slate-800 px-2 py-1 rounded'>{label}</span>
        </section>
    </Link>)
}

export default NavLink