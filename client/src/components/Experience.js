import { experience } from "../constants/index";
import Button from "../components/Button";
const Experience = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-8 h-[600px] w-[900px] mx-auto
    max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:w-[600px] max-lg:p-0
    max-md:grid-cols-1 max-md:grid-rows-4 max-md:w-[300px] max-md:h-[1200px]
    max-sm:w-[200px]  max-sm:h-[800px]
    ">
      {experience.map((exper, index) => {
        const duration = index <= experience.length ? 200 * (index + 1) : null;
        return(
          <div
            data-aos='zoom-in'
            data-aos-duration={duration}
            key={index}
            className={`relative rounded-lg overflow-hidden max-lg:mt-5 max-md:col-start-1    
              ${index === 0 ? "max-md:row-start-1 max-lg:row-start-1 min-[1024px]:row-span-2 min-[1024px]:col-start-1" : ""}
              ${index === 1 ? "max-md:row-start-2 max-lg:row-start-1 max-lg:col-start-2" : ""}
              ${index === 2 ? "max-md:row-start-3 max-lg:row-start-2 max-lg:col-start-2 min-[1024px]:row-start-2 min-[1024px]:col-start-2" : ""}
              ${index === 3 ? "max-md:row-start-4 max-lg:row-start-2 min-[1024px]:row-span-2 min-[1024px]:col-start-3 " : ""}
              `}>
            <img
              src={exper.image}
              alt='test'
              className={`object-cover w-full h-full relative`}
            />
            <div className="absolute bottom-0 left-0 p-3">
              <h1 className="text-primary font-primary text-xl max-sm:text-[14px]">{exper.title}</h1>
              <p className="text-[14px] max-sm:hidden mt-2 font-medium text-white font-secondary">
                {exper.subTitle}
              </p>
              {index === 0 ? (
                <Button
                  text={"Explore Now"}
                  background={"bg-primary"}
                  classes={'px-5 py-2 mt-3 max-sm:px-2 max-sm:py-1'}
                />
              ) : null}
            </div>
          </div>
      )})}
    </div>
  );
};

export default Experience;
