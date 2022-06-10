const FeatureDetails = ({ Title, Logo, Content, Span = 6, className }) => {
  return (
    <div className={"tablet:col-span-4 mobile:col-span-6 " + className}>
      <div className="w-full flex mb-3 justify-center ">
        <div className="nonslip rounded-full tablet:ring-8 mobile:ring-4 shadow ring-blue-200">
          <img
            src={Logo}
            className="tablet:h-28  tablet:w-28 mobile:w-16 mobile:h-16 rounded-full"
            alt=""
          />
        </div>
      </div>

      <p className="w-full text-center font-bold text-gray-700">{Title}</p>
      <p className="text-center tablet:px-10 text-gray-500 mobile:text-xs tablet:text-base">
        {Content}
      </p>
      {/* <div className="w-full flex mb-2 justify-center">{Logo}</div>
      <p className="text-md text-gray-800 font-semibold text-center">{Title}</p>
      <p className="text-gray-800 text-sm tablet:w-64 text-center">{Content}</p> */}
    </div>
  );
};

export default FeatureDetails;
