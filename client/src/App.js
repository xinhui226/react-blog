import {Routes, Route} from  'react-router-dom';

// component
import Navbar from "./partials/Navbar";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
