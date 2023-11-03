import MainHeading from "../global/MainHeading";
import dice from '../../images/dice.png'
import sacip from '../../images/sacip1.png'
import cyber from '../../images/cyber.png'
import Button from "../global/Button";
import soli from "../../images/soli.png"
import liv1 from "../../images/liv1.png";
import port from "../../images/port.png";

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
            <div>
            <Button content={"Visit"} url="https://dice-currency.vercel.app" secondary mobileWidthFull />
            </div>
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={soli}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Tuition Booking App</p>
            <Button content={"Visit"} url="https://solidex-lime.vercel.app" secondary mobileWidthFull />
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={cyber}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Cyber Analysis App</p>
            <Button content={"Visit"} url="https://cyberverse.vercel.app/" secondary mobileWidthFull />
          </div>
        </div>
      </div>
      <div className="grid w-full md:grid-cols-3 gris-cols-1 py-10 gap-6 justify-center items-center">
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={liv1}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Point of Sale Software</p>
            <div>
            <Button content={"Visit"} url="https://dice-currency.vercel.app" secondary mobileWidthFull />
            </div>
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={sacip}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">Water & Electricity bills payment App</p>
            <Button content={"Visit"} url="https://solidex-lime.vercel.app" secondary mobileWidthFull />
          </div>
        </div>
        <div className="justify-start border-2 border-white px-2 py-2 flex flex-col w-full rounded md:h-[500px] h-auto">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={port}
            alt="home"
          />
          <div className="mt-4 text-black flex flex-col">
            <p className="text-[28px] text-white text-center">First Portfolio App</p>
            <Button content={"Visit"} url="https://cyberverse.vercel.app/" secondary mobileWidthFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
