// src/components/ProductCard.jsx
import React from 'react';
// If this import fails, the fallback SVG below will handle it
import CheckCircle from '../assets/checkcircle.png'; 

const ProductCard = ({ product }) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group 
                    transform transition duration-300 ease-in-out 
                    hover:shadow-2xl hover:scale-[1.01] hover:border-green-500 border border-gray-100">
      
      {/* Product Image Area */}
      <div className="h-56 flex items-center justify-center p-6 bg-white border-b border-gray-50">
        <img
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
          src={product.imageUrl}
          alt={product.model}
        />
      </div>

      {/* Product Details */}
      <div className="p-6 grow flex flex-col text-left">
        <div> 
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
              {product.model}
            </h3>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase font-bold">
              {product.category}
            </span>
          </div>
          
          {product.description && (
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        {/* Features List */}
        {product.features && product.features.length > 0 && (
          <ul className="text-gray-600 text-sm mb-6 space-y-2 grow">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {/* Fallback Checkmark: Uses image if available, otherwise a green SVG dot */}
                {CheckCircle ? (
                  <img
                    src={CheckCircle}
                    alt=""
                    className="h-4 w-4 mr-2 mt-0.5 shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; }} // Hide if file not found
                  />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2 mt-1.5 shrink-0" />
                )}
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* CTA Button */}
        <div className="mt-auto"> 
          <div className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent 
                          text-sm font-bold rounded-md text-white bg-green-600 
                          group-hover:bg-green-700 transition-colors w-full">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;