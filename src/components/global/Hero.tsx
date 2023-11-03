import Button from "./Button";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <div className="flex px-4 md:px-8 md:py-24 p-6 lg:px-12 w-full min-h-screen justify-center flex-col items-center place-content-center">
      {/* Heading */}
      <div className="max-w-sm md:max-w-sm lg:max-w-xl text-center w-full">
        <MainHeading content={"Hire a developer you can trust."} />
      </div>

      {/* Paragraph */}
      <div className="max-w-lg mt-4 text-center">
        <Paragraph
          content={
            "Hire a developer who has passion for software development to provide quality software."
          }
        />
      </div>
      {/* Buttons */}
      <div className="grid-cols-1 grid my-4 gap-3 md:gap-6 md:w-fit w-full text-black">
        <Button content={"Contact Me"} secondary mobileWidthFull />
      </div>
    </div>
  );
};

export default Hero;
