import React, {useEffect} from "react";
import axios from "axios";

function Post() {

    useEffect(()=>{
        Apply()
    },[]);
    async function Apply() {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                Name: 'Fred',
                Age: '23',
                id:22
            })

        }
        catch (e) {
            console.log("please this api do not post any data")
        }
    }


    return (
        <h1>Good Mornig</h1>    )
}
export default Post;