import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../context/Context";
import { MdDeleteForever } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function AddToCartPage() {
  const { cart, qtyHandler, removeItem } = useContext(store);

  // Total Items
  const totalItems = cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  // Total Price
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  // If cart is empty, show a friendly empty state
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="text-6xl mb-4">
            <FaShoppingCart className='w-7 h-7  text-indigo-600' />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added any items yet.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
        <FaShoppingCart className="w-7 h-7 text-indigo-600" />
        Shopping Cart
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-4 hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 p-4">
                {/* Image */}
                <div className="sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h5 className="text-xl font-bold text-gray-800 line-clamp-1">
                      {item.title}
                    </h5>
                    <p className="text-indigo-600 font-semibold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={() => qtyHandler("dec", item.id)}
                      className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center font-bold text-gray-600 hover:text-gray-800"
                      aria-label="Decrease quantity"> -</button>
                    <span className="font-bold text-indigo-600 min-w-[30px] text-center">
                      {item.qty}
                    </span>
                  <button onClick={() => qtyHandler("inc", item.id)}
                      className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center font-bold text-gray-600 hover:text-gray-800"
                      aria-label="Decrease quantity"> +</button>
                  </div>

                  {/* Total & Remove */}
                  <div className="text-right sm:text-left">
                    <p className="font-bold text-indigo-600 text-lg">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-indigo-500 cursor-pointer hover:text-indigo-700 text-md font-bold mt-1 flex items-center gap-1 sm:justify-end"
                    >
                      <MdDeleteForever className="w-8 h-7 text-red-700" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-96">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h4>

            <div className="space-y-2 ">
              <div className="flex justify-between py-2 text-gray-700">
                <span className="text-xl">Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 text-gray-700">
                <span  className="text-xl">Delivery</span>
                <span className="text-green-700 font-bold text-xl">Free</span>
              </div>

              <div className="flex justify-between py-2 text-gray-700">
                <span  className="text-xl">Tax</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            <div className="flex justify-between py-2 text-xl font-bold text-gray-800">
              <span>Total</span>
              <span className="text-indigo-600">
                ${(totalPrice + totalPrice * 0.1).toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center text-indigo-600 hover:text-indigo-800 text-sm mt-4 transition"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}