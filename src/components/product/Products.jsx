import React, { memo } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { Card } from "antd";
import Sceleton from "./Sceleton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ data, loading }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  console.log(data);
  if (loading) {
    return <Sceleton limit={10} />;
  }

  let items = data?.map((product) => (
    <Card key={product.id} className=" relative">
      <button className="flex absolute right-2 top-2">
        <FaHeart
          onClick={() =>
            dispatch({ type: "TOGGLE_WISHLIST", payload: product })
          }
          className="text-20px hover:text-red-900"
        />
      </button>
      <div
        className="s rounded-lg flex flex-col justify-between p-3 mb-7 "
        key={product.id}
      >
        <p className="p-3 bg-green-600 rounded-tl-[8px] rounded-br-[8px] absolute top-0 left-0">
          new
        </p>
        <div className="w-full h-60">
          <Link to={`/product/${product.id}`}>
            <img
              className="w-full h-full object-contain duration-300 hover:scale-105"
              src={product.images[0]}
              alt="Photo"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p>{product.title}</p>
          <div className="flex gap-16">
            <LiaStarSolid className="text-[yellow]" />
            <p>(4.0)</p>
          </div>
          <div className="flex justify-between">
            <strong>
              {product.price} USD <del className="text-gray-400">$53</del>
            </strong>

            <button
              className="border flex items-center px-3 rounded-xl bg-green-500 py-1 text-[#fff]"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: product });
              }}
            >
              <PiShoppingCartLight />
              add
            </button>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <div className="container items-center justify-center mx-auto">
      <div className="grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items}
      </div>
    </div>
  );
};

export default memo(Product);
