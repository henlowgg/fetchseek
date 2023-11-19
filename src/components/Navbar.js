// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate("/");
//   };

//   const navToggle = () => {
//     const btn = document.getElementById("menuBtn");
//     const nav = document.getElementById("menu");

//     btn.classList.toggle("open");
//     nav.classList.toggle("flex");
//     nav.classList.toggle("hidden");
//   };

//   return (
//     <header id="top" className="relative bg-gray-800">
//       <nav
//         id="site-menu"
//         className="display flex flex-col flex-no-wrap sm:flex-row sm:justify-between items-center w-full bg-gray-800"
//       >
//         <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
//           <Link to="/" className="no-underline py-1">
//             <h1 className="font-bold text-lg tracking-widest text-white">
//               rescue
//             </h1>
//           </Link>
//           {/* <button
//             id="menuBtn"
//             className="hamburger block sm:hidden focus:outline-none"
//             type="button"
//             onClick={navToggle}
//           >
//             <span className="hamburger__top-bun"></span>
//             <span className="hamburger__bottom-bun"></span>
//           </button> */}
//         </div>
//         <div
//           id="menu"
//           className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
//         >
//           <a
//             className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 text-white"
//             href="https://github.com/henlowgg"
//             target="_blank"
//             rel="noreferrer"
//           >
//             About
//           </a>
//           <a
//             className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2 text-white"
//             href="#bottom"
//           >
//             Features
//           </a>
//           <button
//             className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2 text-white"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



  /* import React from "react"; 
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <ul className="flex justify-center space-x-4">
//         <li>
//           <Link to="/" className="text-white hover:text-gray-300">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/search" className="text-white hover:text-gray-300">
//             Search
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-white hover:text-gray-300">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="text-white hover:text-gray-300">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;*/

