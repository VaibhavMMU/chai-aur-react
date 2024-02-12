import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/VaibhavMMU")
    //     .then(res=> res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    const data = useLoaderData();
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github;


export const githubLoader = async() => {
    const response = await fetch('https://api.github.com/users/VaibhavMMU')
    return response.json()
}