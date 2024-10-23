import VisionCard from '../../components/VisionCard'
import { ImFire } from "react-icons/im";

export default function Vision(){
	return (
		<div className=' min-h-[700px] py-28 bg-forth relative flex flex-col justify-evenly'>
			<div className='text-center'>
				<button className='px-10 py-2 flex items-center gap-3 mx-auto mb-4 text-white font-third hover:opacity-90 border-2 border-gray-400 rounded-full'>
					Services We Offered <ImFire color='#e44545'/>
				</button>
				<h1 className='capitalize font-primary text-white mb-3 max-lg:text-4xl max-md:text-xl text-[3.5rem] leading-[4.2rem]'>
					Your Vision with <span className='text-primary'>{' '}Expertise<br /> <span className='normal'>and</span> Creativity</span>
				</h1>
				<p className='text-sm max-lg:text-[12px] max-md:text-[10px] px-5 text-white mb-12'>
					Elevating Your Vision Through Innovative Design Solutions that Enhance User<br /> Experiences and Define Brand Identities Bringing Your Ideas to Life.
				</p>
			</div>
			<VisionCard />
		</div>
	)
}