import { img0 } from '../../assets/technology images/index'
import Button from '../../components/Button'
import { ImFire } from "react-icons/im";
import { Link } from 'react-router-dom'

export default function HeroSection(){
	return(
		<div 
			style={{backgroundImage: `url(${img0})`}} 
			className={`bg-cover bg-no-repeat bg-center relative h-[710px] max-md:h-[616px]`} >
			<div className='max-w-[540px] max-lg:w-[450px] max-md:w-[350px] max-sm:w-[250px] text-center absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2'>
				<button className='px-4 py-2 flex items-center max-md:text-sm gap-3 mx-auto mb-4 text-white font-third hover:opacity-90 border-2 border-gray-400 rounded-full'>
					Shopping the Future of Design <ImFire color='#e44545'/>
				</button>
				<h1 className='capitalize font-primary text-white mb-3 max-lg:text-5xl max-md:text-2xl max-sm:text-lg text-[3.5rem] leading-[3.7rem]'>
					transforming your vision into <span className='text-primary'>{' '}innovating designs</span>
				</h1>
				<p className='text-sm max-sm:text-[10px] text-white mb-3'>
					Passionale Product Designer | Crafting Solutions That Delight and Inspire | Over a Decade of Experience in Design Excellence
				</p>
				<div className='flex justify-center mt-9 gap-3 max-sm:gap-1 max-sm:text-sm'>
					<Link to='/signin'><Button text='Get in Touch' arrow={true} background='bg-primary'   color='black' classes='px-4 py-2'/></Link>
					<Link to='/view work'><Button text='View Work'    arrow={true} background='bg-third' color='black' classes='px-4 py-2'/></Link>
				</div>
			</div>
		</div>
	)
}	