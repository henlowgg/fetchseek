
































// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./components/Login";
// import HomePage from "./components/HomePage";
// import Navbar from "./components/Navbar";
// import DogLoading from "./components/DogLoading/DogLoading"; // Import DogLoading component
// import styles from "./App.scss";
// import "./components/tailwind-login.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("isLoggedIn") === "true"
//   );
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "true");
//     setShouldRedirect(true);
//     setIsLoading(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem("isLoggedIn", "false");
//   };

//   useEffect(() => {
//     if (shouldRedirect) {
//       setShouldRedirect(false);
//     }
//   }, [shouldRedirect]);

//   useEffect(() => {
//     if (isLoading) {
//       const timeout = setTimeout(() => {
//         setIsLoading(false);
//       }, 5000);

//       return () => clearTimeout(timeout);
//     }
//   }, [isLoading]);

//   return (
//     <div className={`${styles.App} w-screen`}>
//       <Router>
//         {isLoading ? (
//           <div className="flex justify-center items-center h-screen">
//             <DogLoading />
//           </div>
//         ) : (
//           <>
//             {isLoggedIn && <Navbar onLogout={handleLogout} />}
//             <div style={{ marginTop: "64px" }}></div>
//             <Routes>
//               <Route
//                 path="/"
//                 element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
//               />
//               <Route
//                 path="/home"
//                 element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
//               />
//               <Route
//                 path="/login"
//                 element={
//                   isLoggedIn ? (
//                     <Navigate to="/home" />
//                   ) : (
//                     <Login onLogin={handleLogin} />
//                   )
//                 }
//               />
//             </Routes>
//           </>
//         )}
//       </Router>
//     </div>
//   );
// };

// export default App;
