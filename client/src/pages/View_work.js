import Navbar from '../components/Navbar'
import Footer from '../sections/home/Footer'
import { pagination } from '../constants/index'
import PaginatedItems from '../components/Paginate'
import ScrollToTop from '../ScrollToTop'

export default function View_work(){
	return(
		<div className='max-w-screen-2xl select-none mx-auto'>
      		<ScrollToTop />
			<Navbar />
			<div className='pt-28'>
				<PaginatedItems data={pagination} />
				<Footer />
			</div>
		</div>
	)
}