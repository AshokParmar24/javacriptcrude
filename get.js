import React, {useEffect, useState} from "react";
import axios from "axios";

function  Get() {
    const [data,setData]=useState([])
useEffect(()=>{
    getData()
},[])

    async function getData() {

        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(res.data);
            setData(res.data);

        }
        catch (e) {
              console.log(e)
        }

    }
    console.log(data)
    return (
        <div>
            <h1>my employment</h1>
           <table>
               <thead>
                    <tr>
                        <th>userId</th>
                        <th>title</th>
                        <th>id</th>
                        <th>body</th>
                    </tr>
               </thead>
               <tbody>
               {(data||[]).map((value)=>{
                   return (
                       <tr>
                           <td>{value.userId}</td>
                           <td>{value.title}</td>
                           <td>{value.id}</td>
                           <td>{value.body}</td>
                           <trd><button>delet</button></trd>
                       </tr>
                   )
               })

               }
               </tbody>
           </table>
        </div>
    )

}
export default Get;