import { plans } from "../constants/index";
const Plans = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-9 w-[550px] max-md:w-[250px] mx-auto">
      {plans.map((plan, index) => (
        <div key={index} className="flex items-start max-md:items-center gap-2 text-sm">
          <span className="mt-1 text-lg pr-2">{plan.icon}</span>
          <p className='font-medium'>{plan.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Plans;
