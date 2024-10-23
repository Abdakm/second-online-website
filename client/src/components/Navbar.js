import { navLinks } from '../constants/index'
import { Link } from 'react-router-dom'
import { logo } from '../assets/technology images/index'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {useState} from 'react'

export default function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false)
	return (
		<header className='fixed max-w-[1280px] bg-black/40 inset-0 py-2 top-0 z-40 select-none mx-auto bg-gray-500 bg-transparent h-[70px] bg-black/10 shadow-xl rounded-lg'>
			<div className='flex items-center justify-between px-10'>
				{/* Logo */}
				<div className='h-full fc min-w-[54px] max-md:flex-1 max-md:justify-start'>
					<Link to='/'><img alt='test' src={logo} className='w-[50px] h-[50px] object-cover rounded-full hover:ring-2 ring-black border-2 border-white transition-all duration-200'/></Link>
				</div>
				{/* Links */}
				<div className='flex-1 fc h-full font-third min-w-[54px] max-md:hidden'>
					{navLinks.map((link, index) => (
						<Link to='/' key={index} className='mr-2 first:text-primary last:mr-0 px-4 py-2 rounded-xl hover:bg-secondary hover:text-white transition-all duration-600'>{link.title}</Link>
					))}
				</div>
				{/* Buttons */}
				<div className='fc h-full min-w-[54px] max-md:hidden'>
					<Link to='/Signin'>
						<Button classes={'px-5 py-2'} color='white' background='bg-secondary' text='Get in Touch' arrow={true}/>
					</Link>
				</div>
				<span
	            className="text-black cursor-pointer hidden max-md:fc"
	            onClick={() => setSidebarOpen((isSidebarOpen) => !isSidebarOpen)}>
	            {
	            	!isSidebarOpen ? 
	            	( <GiHamburgerMenu size={28} />) : 
	            	( <MdClose size={28} /> )
	        	}
	          </span>
			</div>
				<div className={`w-full bg-secondary text-white mt-1 min-[768px]:hidden ${isSidebarOpen ? 'inline-block' : 'hidden'}`}>
					{navLinks.map((link, index) => (
						<Link key={index} className='py-2 block border-b-2 first:border-t-2 border-black text-center transition-all duration-600'>{link.title}</Link>
					))}
				</div>
		</header>
	)
}