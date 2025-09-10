
import { useNavigate } from "react-router-dom";



function Cart({ cartItems, setCartItems }) {

     const navigate = useNavigate();

      

  const handlePlaceOrder = () => {
    navigate("/order-success");
    setCartItems([]); // Clear cart after order
  };


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={`http://localhost:3000${item.image}`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />

              {/* Info */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-red-500 font-semibold mt-1">₹{item.price}</p>
              </div>
            </div>
          ))}

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 shadow-lg transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
