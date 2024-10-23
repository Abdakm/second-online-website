import { customers } from '../../constants/index'
export default function ClientsInformation () {
	return(
		<div className='grid grid-cols-3 h-[200px] max-lg:h-[130px] max-md:h-[90px]'>
			{customers.map((customer, index) => (
				<div key={index} className='fc flex-col border-r-4 last:border-r-0 border-dashed border-gray-400'>
					<h1 className={`text-7xl max-lg:text-4xl max-md:text-xl relative font-medium font-third`}>
						{customer.number}
						<span className='absolute text-4xl max-lg:text-xl max-md:text-sm text-gray-400'>{customer.icon}</span>
					</h1>
					<p className='font-third text-2xl max-md:text-lg max-sm:text-[9px] mt-3'>{customer.title}</p>
				</div>
			))}
		</div>
	)
}