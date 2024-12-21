import logo from "../assets/logo.svg"
import { WiDaySunny } from "react-icons/wi";
const Navbar = () => {
  return <nav className="mb-20 flex items-center bg-red-800 justify-between py-2">
        <div className="logoImage flex flex-shrink-0 items-center w-25 mx-5">
            <img src={logo} alt="logo" />
        </div>
        <div className="text-2xl m-8 text-lime-500">
        <ul className="flex flex-row gap-4 ">
            <li>Home</li>
            <li>Segeration guide</li>
            <li>Dumping Zone</li>
            <li>Vehicle Support</li>
            <li>Eco.bot</li>
            <li>image.ai</li>
            <li>Admin</li>
            <WiDaySunny />
        </ul>
        </div>
    </nav>
  
}

export default Navbar
