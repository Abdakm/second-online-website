import { Link } from 'react-router-dom'
const FooterLinks = ({title, footerLinks}) => {
  return (
      <ul className='inline-block w-[200px] max-lg:w-[100px] max-md:w-[150px] max-md:mt-5'>
        <div className='text-gray-400'> {title} </div>
        <div className='flex flex-col justify-between gap-[9px]'>
         {footerLinks.map((link, index) => (
            <li key={index}  className={` flex items-center mt-[5px]`}>
              <Link className={`${index === 0 ? 'mt-2' :''} link`}>{link.title}</Link>
            </li>
         ))}
         </div>
         </ul>
  );
};

export default FooterLinks;
