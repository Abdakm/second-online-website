import { img14 } from '../../assets/technology images/index'
import Button from '../../components/Button'
export default function Design() {
	return(
		<div className='px-28 max-md:px-5 py-20'>
			<div className='text-center'>
				<div className='inline-block p-10 max-md:p-5 rounded-full border-4 border-gray-400'><img alt='test' className='w-[500px] max-lg:w-[300px] max-md:w-[200px] object-cover mx-auto' src={img14} /></div>
				<p className='font-meduim font-secondary text-center leading-[50px] text-4xl max-lg:text-2xl max-md:text-lg max-md:mt-7 mt-14 mx-auto'>
					Innovation and Passion in Product<br /> Design, Guiding You Through Our Journey<br /> and Creative Evoluation
				</p>
				<Button text='Read My Story' arrow={true} color={'primary'} background={'bg-secondary'} classes={'px-5 py-3 mx-auto mt-8'} />
			</div>
		</div>
	)
}