import React, { useEffect, useState } from "react";

function Hello() {
  const [data, setData] = useState([]);


    fetch("https://jsonplaceholder.typicode.com/users/1").then((res)=>{
     console.log( res)
    }).catch((e)=>{
      console.log(e)
    })

    // if (data) {
    //   console.log("heloo you are success fully ");
    //   resolve();
    // } else {
    //   console.log("try your api is not fecch");
    //   reject();
    // }


  return (
    <h1>
      {/*promise.then((data) =>{console.log(data)})*/}
      {/*promise.then((data)=>{console.log(data)})*/}
    </h1>
  );
}
export default Hello;
