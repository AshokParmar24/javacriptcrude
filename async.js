import React from "react";


function Async() {
   async function getData() {
      try {
         const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
         console.log(data)
      }
      catch (error) {
         console.log(error)
      }
   }
   getData()
   return (
      <h1>kjfghh</h1>
   )

}
export default Async;