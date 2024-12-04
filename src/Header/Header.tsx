import { Avatar, Indicator } from "@mantine/core"
import { IconBell, IconSchool, IconSettings } from "@tabler/icons-react"
import NavLink from "./NavLink"
const Header = () => {
  return (
    <div className="w-full  bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center ">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconSchool className="h-10 w-10" stroke={2.5}/>
        <div className="text-3xl font-semibold  [&>span]:text-mine-shaft-100"><span>Job</span>folio</div>
      </div>
    {NavLink()}
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
            <div>Jethalal</div>
            <div>
            <Avatar src="https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg" alt="it's me" />
            </div>
        </div>
        <div className="flex items-center bg-mine-shaft-900 p-1.5 rounded-full">
        <IconSettings stroke={1.5}/>
        </div>
        <div className="flex items-center bg-mine-shaft-900 p-1.5 rounded-full">
        <Indicator  color="bright-sun.4" size={8} offset={6} processing><IconBell stroke={1.5}/></Indicator>
        </div>
      </div>
    </div>
  )
}

export default Header
