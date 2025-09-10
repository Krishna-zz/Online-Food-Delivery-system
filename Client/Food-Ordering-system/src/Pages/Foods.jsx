import { ShoppingCartIcon } from "@heroicons/react/24/solid"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Foods({ cartItems, setCartItems }){
 
    const navigate = useNavigate()

      const [foodItems, setFoodItems] = useState([])


      useEffect(() => {
        fetch("http://localhost:3000/user/foodCard")
        .then((res) => res.json())
        .then((data) => setFoodItems(data))
        .catch((err) => console.error("Error fetching Food Items", err)
        )
      },[])

       const handleAddToCart = (food) => {
            if (!cartItems.find((item) => item._id === food._id)) {
            setCartItems([...cartItems, food]);
          }
        };

 return(


 
    <div className="min-h-screen bg-gray-50 flex-col  justify-center ">

    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md mb-3 sticky top-0 z-50">
      {/* Logo */}
      <div 
        
        className="text-[27px] font-bold text-red-500 cursor-pointer"
      >
        Foodie
      </div>

      {/* Links */}
      <div className="flex gap-6 items-center">
        

        {/* View Cart */}
        <button
          onClick={() => navigate('/Cart')}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-md"
        >
          <ShoppingCartIcon className="w-5 h-5" />
          View Cart ({cartItems.length})
        </button>
      </div>
    </nav>
  
               <div className="text-center mt-8 mb-15">
                 <h1 className="text-3xl md:text-4xl font-bold text-red-500">
                     Delicious Dishes, Delivered to You 🍽️
                  </h1>
                   <p className="text-gray-500 mt-2 text-lg">
                    Explore our menu and add your favorites to the cart
                    </p>
               </div>
       
      {/* Card */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
          {foodItems.map((food) => {
             const isAdded = cartItems.find((item) => item._id === food._id);
          return (
         <div
            key={food._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col w-80 hover:shadow-2xl transition"
           >
        {/* Image */}
           < div className="relative w-full h-48">
           <img
             src={`http://localhost:3000${food.image}`} // from backend
             alt={food.name}
             className="w-full h-full object-cover"
          />
         <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
             ₹{food.price}
          </span>
      </div>

      {/* Details */}
        <div className="flex flex-col flex-grow p-4 text-center">
           <h3 className="text-xl font-bold text-gray-800">{food.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{food.category}</p>

              {/* Button */}
              <button
               onClick={() => handleAddToCart(food)}
                  disabled={isAdded}
                  className={`mt-auto flex items-center justify-center gap-2 px-5 py-2 rounded-xl font-semibold shadow-md transition ${
                    isAdded
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
              >
               <ShoppingCartIcon className="w-5 h-5" />
                    {isAdded ? "Added" : "Add to Cart"}
                </button>
           </div>
        </div>
          )
      })}
  </div>
 </div>
  
  );
    
}

export default Foods