import { img1 } from '../../assets/technology images/index'
import Button from '../../components/Button'

export default function Background(){
	return(
		<div 
			data-aos='zoom-in'
			data-aos-duration='600'
			style={{backgroundImage: `url(${img1})`}} 
			className={`bg-cover bg-no-repeat relative h-[500px]`} 
		>
			<div className='absolute bottom-0 flex max-md:flex-col max-md:items-start justify-between items-center w-full px-20 max-md:px-5 py-14'>
				<h1 className='capitalize font-primary text-white mb-3 max-lg:text-4xl max-md:text-xl text-[3.5rem] leading-[3.7rem]'>
					get creative solutions for <br /> your<span className='text-primary'>{' '}design & branding</span>
				</h1>
				<div className=' text-right flex flex-col items-end gap-4'>
					<p className='text-white max-lg:text-sm max-md:text-[10px] font-secondary'>Find Everything you need for your <br /> perfect fashion statement.</p>
					<Button text={'Explore More'} background='bg-primary' classes='px-5 py-2 font-medium'/>
				</div>
			</div>
		</div>
	)
}


























