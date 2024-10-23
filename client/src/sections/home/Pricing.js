import PriceCard from '../../components/PriceCard'
import Plans from '../../components/Plans'
import { ImFire } from "react-icons/im";

export default function Pricing(){
	return(
		<div className=' min-h-[700px] py-28 relative flex flex-col justify-evenly'>
			<div className='text-center'>
				<button className='px-10 py-2 flex items-center gap-3 mx-auto mb-4 bg-gray-200 font-third font-bold hover:opacity-90 border-2 border-gray-400 rounded-full'>
					Pricing Plans <ImFire color='#e44545'/>
				</button>
				<h1 className='capitalize font-primary mb-3 max-lg:text-4xl max-md:text-xl text-[3.5rem] leading-[4.2rem]'>
					Explore Our Pricing <br /> Plans
				</h1>
				<p className='text-sm max-lg:text-[12px] max-md:text-[10px] font-medium opacity-70 mb-6'>
					Discover Tailored Solutions Designed to Meet Your Specific Needs <br /> and Budget. Ensuring Value and Flexibility
				</p>
				<div className='mb-12 p-1 bg-gray-300 rounded-full inline-block overflow-hidden'>
					<button className='px-10 py-3 rounded-full cursor-pointer focus:text-primary focus:bg-forth'>Monthly</button>
					<button className='px-10 py-3 rounded-full cursor-pointer focus:text-primary focus:bg-forth'>Quarterly</button>
				</div>
			</div>
			<PriceCard />
			<h1 className='text-2xl font-medium mt-28 mb-10 text-center text-secondary'>All Plans Include</h1>
			<Plans />
		</div>
	)
}