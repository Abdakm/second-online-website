import Button from '../../components/Button'
import FooterLinks from '../../components/FooterLinks'
import {footerLinks, footerIcons, lastLinks} from '../../constants/index'
import { logo } from '../../assets/technology images/index'
import { Link } from 'react-router-dom'

export default function Footer(){
	return (
		<div className='flex select-none flex-col bg-forth px-20 max-md:px-5 py-10 relative overflow-hidden'>
			<div id='footer1' className='flex items-center justify-between py-10'>
				<h1 className='bg-gradient-to-r from-primary to-third bg-clip-text text-transparent font-primary text-6xl max-lg:text-4xl max-md:text-lg max-sm:text-sm'>Let's Stay connected</h1>
				<div className='flex gap-5 max-md:gap-2'>
					<Link to='/signin'><Button arrow="true" background='bg-primary' text='Get in Touch' classes='px-5 max-md:px-3 max-md:py-1 max-md:text-[10px] py-2 font-bold'/></Link>
					<Link to='/view work'><Button arrow="true" background='bg-third'   text='View Work'    classes='px-5 max-md:px-3 max-md:py-1 max-md:text-[10px] py-2 font-bold'/></Link>
				</div>
			</div>
			<hr className='border-gray-700'/>
			<div id='footer2' className='flex max-md:flex-col py-10'>
				<div className='flex-1 text-white'>
					<div className='flex items-center'>
						<img alt='test' src={logo} className='w-[60px] h-[60px] object-cover rounded-full' />
						<p className="font-primary text-3xl ml-5">Akmik</p>
					</div>
					<p className='text-gray-400 font-secondary text-sm mt-5 pr-8'>Join Our Design Community and Unlock Your <br /> Brand's Pltential</p>
					<p className='mt-10 text-gray-400 text-sm'>Follow us on:</p>
					<div className='flex gap-2 mt-4'>
					{footerIcons.map((icon, index) => (
						<i key={index} className='text-xl cursor-pointer hover:opacity-90 transition-all duration-200 w-[40px] h-[40px] bg-[#29383F] rounded-full flex items-center justify-center'>{icon.icon}</i>
					))}
					</div>
				</div>
				<div className="flex max-md:flex-wrap">
				{footerLinks.map((link, index) => (
					<FooterLinks key={index} title={link.title} footerLinks={link.links}/>
				))}
				</div>
			</div>
			<div id='footer3' className=' fc text-white gap-10 max-md:gap-3 max-md:text-sm pt-10 pb-10'>
				{lastLinks.map((link, index) => (
					<Link key={index}>{link.title}</Link>
				))}
			</div>
			<div className='absolute left-0 -bottom-3/4 max-md:h-[670px] blur-3xl w-full h-[550px] bg-gradient-to-r from-primary via-forth to-primary opacity-40' />
		</div>
	)
}