import { pricing } from "../constants/index";

const PriceCard = () => {
  return (
    <div className="flex flex-wrap justify-center px-6">
      {pricing.map((price, index) => (
        <div
          key={index}
          data-aos={index === 1 ? 'zoom-in' : ''}
          className={`flex flex-col items-start justify-between max-lg:w-[200px] max-lg:h-[200px] h-[300px] w-[300px] -z-10 shadow-lg rounded-lg p-4 
            ${index === 0 ? "-rotate-6" : ""}
            ${index === 2 ? "rotate-6" : ""}
            ${price.title === "Growth" ? "bg-forth" : "bg-[#F8F8F8]"}`}>
          <div className="w-full">
            <div className={`flex items-center justify-between p-1 `}>
              <p
                className={`text-gray-400 font-medium font-secondary ${
                  price.title === "Growth" ? null : "text-gray-400"
                }`}>
                {price.title}
              </p>
              {price.title === "Growth" ? (
                <button className="px-3 py-2 text-primary bg-secondary rounded-full text-[9px] font-secondary">
                  Most Popular
                </button>
              ) : null}
            </div>
            <h1
              className={`font-primary text-5xl relative pl-4 inline-block
                ${
                  price.title === "Growth"
                    ? "before:text-white text-primary after:text-white"
                    : "after:text-black"
                } 
                before:content-['$'] before:text-[28px] before:absolute before:top-0 before:-left-0 
                after:content-['/month'] after:text-sm after:absolute after:bottom-0 after:font-third 
                `}>
              {price.price}
            </h1>
          </div>
          <p
            className={`text-[12px] font-secondary font-medium ${
              price.title === "Growth" ? "text-white" : ""
            }`}>
            {price.subTitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
