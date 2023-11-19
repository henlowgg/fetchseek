// import React, { useEffect } from "react";
// import "./dogLoading.scss";

// const DogLoading = () => {
//   useEffect(() => {
//     // Stop the loading animation after 5 seconds
//     const timeout = setTimeout(() => {
//       // Set isLoading to false in the parent component (App.js)
//       window.parent.postMessage({ type: "stopLoading" }, "*");
//     }, 5000);

//     // Clear the timeout if the component unmounts
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div>
//       <div className="dog">
//         <div className="dog-body">
//           <div className="dog-tail">
//             <div className="dog-tail">
//               <div className="dog-tail">
//                 <div className="dog-tail">
//                   <div className="dog-tail">
//                     <div className="dog-tail">
//                       <div className="dog-tail">
//                         <div className="dog-tail"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dog-torso"></div>
//         <div className="dog-head">
//           <div className="dog-ears">
//             <div className="dog-ear"></div>
//             <div className="dog-ear"></div>
//           </div>
//           <div className="dog-eyes">
//             <div className="dog-eye"></div>
//             <div className="dog-eye"></div>
//           </div>
//           <div className="dog-muzzle">
//             <div className="dog-tongue"></div>
//           </div>
//         </div>
//       </div>
//       <div className="ball" tabIndex="0"></div>
//     </div>
//   );
// };

// export default DogLoading;
