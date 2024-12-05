import Marquee from "react-fast-marquee";
import {companies} from "../Data/Data";
const Companies = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 [&_span]:text-bright-sun-400">Trusted By <span>500+</span> Companies</div>
      <Marquee pauseOnHover={true}>
        {
          companies.map((company, index)=>(
            <div key={index} className="mx-4 px-2 py-1 mt-6 hover:bg-mine-shaft-900 rounded-xl cursor-pointer ">
            <img className="h-14 " src={`/companies/${company}.png`} alt="{company}"/>
            </div>
          ))
        }
      </Marquee>
    </div>

  )
}

export default Companies;
