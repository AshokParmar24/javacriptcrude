import React, {useEffect} from "react";
import axios from "axios";

function Putdata() {
    useEffect(()=>{
        Morning();
    },[])
async function Morning(){
        try{
            await axios.put("https://jsonplaceholder.typicode.com/posts/1",{
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
        }
        catch (e) {
            alert("try next time")
        }
}
    return (
        <h1>hidhgie</h1>

    )

}
export default Putdata;