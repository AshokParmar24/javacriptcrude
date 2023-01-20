import React, {useEffect} from "react";
import axios from "axios";

function Delete(){
    useEffect(()=>{
        deleteData();
    });
    async function deleteData(){
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/2`)
        }
        catch (e) {
            console.log("ihgihsfgihsidguifigho8i")
        }
    }
    return (
        <h1>delete data</h1>
    )
}
export default Delete;