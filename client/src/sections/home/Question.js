import { img20 } from '../../assets/technology images/index'
import Question1 from '../../components/Question1'
import {question} from '../../constants/index'

export default function Question(){
	return(
		<div className='bg-[#F8F8F8] min-h-[700px] pb-28 pt-9 px-40 max-md:px-10 max-sm:px-2 relative flex flex-col justify-evenly'>
			<div className='text-center'>
				<img alt='test' src={img20} className='mx-auto w-[150px] max-lg:w-[120px]'/>
				<h1 className='capitalize font-primary  mb-3 max-lg:text-4xl text-[3.5rem] leading-[4.2rem]'>
					frequently asked <br /> questions
				</h1>
				<p className='text-sm max-lg:text-[12px] mt-9 font-medium opacity-70'>
					Here's what some of our customers say about our <br /> platform. Here's what some of our customers say about <br /> our platform.
				</p>
			</div>
			<div className='max-md:w-[250px] max-lg:w-[450px] w-[700px] mx-auto'>
			{question.map((ques, index) => (
				<Question1 key={index} question={ques.question} answer={ques.answer} index={index + 1}/>
			))}
			</div>
		</div>
	)
}	