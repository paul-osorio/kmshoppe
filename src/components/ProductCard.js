import imageholder from "../assets/imageholder.jpg";

const ProductCard = ({ Title, Price, Content }) => {
  return (
    <div className="mr-5">
      <div className=" w-52 shadow-lg border rounded-xl bg-white">
        <img
          src={imageholder}
          className="object-cover h-32 w-full rounded-t-lg"
          alt=""
        />
        <div className="py-4">
          <p className="px-5 font-bold text-gray-400">{Title}</p>
          <p className="px-5 text-gray-500 text-sm font-bold">{Content}</p>
        </div>

        <div className="bg-gray-50 rounded-b-lg py-3 pt-6">
          <p className="px-5 font-bold text-xl text-gray-600 leading-3">
            P{Price}
          </p>
          <p className="px-5 text-xs text-gray-400">shopee link</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
