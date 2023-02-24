import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-12 w-screen bg-black text-white flex justify-end gap-6 px-12 items-center uppercase">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/addpost">Add Post</NavLink>
    </div>
  );
}
