// import React, { useState, useEffect } from 'react';



// const CleanAll = () => {
//     useEffect(() => {
//       const apiUrl = "https://playground.4geeks.com/apis/fake/todos/user/michaelmira";
  
//       const cleanAllTasks = async () => {
//         try {
//             let updatedTasks = [];

//             if (updatedTasks.length === 0) {
//                 let response = await fetch(apiUrl, {
//                     method: "PUT",
//                     body: JSON.stringify([{label: "example Task", done: false}]),
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                });
            
//                if (response.ok) {
//                     setTodos(updatedTasks);
//                }
//             } else { 
//                 let response = await fetch(apiUrl, {
//                     method:"PUT",
//                     body: JSON.stringify(updatedTasks),
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 });

//                 if (response.ok) {
//                     setTodos(updatedTasks);
//                 }
//             }
//         } catch (error) {
//             console.error("Error cleaning all tasks:", error.message);
//         }
//     };
//     }, []); // Empty dependency array to run the effect only once on mount
//   return (
//         <>
//         <button onClick={cleanAllTasks} >

//         </button>
            
//         </>
//     );
// }

// export default CleanAll