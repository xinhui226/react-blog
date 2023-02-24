import { useState,useEffect } from "react";
import { getPosts } from "../api/posts";

//component
import Navbar from "../partials/Navbar";

export default function Posts(){
    // const [signup, setSignup] = useState({
    //     username : "",
    //     password : "",
    // });

    // const signupHandler = (e)=>{
    //     setSignup({...signupHandler,[e.target.name]:e.target.value})
    // }
    //set username
    // const usernameHandler = (e) =>{
    //     setUsername(e.target.value);
    // }

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const posts =async()=>{
            const data = await getPosts();
            setPosts(data);
        }

        posts();
    },[])

    return (
        <div>
            {/* <input type="text" placeholder="Username" name="username" value={signup.username} onChange={signupHandler}/>
            <input type="password" placeholder="password" name="password" value={signup.password} onChange={signupHandler}/> 
        */}
            <Navbar />
            {posts.map((post)=>{
                return (
                    <div key={post._id}>{post.title}</div>
                )
            })}
        </div>
    )
}