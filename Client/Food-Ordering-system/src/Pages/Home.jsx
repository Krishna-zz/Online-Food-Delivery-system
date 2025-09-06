import { useNavigate } from "react-router-dom";


function Home(){

    const navigate = useNavigate()

 return(
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div  className="text-[27px] font-bold text-red-500">Foodie</div>
        <div className="flex gap-6">
          <h1  className="hover:text-red-500 mt-2  font-semibold hover:scale-105 transition-all duration-300 text-gray-500 text-[18px]">Foods</h1>
          <h1  className="hover:text-red-500 mt-2  font-semibold hover:scale-105 transition-all duration-300 text-gray-500 text-[17px]">My Orders</h1>
          <h1
            
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-500 hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Login
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5xl font-extrabold  text-red-500 mb-4">
          Welcome to Foodie 🍕
        </h1>
        <p className="text-lg text-gray-600 mb-6  max-w-2xl">
          Order delicious meals from your favorite restaurants with just a few
          clicks. Fast delivery, easy checkout, and a variety of cuisines!
        </p>
        <button
          onClick={() => navigate('/foods')}
          className="bg-red-500 hover:shadow-2xl text-white px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 text-lg hover:bg-red-500 shadow-md"
        >
          Order Now
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </footer>
    </div>
  );

}

export default Home