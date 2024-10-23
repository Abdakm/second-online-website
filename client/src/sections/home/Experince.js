import { ImFire } from "react-icons/im";
import Experience1 from '../../components/Experience'

export default function Experience(){
	return (
		<div className=' min-h-[700px] py-28 relative flex flex-col justify-evenly'>
			<div className='text-center'>
				<button className='px-10 py-2 flex items-center gap-3 mx-auto mb-4 font-third hover:opacity-90 border-2 border-gray-400 rounded-full'>
					Our Work <ImFire color='#e44545'/>
				</button>
				<h1 className='capitalize font-primary mb-3 max-lg:text-4xl max-md:text-xl text-[3.5rem] leading-[4.2rem]'>
					Our Work Experience
				</h1>
				<p className='text-sm max-lg:text-[12px] max-md:text-[10px] font-medium opacity-70'>
					Journey Through Design: Unveiling My Work Experience. A Comprehensive <br /> Exploration of My Design Journey and Professional Evolution
				</p>
			</div>
			<Experience1 />
		</div>
	)
}