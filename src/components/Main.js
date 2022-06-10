import logo from "../assets/logo.svg";
import pattern from "../assets/pattern.svg";
import bg from "../assets/bg.png";
import rolled from "../assets/plainmousepad.png";

const Main = () => {
  return (
    <div className="border-t-4 h-screen bg-contai   border-blue-500 w-full relative mainbg">
      <div className="mobile:px-5 tablet:px-5 laptop:px-16 pt-12 tablet:absolute">
        <img src={logo} className="mobile:h-8 tablet:h-12 m-0" alt="" />
      </div>
      <div className="h-full grid grid-cols-2 mobile:px-5 laptop:px-14 gap-0">
        <div className="tablet:col-span-1 mobile:col-span-full flex items-center">
          <div>
            <span className="mobile:mt-12 tablet:mt-auto laptop:text-4xl mobile:text-2xl font-black text-white block">
              House of <span className="text-blue-500">High Quality </span>
              Extended Gaming Mousepad
            </span>
            <span className="mt-2 block font-normal mobile:text-sm tablet:text-xl text-gray-300">
              Affordable price in the market perfect for <br /> building up your
              Workstation
            </span>
            <div className="mt-5">
              <button className=" transition active:scale-100 active:shadow-md bg-gray-700 text-white shadow-lg mobile:py-2 mobile:px-3 mobile:text-sm tablet:text-base tablet:py-3 tablet:px-5 rounded-full">
                View Products
              </button>
            </div>
          </div>
        </div>
        <div className="tablet:col-span-1 mobile:col-span-full z-10 flex items-center">
          <img
            src={rolled}
            className="tablet:mt-28 mobile:mb-40 -rotate-12"
            alt=""
          />
        </div>
      </div>

      <img
        src={pattern}
        className="absolute z-0 bottom-10 mobile:left-5 tablet:left-5 laptop:left-14"
        alt=""
      />
      <img
        src={pattern}
        className="absolute mobile:right-5 tablet:right-5 laptop:right-14 top-10 rotate-180"
        alt=""
      />
    </div>
  );
};

export default Main;
