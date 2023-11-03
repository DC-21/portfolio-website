const Footer = () => {
    return (
      <div className="md:gap-0 gap-8 md:py-0 py-3 px-4 md:px-8 lg:px-12 grid  m-0 text-white bg-black md:text-left text-center md:h-[280px] h-auto">
        <div className="md:gap-0 py-6 gap-8 my-16 w-full grid md:grid-cols-2 grid-cols-1">
          <div className="m-0 top-0">
            <p className="text-[30px] font-bold">Chola.</p>
            <p className="text-gray-400 max-w-xs">
              THire a developer you can trust
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-8">
            <div>
              <p className="text-lg font-semibold">About Me</p>
              <div className="grid gap-2 mt-2">
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Who is chola.
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Websites
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Donate
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Hire
                </a>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">SOCIAL MEDIA</p>
              <div className="grid gap-2 mt-2">
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-[15px] text-gray-400 hover:text-white transition-all w-full md:w-fit"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-[1px] bg-gray-700"></div>
        <div className="w-full text-center py-6 items-center justify-center">
          <p className="text-gray-500">Chola Copyright © 2023</p>
        </div>
      </div>
    );
  };
  
  export default Footer;