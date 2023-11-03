import MainHeading from "../global/MainHeading";
import Paragraph from "../global/Paragraph";
import dice from '../../images/dice.png'
import port from '../../images/port.png'
import Button from "../global/Button";

const Projects = () => {
  return (
    <div className="flex px-4 md:px-8 py-24 lg:px-12 w-full min-h-screen justify-center flex-col items-center place-content-center">
      {/* Heading */}
      <div className="max-w-sm md:max-w-sm lg:max-w-xl text-center w-full">
        <MainHeading content={"My Projects."} />
      </div>
      <div className="grid w-full md:grid-cols-3 gris-cols-1 py-10 gap-6 justify-center items-center">
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={dice}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Exchange Rates App</p>
            <Button content={"Visit"} secondary mobileWidthFull />
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={dice}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Exchange Rates App</p>
            <Button content={"Visit"} secondary mobileWidthFull />
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={dice}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Exchange Rates App</p>
            <Button content={"Visit"} secondary mobileWidthFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
