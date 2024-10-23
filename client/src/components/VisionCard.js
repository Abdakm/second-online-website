import { vision } from "../constants/index";
const VisionCard = () => {
  return (
    <div className="flex justify-center mx-auto flex-wrap gap-4 max-w-[1000px]">
      {vision.map((vis, index) => {
        const duration = index <= vision.length ? 200 * (index + 1) : null;
        return(
        <div key={index} data-aos='zoom-in' data-aos-duration={ duration } className="w-[300px] p-6 py-9 rounded-lg bg-[#28373E]">
          <div className="text-xl bg-third inline-block rounded-lg p-2"> {vis.icon} </div>
          <h1 className="text-white mt-3">{vis.title}</h1>
          <p className="text-white opacity-70 font-third text-[11px] mt-1">{vis.subTitle} </p>
        </div>
      )})}
    </div>
  );
};

export default VisionCard;
