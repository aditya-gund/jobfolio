import { Avatar, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%]">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400 gap-3">Find your <span>dream</span> <span>job</span> with us.</div>
        <div className="text-mine-shaft-200 ">Good life begins with good company. Start explore thousands of jobs in one place</div>
        <div className="flex gap-3 mt-5">
        <TextInput
        className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
        variant="unstyled"
        label="Job Title"
        placeholder="Software Engineer"/>
        <TextInput
        className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
        variant="unstyled"
        label="Job Type"
        placeholder="Fulltime"/>
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400  text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
          <IconSearch className="h-[85%] w-[85%]"/>
        </div>
        </div>
      
      </div>
    <div className="w-[55%] flex items-center">
    <div className="w-[38rem]">
        <img src="./Images/laptop_boy.png" alt="boy"/>
        <div className="absolute  right-[13%] w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
          <div className="text-center mb-1 text-sm text-mine-shaft-100">10k+ got job</div>
          <Avatar.Group>
            <Avatar src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"/>
            <Avatar src="https://media.istockphoto.com/id/1411901680/photo/happy-man-toothy-smile-positive-emotion-avatar.jpg?s=612x612&w=0&k=20&c=H7YtE74Fs0CuGYftk0UtPYdZtO3VgBF5cX2HYmCI0C4="/>
            <Avatar src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"/>
            <Avatar>+9</Avatar>
          </Avatar.Group>
        </div>
        <div className="absolute  ml-6 w-fit right-[37%] top-[23%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg ">
              <img src="./images/google-icon.png" alt=""/>
            </div>
              <div className="text-sm text-mine-shaft-100">
              <div>Software Engineer</div>
              <div className="text-mine-shaft-200 text-xs">Pune</div>
              </div>
          </div>
          <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
            <span>1 day ago</span>
            <span>120 Applicants</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DreamJob
