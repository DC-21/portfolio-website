import MainHeading from "../global/MainHeading";
import Paragraph from "../global/Paragraph";
import web from "../../images/web.jpg";
import mobile from "../../images/mobile.png";

const Services = () => {
  return (
    <div className="flex px-4 md:px-8 py-24 lg:px-12 w-full min-h-screen justify-center flex-col items-center place-content-center">
      {/* Heading */}
      <div className="max-w-sm md:max-w-sm lg:max-w-xl text-center w-full">
        <MainHeading content={"My Services."} />
      </div>
      <div className="grid w-full md:grid-cols-2 gris-cols-1 py-10 gap-6 justify-center items-center">
        <div className="justify-start flex flex-col w-full rounded">
          <img
            className="object-cover rounded-lg h-[400px] w-full"
            src={web}
            alt="home"
          />
          <div className="mt-4 flex flex-col">
            <p className="text-[28px]">Web App Development</p>
            <Paragraph
              content={
                "I develop different kinds of websites from portfolio, e-commerce to dynamic websites based on customer requirements."
              }
            />
          </div>
        </div>
        <div className="rounded-md w-full overflow-hidden justify-center flex flex-col">
          <img
            className="object-cover rounded-lg h-[400px]"
            src={mobile}
            alt="home"
          />
          <div className="mt-4 flex flex-col">
            <p className="text-[28px]">Mobile App Development</p>
            <Paragraph
              content={
                "I develop different kinds of mobile applications to run on different operating systems according to customer needs and requirements"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
