import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center overflow-hidden w-full" 
         style={{backgroundImage: "url('/header_img.png')"}} 
         id="Header">
    <Navbar/>
    <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
     <h2 className="text-4xl sm:text-5xl md:text-6xl max-w-xl font-semibold mx-auto text-center px-4">
  Explore homes that fit your dreams
</h2>

      <div className="space-x-6 mt-16">
          <a href="#Project" className="border border-white px-8 py-3 rounded">Projects</a>
          <a href="#Contact us" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
      </div>
     </div>
    </div>
  )
}

export default Header