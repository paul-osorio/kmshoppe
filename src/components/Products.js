import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="mobile:px-5 tablet:px-16 py-14 w-full bg-gray-100">
      <p className="tablet:text-4xl mobile:text-2xl text-gray-700 text-center w-full font-black">
        Products
      </p>
      <div className="overflow-x-auto pb-5 ">
        <div className="flex mt-10 ">
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
          <ProductCard Title="70x30 5mm" Price="499" Content="Plain mousepad" />
        </div>
      </div>
    </div>
  );
};

export default Products;
