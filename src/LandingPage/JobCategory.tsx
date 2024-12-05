import { Carousel } from "@mantine/carousel";
import { category } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
const JobCategory = () => {
  return (
    <div className="p-5 w-full">
      {/* Heading Section */}
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 [&_span]:text-bright-sun-400">
        Browse <span>Job</span> Category
      </div>
      <div className="text-lg text-mine-shaft-300 text-center mx-auto w-1/2 mb-10">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      {/* Carousel Section */}
      <div className="w-full">
        <Carousel
           mx="auto"
           nextControlIcon={<IconArrowRight size={16} />}
           previousControlIcon={<IconArrowLeft size={16} />}
           height={250}
          slideSize="30%"
          slideGap="md"
          controlSize={30}
          loop
          align="start"
        >
          {category.map((category, index) => (
            <Carousel.Slide key={index}>
              <div
                className="flex flex-col items-center w-full border-2 border-bright-sun-300 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out shadow-sm p-5"
              >
                <div className="p-2 bg-bright-sun-400 rounded-full mb-3">
                  <img
                    className="h-12 w-12"
                    src={`/category/${category.name}.png`}
                    alt='{category.name}'
                  />
                </div>
                <div className="text-mine-shaft-200 text-xl font-semibold mb-2">
                  {category.name}
                </div>
                <div className="text-sm text-mine-shaft-300 text-center mb-2">
                  {category.desc}
                </div>
                <div className="text-bright-sun-300 text-lg">
                  {category.jobs}+ new job posted
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default JobCategory;
