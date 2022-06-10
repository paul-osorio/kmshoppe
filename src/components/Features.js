import FeatureDetails from "./feature-card";
import stitched from "../assets/stitched.png";
import nonslip from "../assets/nonslip.png";
import smooth from "../assets/smooth.png";
import waterproof from "../assets/waterproof.png";
import washable from "../assets/washable.png";

const Features = () => {
  return (
    <div className="py-12 bg-white mobile:px-5 tablet:px-16 ">
      <div className="flex items-center h-full">
        <div>
          <p className=" text-center w-full mobile:text-2xl tablet:text-4xl font-black tracking-tight text-gray-700">
            Mousepad Features
          </p>
          <div className="grid grid-cols-12 mt-10 mobile:gap-y-16  tablet:gap-y-10">
            <FeatureDetails
              Title="Non-slip Base"
              className="border-r"
              Content="Anti-slip rubber base firmly grips and prevents sliding."
              Logo={nonslip}
            />
            <FeatureDetails
              Title="Stitched edge"
              className="tablet:border-r"
              Content="Crafted with durable stitched edges for long life span."
              Logo={stitched}
            />
            <FeatureDetails
              Title="Smooth surface"
              className="mobile:border-r tablet:border-r-0"
              Content="Polyester fabric is used for a smooth and extremely strong finish."
              Logo={smooth}
            />
            <div className="col-span-2 mobile:hidden tablet:block" />
            <FeatureDetails
              Title="Waterproof"
              className="tablet:border-r"
              Content="Crafted with durable stitched edges for long life span."
              Logo={waterproof}
            />
            <div className="col-span-3 mobile:block tablet:hidden" />

            <FeatureDetails
              Title="Washable"
              Content="Crafted with durable stitched edges for long life span."
              Logo={washable}
            />
            <div className="tablet:col-span-2 mobile:col-span-3" />
          </div>
        </div>
      </div>
    </div>
    // <div className=" bg-blue-500 mobile:px-5 tablet:px-12 flex justify-center">
    //   <div className=" grid grid-cols-12 py-12 gap-y-10 mobile:gap-x-8 tablet:gap-x-10">
    //     <FeatureDetails
    //       Title="Non-slip Base"
    //       Content="Anti-slip rubber base firmly grips and prevents sliding."
    //       Logo={
    //         <div className="nonslip rounded-full ring-2 shadow ring-blue-200">
    //           <img src={nonslip} className="h-28 w-28 rounded-full" alt="" />
    //         </div>
    //       }
    //     />
    //     <FeatureDetails
    //       Title="Stitched-edge"
    //       Content="Crafted with durable stitched edges for long life span."
    //       Logo={
    //         <div className="nonslip h-28 w-28 rounded-full ring-2 shadow ring-blue-200">
    //           <img src={stitched} className="h-28 w-28 rounded-full" alt="" />
    //         </div>
    //       }
    //     />
    //     <FeatureDetails
    //       Title="Smooth surface"
    //       Content="Polyester fabric is used for a smooth and extremely strong finish."
    //       Logo={
    //         <div className="nonslip h-28 w-28 rounded-full ring-2 shadow ring-blue-200">
    //           <img
    //             src={smooth}
    //             className="h-28 w-28 rounded-full object-cover"
    //             alt=""
    //           />
    //         </div>
    //       }
    //     />
    //     <div className="col-span-2 mobile:hidden tablet:block" />
    //     <FeatureDetails
    //       Title="Waterproof"
    //       Content="Crafted with durable stitched edges for long life span."
    //       Logo={
    //         <div className="nonslip h-28 w-28 rounded-full ring-2 shadow ring-blue-200">
    //           <img
    //             src={waterproof}
    //             className="h-28 w-28 rounded-full object-cover"
    //             alt=""
    //           />
    //         </div>
    //       }
    //     />
    //     <div className="tablet:hidden col-span-3" />
    //     <FeatureDetails
    //       Title="Washable"
    //       Content="Crafted with durable stitched edges for long life span."
    //       Logo={
    //         <div className="nonslip h-28 w-28 rounded-full ring-2 shadow ring-blue-200">
    //           <img
    //             src={washable}
    //             className="h-28 w-28 rounded-full object-cover"
    //             alt=""
    //           />
    //         </div>
    //       }
    //     />
    //     <div className="col-span-3" />
    //   </div>
    // </div>
  );
};

export default Features;
