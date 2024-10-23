import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaUserShield } from "react-icons/fa6";
import { SiMultisim } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import { TbMessage2Question } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { img2, img3, img4, img5 } from "../assets/technology images"
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { img1,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30 } from "../assets/images"

let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); // random date

let startDate = new Date(2017, 0, 0);
let endDate = new Date(2024, 0, 0);

export const navLinks = [
	{
		id: "home",
		title: "Home",
		link: '/'
	},
	{
		id: "about us",
		title: "About Us",
		link: '/about us'
	},
	{
		id: "portfolio",
		title: "Portfolio",
		link: '/protfolio'
	},
	{
		id: "pricing",
		title: "Pricing",
		link: '/pricing'
	},
	{
		id: "bolg's",
		title: "Blog's",
		link: '/blogs'
	}
];
export const customers = [
	{
		number: "20",
		icon: 'k',
		title: 'My Customers'
	},
	{
		number: "95",
		icon: '%',
		title: 'Satisfation'
	},
	{
		number: "250",
		icon: 'm',
		title: 'Money managed'
	}
];
export const vision = [
	{
		icon: <HiMiniSquare3Stack3D />,
		title: "Product Design",
		subTitle: "Crafting intuitive and visually captivating products tailored to your needs."
	},
	{
		icon: <FaUserShield />,
		title: "User Experience",
		subTitle: "Optimizing interactions to create seamless and engaging user journeys."
	},
	{
		icon: <SiMultisim />,
		title: "Prototyping",
		subTitle: "Rapidly transforming concepts into tangible, high-fidelity prototypes"
	},
	{
		icon: <SlBadge />,
		title: "Brand Identity",
		subTitle: "Establishing unique visual identities that resonate with your audience"
	},
	{
		icon: <TbMessage2Question />,
		title: "Consultation",
		subTitle: "Guiding projects with strategic insights and comprehensive design expertise"
	}
];
export const pricing = [
	{
		title: "Starter",
		price: "499",
		subTitle: "Perfect for growing businesses"
	},
	{
		title: "Growth",
		price: "999",
		subTitle: "Ideal for Established Enterprises"
	}, 
	{
		title: "Pro",
		price: "1299",
		subTitle: "Ultimate Solution for innovators"
	}
];
export const plans = [
	{
		icon: <IoIosCheckmarkCircleOutline />,
		paragraph: "Expert bookkeeping. automated reports, and tax assistance"
	},
	{
		icon: <IoIosCheckmarkCircleOutline />,
		paragraph: "Our pricing plans are designed to be flexible and cater"
	},
	{
		icon: <IoIosCheckmarkCircleOutline />,
		paragraph: "We maintain high standards by conducting thorough research"
	},
	{
		icon: <IoIosCheckmarkCircleOutline />,
		paragraph: "Absolutely! We tailor our design solutions to meet your specific"
	}
];
export const experience = [
	{
		image: img2,
		title: "Savdo Web App",
		subTitle: "A SaaS web app empowering businesses with seamless POS, shop management, ERP, and inventory control, Drive efficiency, growth"
	},
	{
		image: img3,
		title: "Care Service"
	},
	{
		image: img4,
		title: "Market Analysis"
	},
	{
		image: img5,
		title: "Campaign Management"
	}
];
export const question = [
	{
		question: "What sevices do you offer?",
		answer: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
	},
	{
		question: "How can i get started on a project?",
		answer: "To get started, simply contact us through our website or email us directly. We'll schedule an initial consultation to discuss your needs and project goals"
	},
	{
		question: "What is your design process?",
		answer: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
	},
	{
		question: "What are your pricing plans?",
		answer: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
	},
	{
		question: "How do you ensure the quality of your designs?",
		answer: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
	}
];
export const footerLinks = [
	{
		title: "Features",
		links: [
			{
				title: "Payment Link"
			},
			{
				title: "Recurring Billing"
			},
			{
				title: "Invoice Management"
			},
			{
				title: "Checkout"
			},
			{
				title: "Integrations"
			},
			{
				title: "Pricing"
			},
		]
	},
	{
		title: "Solutions",
		links: [
			{
				title: "eCommerce"
			},
			{
				title: "Finance Automation"
			},
			{
				title: "Crypto"
			},
			{
				title: "Global Business"
			},
			{
				title: "Marketplaces"
			},
		]
	},
	{
		title: "Resources",
		links: [
			{
				title: "Tutorials"
			},
			{
				title: "Blog"
			},
			{
				title: "Community"
			},
			{
				title: "Privacy Policy"
			}
		]
	},
	{
		title: "About",
		links: [
			{
				title: "Company"
			},
			{
				title: "Careers"
			},
			{
				title: "FAQ"
			},
			{
				title: "Contact Us"
			}
		]
	},
];
export const lastLinks = [
	{
		title: "Privacy Policy"
	},
	{
		title: "Cookies"
	},
	{
		title: "Security"
	},
	{
		title: "Legal Document"
	}
];
export const footerIcons = [
{
	icon: <FaLinkedinIn />
},
{
	icon: <FaXTwitter />
},
{
	icon: <FaYoutube />
}
];
export const pagination = [
	{
		image: img1,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img6,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img7,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img8,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img9,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img10,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img11,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img12,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img13,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img14,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img15,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img16,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img17,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img18,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img19,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img20,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img21,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img22,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img23,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img24,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img25,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img26,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img27,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img28,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img29,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	},
	{
		image: img30,
		title: 'In Latest Projecttates',
		date: DateGenerator.getRandomDateInRange(startDate, endDate)
	}
];