import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { store } from '../context/Context';


const ProductCard = ({ product }) => {
    const { title, price, thumbnail, rating, discountPercentage, stock } = product;
    const hasDiscount = discountPercentage > 0;
    const discountedPrice = hasDiscount ? (price * (1 - discountPercentage / 100)).toFixed(2) : null;
    const { addToCart } = useContext(store);


    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 relative">
            {/* Badge for Discount */}
            {hasDiscount && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
                    -{discountPercentage}% OFF
                </div>
            )}
            {/* Low stock badge */}
            {stock < 10 && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
                    Low Stock
                </div>
            )}
            <Link to={`/products/${product.id}`}>
                <div className="relative pt-[100%]">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
                <div className="flex items-center mt-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{rating?.toFixed(1) || 'N/A'}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <div>
                        {hasDiscount ? (
                            <>
                                <span className="text-xl font-bold text-indigo-600">${discountedPrice}</span>
                                <span className="text-sm text-gray-400 line-through ml-2">${price.toFixed(2)}</span>
                            </>
                        ) : (
                            <span className="text-xl font-bold text-indigo-600">${price.toFixed(2)}</span>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            addToCart(
                                {
                                    name: product.title,
                                    price: product.price,
                                    thumbnail: product.thumbnail,
                                    id: product.id,
                                    qty: 1
                                }
                            )
                        }}
                        className="bg-indigo-600 text-white px-3 py-1 cursor-pointer rounded-lg hover:bg-indigo-700 transition text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;