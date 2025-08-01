import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center overflow-hidden w-full" 
         style={{backgroundImage: "url('/header_img.png')"}} 
         id="Header">
    <Navbar/>
    </div>
  )
}

export default Header