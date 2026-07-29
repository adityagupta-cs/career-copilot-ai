import { BriefcaseBusiness } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-6">
      <div className="flex items-center gap-2">
        <BriefcaseBusiness className="text-blue-500" size={32} />
        <h1 className="text-2xl font-bold text-white">
          CareerCopilot AI
        </h1>
      </div>

      <ul className=" flex gap-8 text-gray-300 font-medium">
        <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Features</li>
        <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Pricing</li>
        <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Contact</li>
      </ul>

      <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;